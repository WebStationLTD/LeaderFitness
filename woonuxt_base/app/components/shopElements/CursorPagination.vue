<script setup lang="ts">
const { currentPage, isLoading, nextPage, prevPage, previousCursors } = useProducts();
const { getFilter } = useFiltering();
const route = useRoute();

// Извличаме всички филтри - същата логика като в updateProductList
const currentFilters = computed(() => {
  const filters = {
    search: route.query.search as string,
    categoryIn: route.query.category ? [route.query.category as string] : getFilter('category'),
    priceMin: route.query.priceMin ? parseFloat(route.query.priceMin as string) : undefined,
    priceMax: route.query.priceMax ? parseFloat(route.query.priceMax as string) : undefined,
    onSale: route.query.sale === 'true' ? true : getFilter('sale').length > 0 ? true : undefined,
    orderby: (route.query.orderby as string) || 'DATE',
  };

  // Добавяме ценови филтър ако има такъв
  const priceFilter = getFilter('price');
  if (priceFilter.length === 2 && priceFilter[0] && priceFilter[1]) {
    const minPrice = parseFloat(priceFilter[0]);
    const maxPrice = parseFloat(priceFilter[1]);
    if (!isNaN(minPrice)) filters.priceMin = minPrice;
    if (!isNaN(maxPrice)) filters.priceMax = maxPrice;
  }

  return filters;
});

// Изчисляваме приблизителния номер на страницата
const currentPageNumber = computed(() => {
  return previousCursors.value.length + 1;
});

// Показваме честна информация за страниците
const pageDisplay = computed(() => {
  const current = currentPageNumber.value;

  // Ако има следваща страница
  if (currentPage.value?.pageInfo.hasNextPage) {
    return `Страница ${current} (има още)`;
  } else if (currentPage.value?.pageInfo.hasPreviousPage) {
    // Последна страница
    return `Страница ${current} (последна)`;
  } else {
    // Единствена страница
    return `Страница ${current}`;
  }
});

const handlePrevPage = async () => {
  if (!isLoading.value && currentPage.value?.pageInfo.hasPreviousPage) {
    await prevPage(currentFilters.value);
  }
};

const handleNextPage = async () => {
  if (!isLoading.value && currentPage.value?.pageInfo.hasNextPage) {
    await nextPage(currentFilters.value);
  }
};
</script>

<template>
  <div class="flex justify-center items-center mt-8 mb-16 gap-4">
    <button
      @click="handlePrevPage"
      :disabled="!currentPage?.pageInfo.hasPreviousPage || isLoading"
      :class="{
        'cursor-not-allowed opacity-50': !currentPage?.pageInfo.hasPreviousPage || isLoading,
        'hover:bg-gray-50': currentPage?.pageInfo.hasPreviousPage && !isLoading,
      }"
      class="flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md focus:z-10 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
      aria-label="Предишна страница">
      <Icon name="ion:chevron-back-outline" size="20" class="w-5 h-5 mr-2" />
      Предишна страница
    </button>

    <div class="flex items-center px-4 py-2 text-sm text-gray-700 bg-gray-50 border-t border-b border-gray-300">
      <Icon v-if="isLoading" name="ion:refresh-outline" size="16" class="w-4 h-4 mr-2 animate-spin" />
      <span v-else>{{ pageDisplay }}</span>
    </div>

    <button
      @click="handleNextPage"
      :disabled="!currentPage?.pageInfo.hasNextPage || isLoading"
      :class="{
        'cursor-not-allowed opacity-50': !currentPage?.pageInfo.hasNextPage || isLoading,
        'hover:bg-gray-50': currentPage?.pageInfo.hasNextPage && !isLoading,
      }"
      class="flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md focus:z-10 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
      aria-label="Следваща страница">
      Следваща страница
      <Icon name="ion:chevron-forward-outline" size="20" class="w-5 h-5 ml-2" />
    </button>
  </div>
</template>

<style scoped>
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
