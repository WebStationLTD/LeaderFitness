<script setup lang="ts">
const { loadProductsForPage, updateProductList, products, getCurrentPageFromRoute, isLoading } = useProducts();
const route = useRoute();
const { storeSettings } = useAppConfig();
const { isQueryEmpty } = useHelpers();

// Задаваме базови SEO данни синхронно за SSR
useHead({
  title: 'Products',
  meta: [{ name: 'description', content: 'Discover our products' }],
});

// Подготвяме филтрите за първоначално зареждане
const initialFilters = computed(() => ({
  search: route.query.search as string,
  categoryIn: route.query.category ? [route.query.category as string] : undefined,
  priceMin: route.query.priceMin ? parseFloat(route.query.priceMin as string) : undefined,
  priceMax: route.query.priceMax ? parseFloat(route.query.priceMax as string) : undefined,
  onSale: route.query.sale === 'true' ? true : undefined,
  orderby: (route.query.orderby as string) || 'DATE',
  order: (route.query.order as string) || 'DESC',
  rating: route.query.rating ? [parseInt(route.query.rating as string, 10)] : undefined,
}));

// Зареждаме продуктите ВЕДНАГА при инициализация
const currentPageNum = getCurrentPageFromRoute();
await loadProductsForPage(currentPageNum, initialFilters.value);

// Зареждаме SEO данните САМО в браузъра
onMounted(async () => {
  try {
    const { data: pagesData } = await useAsyncGql('getShopPage');
    const productPage = pagesData.value?.page;

    // Обновяваме SEO данните ако са налични
    if (productPage?.seo) {
      const seo = productPage.seo;
      const shopTitle = seo?.title || productPage.title || 'Products';
      const shopDescription = seo?.metaDesc || productPage.content || 'Discover our products';

      useHead({
        title: shopTitle,
        meta: [
          { name: 'description', content: shopDescription },
          { property: 'og:title', content: seo?.opengraphTitle || shopTitle },
          { property: 'og:description', content: seo?.opengraphDescription || shopDescription },
          { name: 'robots', content: seo?.metaRobotsNoindex ? 'noindex' : 'index' },
          { name: 'robots', content: seo?.metaRobotsNofollow ? 'nofollow' : 'follow' },
        ],
        link: [{ rel: 'canonical', href: seo?.canonical || '/products' }],
      });

      // Добавяне на структурирани данни
      if (seo?.schema?.raw) {
        useHead({
          script: [
            {
              type: 'application/ld+json',
              innerHTML: seo.schema.raw,
            },
          ],
        });
      }
    }
  } catch (error) {
    console.warn('Не можахме да заредим SEO данните (очаквано при първо зареждане):', error);
  }
});

// Следим за промени в route за динамично обновяване
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
  <div class="container flex items-start gap-16 px-2" v-if="!isLoading && products?.length">
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
  <div v-else-if="isLoading" class="py-16 text-center">
    <div class="inline-block p-4 text-gray-500">
      <div class="h-8 w-8 border-t-2 border-primary border-solid rounded-full mx-auto animate-spin mb-4"></div>
      <p>Зареждане на продукти...</p>
    </div>
  </div>
  <NoProductsFound v-else>Could not fetch products from your store. Please check your configuration.</NoProductsFound>
</template>
