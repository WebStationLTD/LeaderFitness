<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue';

const { setProducts, updateProductList, products, loadProductsForPage, getCurrentPageFromRoute } = useProducts();
const { isQueryEmpty } = useHelpers();
const { storeSettings } = useAppConfig();
const route = useRoute();

// За да контролираме показването на компонентите
const isLoading = ref(true);

// По-детайлно логване за дебъг
console.log('Текущ route:', {
  fullPath: route.fullPath,
  path: route.path,
  name: route.name,
  params: route.params,
});

// Извличане на slug параметъра от route параметрите
let slugFromParams = '';

// За page-based маршрути използваме categorySlug параметъра
if (route.params && route.params.categorySlug) {
  slugFromParams = typeof route.params.categorySlug === 'string' ? route.params.categorySlug : String(route.params.categorySlug);
}

// Резервен вариант - използваме slug параметъра
if (!slugFromParams && route.params && route.params.slug) {
  slugFromParams = typeof route.params.slug === 'string' ? route.params.slug : String(route.params.slug);
}

// Като последен вариант, извличаме от path (за стари URL-и)
if (!slugFromParams && route.path) {
  const pathParts = route.path.split('/');
  // Търсим categorySlug-а в пътя - това е частта след 'produkt-kategoriya'
  const categoryIndex = pathParts.findIndex((part) => part === 'produkt-kategoriya');
  if (categoryIndex !== -1 && pathParts[categoryIndex + 1] && pathParts[categoryIndex + 1] !== 'page') {
    const categorySlug = pathParts[categoryIndex + 1];
    if (categorySlug) {
      slugFromParams = categorySlug;
    }
  }
}

console.log('Извлечен slug:', slugFromParams);

// Проверяваме дали slug-а е празен
if (!slugFromParams) {
  console.log('Използваме всички продукти, тъй като slug е празен');
} else {
  console.log('Slug от URL (преди декодиране):', slugFromParams);
}

// Проверяваме дали slug-а съдържа кирилица или други специални символи
let decodedSlug = slugFromParams;
try {
  if (slugFromParams) {
    decodedSlug = decodeURIComponent(slugFromParams);
    console.log('Декодиран slug:', decodedSlug);
  }
} catch (error) {
  console.error('Грешка при декодиране на URL:', error);
}

const slug = ref(slugFromParams);

// Дефинираме типа за категорията
interface Category {
  slug?: string | null;
  name?: string | null;
  databaseId?: number | null;
  id?: string | null;
  description?: string | null;
  count?: number | null;
  uri?: string | null;
  image?: any;
  children?: { nodes: any[] } | null;
  seo?: {
    title?: string | null;
    metaDesc?: string | null;
    metaKeywords?: string | null;
    metaRobotsNoindex?: string | null;
    metaRobotsNofollow?: string | null;
    opengraphTitle?: string | null;
    opengraphDescription?: string | null;
    opengraphImage?: any;
    twitterTitle?: string | null;
    twitterDescription?: string | null;
    twitterImage?: any;
    canonical?: string | null;
    schema?: { raw?: string | null } | null;
  } | null;
}

const matchingCategory = ref<Category | null>(null);
const categoryTitle = ref('');
const categoryDescription = ref('');

// Зареждаме категориите
const { data: categoriesData } = await useAsyncGql('getProductCategories');
const allCategories = computed(() => categoriesData.value?.productCategories?.nodes || []);

// Опитваме се първо да намерим категорията
if (slug.value) {
  matchingCategory.value = allCategories.value.find((cat: Category) => cat.slug && (cat.slug === slug.value || cat.slug === decodedSlug)) || null;

  console.log('Намерена категория:', matchingCategory.value);
}

// Подготвяме филтрите за категорията
    const categoryFilters = {
      categoryIn: [slug.value],
      search: route.query.search as string,
      priceMin: route.query.priceMin ? parseFloat(route.query.priceMin as string) : undefined,
      priceMax: route.query.priceMax ? parseFloat(route.query.priceMax as string) : undefined,
      onSale: route.query.sale === 'true' ? true : undefined,
      orderby: (route.query.orderby as string) || 'DATE',
    };

// Зареждаме продуктите в onMounted
onMounted(async () => {
  // Зареждаме продуктите след като компонентът е монтиран
    const currentPageNum = getCurrentPageFromRoute();
    await loadProductsForPage(currentPageNum, categoryFilters);

  // Ако има query параметри, обновяваме списъка
  if (!isQueryEmpty.value) {
    updateProductList();
  }
});

// Преминаваме към режим "зареден" след кратко време
setTimeout(() => {
  isLoading.value = false;
}, 500);

watch(
  () => route.query,
  () => {
    if (route.name !== 'produkt-kategoriya-slug' && route.name !== 'produkt-kategoriya-page-pager') return;
    updateProductList();
  },
);

watch(
  () => route.params,
  () => {
    if (route.name !== 'produkt-kategoriya-slug' && route.name !== 'produkt-kategoriya-page-pager') return;
    updateProductList();
  },
);

// Използване на SEO данни от Yoast ако са налични
categoryTitle.value = matchingCategory.value?.seo?.title || matchingCategory.value?.name || decodedSlug || 'All Products';
categoryDescription.value =
  matchingCategory.value?.seo?.metaDesc ||
  matchingCategory.value?.description ||
  `Products in category ${matchingCategory.value?.name || decodedSlug || 'All Products'}`;

useHead({
  title: categoryTitle.value,
  meta: [
    { name: 'description', content: categoryDescription.value },
    { property: 'og:title', content: matchingCategory.value?.seo?.opengraphTitle || categoryTitle.value },
    { property: 'og:description', content: matchingCategory.value?.seo?.opengraphDescription || categoryDescription.value },
  ],
  link: [{ rel: 'canonical', href: matchingCategory.value?.seo?.canonical || '' }],
});

// Добавяне на структурирани данни (schema.org) ако са налични в Yoast
if (matchingCategory.value?.seo?.schema?.raw) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: matchingCategory.value.seo.schema.raw,
      },
    ],
  });
}
</script>

<template>
  <div class="container px-2">
    <div class="flex items-start gap-16" v-if="products?.length || true">
      <Filters v-if="storeSettings.showFilters" :hide-categories="true" />

      <div class="w-full">
        <div class="flex items-center justify-between w-full gap-4 mt-8 md:gap-8">
          <ProductResultCount />
          <OrderByDropdown class="hidden md:inline-flex" v-if="storeSettings.showOrderByDropdown" />
          <ShowFilterTrigger v-if="storeSettings.showFilters" class="md:hidden" />
        </div>
        <ProductGrid />
      </div>
    </div>

    <NoProductsFound v-else>
      <div class="text-center">
        <h2 class="text-xl font-bold mb-4">No products found in this category.</h2>
        <div class="mt-4 text-sm text-gray-600 border p-4 rounded text-left inline-block">
          <p><strong>Category slug:</strong> {{ slug || 'Not provided' }}</p>
        </div>
      </div>
    </NoProductsFound>
  </div>
</template>
