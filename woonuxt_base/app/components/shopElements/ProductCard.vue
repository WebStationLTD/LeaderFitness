<template>
  <NuxtLink :to="`/produkt/${node.slug}`" class="product-card-link block">
    <div class="relative aspect-square overflow-hidden bg-gray-100">
      <NuxtImg
        v-if="node.image?.sourceUrl"
        :src="node.image.sourceUrl"
        :alt="node.image?.altText || node.name || ''"
        loading="lazy"
        format="webp"
        quality="85"
        :modifiers="{ format: 'webp', quality: 85 }"
        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
        class="product-image w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        placeholder
      />
      <div v-else class="w-full h-full bg-gray-200 flex items-center justify-center">
        <Icon name="heroicons:photo" class="w-12 h-12 text-gray-400" />
      </div>
      
      <!-- Badge за намаление -->
      <div
        v-if="node.onSale"
        class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium"
      >
        Sale
      </div>
    </div>

    <div class="p-4">
      <h3 class="text-lg font-medium text-gray-900 line-clamp-2">{{ node.name }}</h3>
      
      <div class="mt-2 flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <span v-if="node.onSale" class="text-lg font-bold text-red-500">
            {{ formatPrice(node.price) }}
          </span>
          <span
            :class="[
              'text-lg',
              node.onSale ? 'text-gray-500 line-through' : 'text-gray-900 font-bold'
            ]"
          >
            {{ formatPrice(node.regularPrice) }}
          </span>
        </div>
        
        <div class="flex items-center">
          <Icon
            v-if="node.averageRating"
            name="heroicons:star"
            class="w-5 h-5 text-yellow-400"
          />
          <span v-if="node.averageRating" class="ml-1 text-sm text-gray-600">
            {{ node.averageRating }}
          </span>
        </div>
      </div>

      <!-- Stock status -->
      <div class="mt-2">
        <span
          :class="[
            'text-sm',
            node.stockStatus === 'IN_STOCK'
              ? 'text-green-600'
              : node.stockStatus === 'OUT_OF_STOCK'
              ? 'text-red-600'
              : 'text-orange-600'
          ]"
        >
          {{ getStockStatusText(node.stockStatus) }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { StockStatusEnum } from '#woo';

const props = defineProps<{
  node: Product;
  index?: number;
}>();

const formatPrice = (price: string | null | undefined): string => {
  if (!price) return '0.00 лв.';
  return new Intl.NumberFormat('bg-BG', {
    style: 'currency',
    currency: 'BGN',
  }).format(parseFloat(price));
};

const getStockStatusText = (status: StockStatusEnum | null | undefined): string => {
  if (!status) return 'Неизвестен статус';
  
  switch (status) {
    case StockStatusEnum.IN_STOCK:
      return 'В наличност';
    case StockStatusEnum.OUT_OF_STOCK:
      return 'Изчерпан';
    case StockStatusEnum.ON_BACKORDER:
      return 'Очаква се';
    default:
      return status;
  }
};
</script>

<style lang="postcss" scoped>
.product-card-link {
  @apply transition-all duration-300;
  
  &:hover {
    @apply transform -translate-y-1;
    
    .product-image {
      @apply scale-105;
    }
  }
}
</style> 