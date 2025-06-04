<script setup lang="ts">
const { products, currentPage, totalProducts } = useProducts();

// За cursor pagination показваме текущия брой и общия брой продукти
const currentProductsCount = computed(() => products.value.length);
const hasNextPage = computed(() => currentPage.value?.pageInfo.hasNextPage);
const hasPrevPage = computed(() => currentPage.value?.pageInfo.hasPreviousPage);

// Показваме реалния общ брой продукти
const statusMessage = computed(() => {
  if (process.client && totalProducts.value > 0) {
    return ` от общо ${totalProducts.value}`;
  } else if (hasNextPage.value && hasPrevPage.value) {
    return ' (има още страници)';
  } else if (hasNextPage.value) {
    return ' (има още продукти)';
  } else if (hasPrevPage.value) {
    return ' (последна страница)';
  }
  return '';
});
</script>

<template>
  <div class="text-sm font-light" v-if="products.length !== 0">
    <span>Показани </span>
    <span class="font-normal">{{ currentProductsCount }} </span>
    <span> продукта</span>
    <span>{{ statusMessage }}</span>
  </div>
</template>
