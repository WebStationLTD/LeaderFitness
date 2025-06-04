<script setup lang="ts">
import { useThrottleFn } from '@vueuse/core';
const { products, isLoading, loadProducts, currentPage } = useProducts();
const route = useRoute();
const loadingNextPage = ref(false);
const initialLoad = ref(true);

// Следим за край на първоначалното зареждане
watch(isLoading, (newVal) => {
  if (!newVal && initialLoad.value) {
    initialLoad.value = false;
  }
});

// Intersection Observer за prefetching
const observerTarget = ref<HTMLElement | null>(null);
const observer = ref<IntersectionObserver | null>(null);

onMounted(() => {
  // Setup Intersection Observer за prefetching с по-добри параметри
  observer.value = new IntersectionObserver(
    useThrottleFn(async (entries) => {
      const entry = entries[0];
      if (!entry) return;
      
      if (entry.isIntersecting && !loadingNextPage.value && currentPage.value?.pageInfo.hasNextPage) {
        loadingNextPage.value = true;
        try {
          // Зареждаме следващата страница в prefetch режим
          await loadProducts({
            search: route.query.search as string,
            categoryIn: route.query.category ? [route.query.category as string] : undefined,
            priceMin: route.query.priceMin ? parseFloat(route.query.priceMin as string) : undefined,
            priceMax: route.query.priceMax ? parseFloat(route.query.priceMax as string) : undefined,
            onSale: route.query.sale === 'true' ? true : undefined,
            orderby: (route.query.orderby as string) || 'DATE',
          }, 'next', true); // true за prefetch режим
        } catch (error) {
          console.error('Error prefetching next page:', error);
        } finally {
          loadingNextPage.value = false;
        }
      }
    }, 1000), // 1 секунда throttle за да избегнем множество заявки
    {
      rootMargin: '400px', // Увеличаваме дистанцията за по-ранен prefetch
      threshold: 0.1 // Започваме зареждане при 10% видимост
    }
  );

  if (observerTarget.value) {
    observer.value.observe(observerTarget.value);
  }
});

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect();
  }
});
</script>

<template>
  <Transition name="fade" mode="out-in">
    <!-- Показваме skeleton при първоначално зареждане -->
    <div v-if="isLoading || initialLoad" class="product-grid">
      <ProductSkeleton v-for="i in 12" :key="i" />
      </div>

    <!-- Показваме продуктите ако има такива -->
    <section v-else-if="!!products.length" class="relative w-full">
      <TransitionGroup name="shrink" tag="div" mode="in-out" class="product-grid">
        <div
          v-for="(node, i) in products"
          :key="node.id || i"
          class="product-card rounded-lg overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 h-full bg-white p-2 w-full">
          <ProductCardDetailed :node="node" :index="i" />
        </div>
      </TransitionGroup>

      <!-- Intersection Observer target за prefetching -->
      <div ref="observerTarget" class="h-px w-full" />

      <CursorPagination />
    </section>

    <!-- Показваме NoProductsFound само ако наистина няма продукти след зареждане -->
    <NoProductsFound v-else>
      Could not fetch products from your store. Please check your configuration.
    </NoProductsFound>
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
</style>
