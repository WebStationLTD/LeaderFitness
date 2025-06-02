<script setup lang="ts">
const { loadProductsForPage, updateProductList, products, getCurrentPageFromRoute } = useProducts();
const { isQueryEmpty } = useHelpers();
const { storeSettings } = useAppConfig();
const route = useRoute();
const slug = route.params.slug as string;

// Задаваме базови SEO данни синхронно за SSR
useHead({
  title: 'Products',
  meta: [{ name: 'description', content: 'Products in this category' }],
});

// Подготвяме филтрите за категорията
const categoryFilters = {
  categoryIn: [slug],
  search: route.query.search as string,
  priceMin: route.query.priceMin ? parseFloat(route.query.priceMin as string) : undefined,
  priceMax: route.query.priceMax ? parseFloat(route.query.priceMax as string) : undefined,
  onSale: route.query.sale === 'true' ? true : undefined,
  orderby: (route.query.orderby as string) || 'DATE',
};

onMounted(async () => {
  try {
    // Зареждаме SEO данни за категорията САМО в браузъра
    const { data: categoryData } = await useAsyncGql('getProductCategories', { first: 1, slug: [slug] });
    const productCategory = categoryData.value?.productCategories?.nodes?.[0] || null;

    if (productCategory?.seo) {
      // Използване на SEO данни от Yoast ако са налични
      const categoryTitle = productCategory.seo?.title || productCategory.name || 'Products';
      const categoryDescription = productCategory.seo?.metaDesc || productCategory.description || 'Products in this category';

      useHead({
        title: categoryTitle,
        meta: [
          { name: 'description', content: categoryDescription },
          { property: 'og:title', content: productCategory.seo?.opengraphTitle || categoryTitle },
          { property: 'og:description', content: productCategory.seo?.opengraphDescription || categoryDescription },
        ],
        link: [{ rel: 'canonical', href: productCategory.seo?.canonical || '' }],
      });

      // Добавяне на структурирани данни (schema.org) ако са налични в Yoast
      if (productCategory.seo?.schema?.raw) {
        useHead({
          script: [
            {
              type: 'application/ld+json',
              innerHTML: productCategory.seo.schema.raw,
            },
          ],
        });
      }
    }
  } catch (error) {
    console.warn('Не можахме да заредим SEO данните за категорията (очаквано при първо зареждане):', error);
    // Не правим нищо - вече имаме базови SEO данни
  }

  try {
    // Зареждаме продуктите за категорията с page-based pagination
    const currentPageNum = getCurrentPageFromRoute();
    await loadProductsForPage(currentPageNum, categoryFilters);

    // Ако има query параметри, обновяваме списъка
    if (!isQueryEmpty.value) {
      updateProductList();
    }
  } catch (error) {
    console.error('Грешка при зареждане на продукти за категорията:', error);
  }
});

watch(
  () => route.query,
  () => {
    if (route.name !== 'product-category-slug') return;
    updateProductList();
  },
);

watch(
  () => route.params,
  () => {
    if (route.name !== 'product-category-slug') return;
    updateProductList();
  },
);
</script>

<template>
  <div class="container flex items-start gap-16 px-2" v-if="products.length || true">
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
</template>
