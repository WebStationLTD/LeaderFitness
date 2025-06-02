// Example: ?search=shirt
export function useSearching() {
  const route = useRoute();
  const router = useRouter();

  const isShowingSearch = useState<boolean>('isShowingSearch', () => false);
  const searchQuery = useState<string>('searchQuery', () => '');
  const isSearchActive = computed<boolean>(() => !!(searchQuery.value || route.query.search));

  searchQuery.value = route.query.search as string;

  function getSearchQuery(): string {
    return route.query.search as string;
  }

  function setSearchQuery(search: string): void {
    const { updateProductList } = useProducts();
    searchQuery.value = search;

    // Премахваме page параметъра когато променяме търсенето
    const currentPath = route.path.includes('/page/') ? route.path.split('/page/')[0] : route.path;

    router.push({
      path: currentPath,
      query: { ...route.query, search: search || undefined },
    });

    setTimeout(() => {
      updateProductList();
    }, 50);
  }

  function clearSearchQuery(): void {
    const { updateProductList } = useProducts();
    searchQuery.value = '';

    // Премахваме page параметъра когато изчистваме търсенето
    const currentPath = route.path.includes('/page/') ? route.path.split('/page/')[0] : route.path;

    router.push({
      path: currentPath,
      query: { ...route.query, search: undefined },
    });

    setTimeout(() => {
      updateProductList();
    }, 50);
  }

  const toggleSearch = (): void => {
    isShowingSearch.value = !isShowingSearch.value;
  };

  // Server-side търсене се обработва автоматично в GraphQL заявката
  // Тази функция вече не е нужна за филтриране на продуктите
  function searchProducts(products: Product[]): Product[] {
    // Връщаме продуктите就好像 са, защото търсенето се прави на сървъра
    return products;
  }

  return { getSearchQuery, setSearchQuery, clearSearchQuery, searchProducts, isSearchActive, isShowingSearch, toggleSearch };
}
