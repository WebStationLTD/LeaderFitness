<script setup lang="ts">
import { ref, watch } from 'vue';

const { loadProductsForPage, updateProductList, products, getCurrentPageFromRoute, isLoading } = useProducts();
const { isQueryEmpty } = useHelpers();
const { storeSettings } = useAppConfig();
const route = useRoute();

// Извличане на slug параметъра от route параметрите
let slugFromParams = '';

// За page-based маршрути използваме categorySlug параметъра
if (route.params && 'categorySlug' in route.params && route.params.categorySlug) {
  slugFromParams = typeof route.params.categorySlug === 'string' ? route.params.categorySlug : String(route.params.categorySlug);
}

// Резервен вариант - използваме slug параметъра
if (!slugFromParams && route.params && 'slug' in route.params && route.params.slug) {
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

// Проверяваме дали slug-а съдържа кирилица или други специални символи
let decodedSlug = slugFromParams;
try {
  if (slugFromParams) {
    decodedSlug = decodeURIComponent(slugFromParams);
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
const categoryTitle = ref(decodedSlug || 'All Products');
const categoryDescription = ref(`Products in category ${decodedSlug || 'All Products'}`);

// Задаваме базови SEO данни синхронно за SSR
useHead({
  title: categoryTitle.value,
  meta: [{ name: 'description', content: categoryDescription.value }],
});

// Server-side data loading
const { data: initialData, error } = await useAsyncData(`category-${slug.value}`, async () => {
  try {
    // Зареждаме продуктите ВЕДНАГА с категорийния филтър
    const categoryFilters = {
      categoryIn: slug.value ? [slug.value] : undefined,
      search: route.query.search as string,
      priceMin: route.query.priceMin ? parseFloat(route.query.priceMin as string) : undefined,
      priceMax: route.query.priceMax ? parseFloat(route.query.priceMax as string) : undefined,
      onSale: route.query.sale === 'true' ? true : undefined,
      orderby: (route.query.orderby as string) || 'DATE',
      order: (route.query.order as string) || 'DESC',
      rating: route.query.rating ? [parseInt(route.query.rating as string, 10)] : undefined,
    };

    const currentPageNum = getCurrentPageFromRoute();
    await loadProductsForPage(currentPageNum, categoryFilters);

    return { success: true };
  } catch (err) {
    console.error('Грешка при зареждане на продукти:', err);
    return { success: false, error: err };
  }
});

// Зареждаме категорийните данни и SEO САМО в браузъра
onMounted(async () => {
  try {
    const { data: categoriesData } = await useAsyncGql('getProductCategories');
    const allCategories = categoriesData.value?.productCategories?.nodes || [];

    // Опитваме се първо да намерим категорията
    if (slug.value) {
      matchingCategory.value = allCategories.find((cat: Category) => cat.slug && (cat.slug === slug.value || cat.slug === decodedSlug)) || null;
    }

    // Обновяваме SEO данните ако имаме категория
    if (matchingCategory.value?.seo) {
      categoryTitle.value = matchingCategory.value.seo.title || matchingCategory.value.name || decodedSlug || 'All Products';
      categoryDescription.value =
        matchingCategory.value.seo.metaDesc ||
        matchingCategory.value.description ||
        `Products in category ${matchingCategory.value.name || decodedSlug || 'All Products'}`;

      useHead({
        title: categoryTitle.value,
        meta: [
          { name: 'description', content: categoryDescription.value },
          { property: 'og:title', content: matchingCategory.value.seo.opengraphTitle || categoryTitle.value },
          { property: 'og:description', content: matchingCategory.value.seo.opengraphDescription || categoryDescription.value },
        ],
        link: [{ rel: 'canonical', href: matchingCategory.value.seo.canonical || '' }],
      });

      // Добавяне на структурирани данни (schema.org) ако са налични
      if (matchingCategory.value.seo.schema?.raw) {
        useHead({
          script: [
            {
              type: 'application/ld+json',
              innerHTML: matchingCategory.value.seo.schema.raw,
            },
          ],
        });
      }
    }
  } catch (error) {
    console.warn('Не можахме да заредим категориите (очаквано при първо зареждане):', error);
  }
});

// Следим за промени в заявката и параметрите
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
</script>

<template>
  <div class="container px-2">
    <div v-if="!isLoading && products && products.length" class="flex items-start gap-16">
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
    <div v-else-if="isLoading" class="py-16 text-center">
      <div class="inline-block p-4 text-gray-500">
        <div class="h-8 w-8 border-t-2 border-primary border-solid rounded-full mx-auto animate-spin mb-4"></div>
        <p>Зареждане на продукти...</p>
      </div>
    </div>
    <div v-else-if="error" class="py-16 text-center">
      <div class="text-red-500">
        <p>Грешка при зареждане на продукти. Моля опитайте отново.</p>
      </div>
    </div>
    <NoProductsFound v-else>
      <div class="text-center">
        <h2 class="text-xl font-bold mb-4">{{ slug ? 'No products found in this category.' : 'All Products' }}</h2>
        <div v-if="slug" class="mt-4 text-sm text-gray-600 border p-4 rounded text-left inline-block">
          <p><strong>URL slug:</strong> {{ slug || 'Not provided' }}</p>
          <p><strong>Decoded slug:</strong> {{ decodedSlug || 'Not decoded' }}</p>
        </div>
        <div v-else class="mt-4 text-sm text-gray-600">
          <p>Please select a category from the menu.</p>
        </div>
      </div>
    </NoProductsFound>
  </div>
</template>
