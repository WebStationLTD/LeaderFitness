<script setup>
const { getOrderQuery, setOrderQuery } = await useSorting();
const { storeSettings } = useAppConfig();
const selectedOrder = ref(getOrderQuery());

// Обратно мапване от WooCommerce GraphQL към UI стойности
const reverseMapOrderByValue = (value) => {
  const mapping = {
    DATE: 'date',
    TITLE: 'alphabetically',
    PRICE: 'price',
    RATING: 'rating',
  };
  return mapping[value] || 'date';
};

const orderby = ref(reverseMapOrderByValue(selectedOrder.value.orderBy) || 'date');
const order = ref(selectedOrder.value.order || 'DESC');

// Мапване на стойностите от UI към WooCommerce GraphQL
const mapOrderByValue = (value) => {
  const mapping = {
    date: 'DATE',
    alphabetically: 'TITLE',
    price: 'PRICE',
    rating: 'RATING',
    discount: 'DATE', // WooCommerce няма built-in discount сортиране, използваме дата
  };
  return mapping[value] || 'DATE';
};

// Update the URL when the checkbox is changed
watch([orderby, order], () => {
  const mappedOrderBy = mapOrderByValue(orderby.value);
  setOrderQuery(mappedOrderBy, order.value);
});
</script>

<template>
  <div class="inline-flex ml-auto -space-x-px shadow-sm rounded-m isolate">
    <button
      class="relative inline-flex items-center p-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:z-20"
      aria-label="Sort"
      @click="order = order === 'ASC' ? 'DESC' : 'ASC'">
      <Icon name="ion:filter-outline" size="18" :class="order === 'ASC' ? 'rotate-180' : ''" class="transition-transform transform transform-origin-center" />
    </button>
    <select id="orderby-dropdown" v-model="orderby" class="bg-white rounded-l-none" aria-label="Order by">
      <option value="date">{{ $t('messages.general.latest') }}</option>
      <option value="alphabetically">{{ $t('messages.general.alphabetically') }}</option>
      <option value="price">{{ $t('messages.shop.price') }}</option>
      <option v-if="storeSettings.showReviews" value="rating">{{ $t('messages.shop.rating') }}</option>
      <option value="discount">{{ $t('messages.shop.discount') }}</option>
    </select>
  </div>
</template>
