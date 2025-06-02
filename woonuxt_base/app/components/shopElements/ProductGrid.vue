<script setup lang="ts">
const { products, isLoading } = useProducts();
</script>

<template>
  <Transition name="fade" mode="out-in">
    <section v-if="!!products.length" class="relative w-full">
      <div v-if="isLoading" class="flex justify-center items-center py-8">
        <Icon name="ion:refresh-outline" size="32" class="w-8 h-8 animate-spin text-primary" />
        <span class="ml-2 text-gray-600">Зареждане на продукти...</span>
      </div>

      <TransitionGroup v-else name="shrink" tag="div" mode="in-out" class="product-grid">
        <div
          v-for="(node, i) in products"
          :key="node.id || i"
          class="product-card rounded-lg overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 h-full bg-white p-2 w-full">
          <ProductCard :node="node" :index="i" />
        </div>
      </TransitionGroup>

      <CursorPagination />
    </section>
    <NoProductsFound v-else-if="!isLoading">Could not fetch products from your store. Please check your configuration.</NoProductsFound>
  </Transition>
</template>

<style lang="postcss" scoped>
.product-grid {
  @apply my-4 grid transition-all gap-[0.7rem] sm:gap-8 lg:my-8;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: min-content;
}
.product-grid:empty {
  display: none;
}

@media (min-width: 768px) {
  /* md breakpoint */
  .product-grid {
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  }
}

.shrink-move {
  transition: all 400ms;
}

.shrink-leave-active {
  transition: transform 300ms;
  position: absolute;
  opacity: 0;
}

.shrink-enter-active {
  transition:
    opacity 400ms ease-out 200ms,
    transform 400ms ease-out;
  will-change: opacity, transform;
}

.shrink-enter,
.shrink-leave-to,
.shrink-enter-from {
  opacity: 0;
  transform: scale(0.75) translateY(25%);
}

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
