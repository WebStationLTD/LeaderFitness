<script setup lang="ts">
const { loadProductsForPage, updateProductList, products, getCurrentPageFromRoute } = useProducts();
const route = useRoute();
const { storeSettings } = useAppConfig();
const { isQueryEmpty } = useHelpers();

// Задаваме базови SEO данни синхронно за SSR
useHead({
  title: 'Products',
  meta: [{ name: 'description', content: 'Discover our products' }],
});

// Зареждаме първата страница с продукти с server-side pagination в onMounted
const initialFilters = {
  search: route.query.search as string,
  categoryIn: route.query.category ? [route.query.category as string] : undefined,
  priceMin: route.query.priceMin ? parseFloat(route.query.priceMin as string) : undefined,
  priceMax: route.query.priceMax ? parseFloat(route.query.priceMax as string) : undefined,
  onSale: route.query.sale === 'true' ? true : undefined,
  orderby: (route.query.orderby as string) || 'DATE',
};

onMounted(async () => {
  try {
    // Зареждаме SEO данни за страницата с продукти САМО в браузъра
    const { data: pagesData } = await useAsyncGql('getShopPage');
    const productPage = pagesData.value?.page;

    // Ако имаме SEO данни, обновяваме title и meta
    if (productPage?.seo) {
      const shopTitle = productPage.seo.title || productPage.title || 'Products';
      const shopDescription = productPage.seo.metaDesc || productPage.content || 'Discover our products';

      // Обновяваме SEO метаданните
      useHead({
        title: shopTitle,
        meta: [
          { name: 'description', content: shopDescription },
          { property: 'og:title', content: productPage.seo.opengraphTitle || shopTitle },
          { property: 'og:description', content: productPage.seo.opengraphDescription || shopDescription },
          { name: 'robots', content: productPage.seo.metaRobotsNoindex ? 'noindex' : 'index' },
          { name: 'robots', content: productPage.seo.metaRobotsNofollow ? 'nofollow' : 'follow' },
        ],
        link: [{ rel: 'canonical', href: productPage.seo.canonical || '/products' }],
      });

      // Добавяне на структурирани данни (schema.org)
      if (productPage.seo.schema?.raw) {
        useHead({
          script: [
            {
              type: 'application/ld+json',
              innerHTML: productPage.seo.schema.raw,
            },
          ],
        });
      }
    }
  } catch (error) {
    console.warn('Не можахме да заредим SEO данните (очаквано при първо зареждане):', error);
    // Не правим нищо - вече имаме базови SEO данни
  }

  try {
    // Зареждаме продуктите след като компонентът е монтиран
    const currentPageNum = getCurrentPageFromRoute();
    await loadProductsForPage(currentPageNum, initialFilters);

    // Ако има query параметри, обновяваме списъка
    if (!isQueryEmpty.value) {
      updateProductList();
    }
  } catch (error) {
    console.error('Грешка при зареждане на продукти:', error);
  }
});

watch(
  () => route.query,
  () => {
    if (route.name !== 'products' && route.name !== 'product-page-pager') return;
    updateProductList();
  },
);

watch(
  () => route.params,
  () => {
    if (route.name !== 'products' && route.name !== 'product-page-pager') return;
    updateProductList();
  },
);
</script>

<template>
  <div class="container flex items-start gap-16 px-2" v-if="products?.length || true">
    <Filters v-if="storeSettings.showFilters" />

    <div class="w-full">
      <div class="flex items-center justify-between w-full gap-4 mt-8 md:gap-8">
        <ProductResultCount />
        <OrderByDropdown class="hidden md:inline-flex" v-if="storeSettings.showOrderByDropdown" />
        <ShowFilterTrigger v-if="storeSettings.showFilters" class="md:hidden" />
      </div>
      <ProductGrid />
    </div>
  </div>
  <NoProductsFound v-else>Could not fetch products from your store. Please check your configuration.</NoProductsFound>
</template>
