// Example: ?orderby=price&order=asc

export function useSorting() {
  const route = useRoute();
  const router = useRouter();
  const { updateProductList } = useProducts();

  const orderQuery = useState<string>('order', () => '');

  orderQuery.value = route.query.orderby as string;

  function getOrderQuery(): { orderBy: string; order: string } {
    return { orderBy: route.query.orderby as string, order: route.query.order as string };
  }

  function setOrderQuery(orderby: string, order?: string): void {
    // Премахваме page параметъра когато променяме сортирането
    const currentPath = route.path.includes('/page/') ? route.path.split('/page/')[0] : route.path;

    router.push({
      path: currentPath,
      query: {
        ...route.query,
        orderby: orderby ?? undefined,
        order: order ?? undefined,
      },
    });

    setTimeout(() => {
      updateProductList();
    }, 100);
  }

  const isSortingActive = computed<boolean>(() => !!orderQuery.value);

  // Define a function to order the products - вече не се използва, защото сортирането става на сървъра
  function sortProducts(products: Product[]): Product[] {
    // Връщаме продуктите без промяна, защото сортирането се прави на сървъра в GraphQL заявката
    return products;
  }

  return { getOrderQuery, setOrderQuery, isSortingActive, orderQuery, sortProducts };
}
