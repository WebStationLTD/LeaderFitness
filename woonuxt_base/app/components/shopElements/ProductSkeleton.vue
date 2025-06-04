<!-- ProductSkeleton.vue -->
<template>
  <div class="product-skeleton">
    <div class="relative aspect-square bg-gray-200 rounded-lg animate-pulse">
      <!-- Image placeholder -->
      <div class="w-full h-full flex items-center justify-center">
        <svg class="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    </div>
    
    <!-- Title placeholder -->
    <div class="mt-4 space-y-3">
      <div class="h-4 bg-gray-200 rounded animate-pulse"></div>
      <div class="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
    </div>
    
    <!-- Price placeholder -->
    <div class="mt-4 flex items-center space-x-2">
      <div class="h-5 bg-gray-200 rounded animate-pulse w-20"></div>
      <div class="h-5 bg-gray-200 rounded animate-pulse w-16"></div>
    </div>
  </div>
</template>

<style scoped>
.product-skeleton {
  @apply p-4 border border-gray-200 rounded-lg bg-white;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style> 