<script setup lang="ts">
const { currentPage, isLoading, totalProducts, getCurrentPageFromRoute, navigateToPage } = useProducts();

// Взимаме текущия page номер от URL
const currentPageNumber = computed(() => getCurrentPageFromRoute());

const totalPages = computed(() => {
  if (totalProducts.value > 0) {
    return Math.ceil(totalProducts.value / 12);
  }
  return 1;
});

// Показваме информация за страниците
const pageDisplay = computed(() => {
  const current = currentPageNumber.value;
  const total = totalPages.value;

  if (total > 1) {
    return `Страница ${current} от ${total}`;
  } else {
    return `Страница ${current}`;
  }
});

// Проверяваме дали има предишна/следваща страница
const hasPrevPage = computed(() => currentPageNumber.value > 1);
const hasNextPage = computed(() => currentPageNumber.value < totalPages.value);

const handlePrevPage = async () => {
  if (!isLoading.value && hasPrevPage.value) {
    await navigateToPage(currentPageNumber.value - 1);
  }
};

const handleNextPage = async () => {
  if (!isLoading.value && hasNextPage.value) {
    await navigateToPage(currentPageNumber.value + 1);
  }
};
</script>

<template>
  <div class="flex justify-center items-center mt-8 mb-16 gap-4">
    <button
      @click="handlePrevPage"
      :disabled="!hasPrevPage || isLoading"
      :class="{
        'cursor-not-allowed opacity-50': !hasPrevPage || isLoading,
        'hover:bg-gray-50': hasPrevPage && !isLoading,
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
      :disabled="!hasNextPage || isLoading"
      :class="{
        'cursor-not-allowed opacity-50': !hasNextPage || isLoading,
        'hover:bg-gray-50': hasNextPage && !isLoading,
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
