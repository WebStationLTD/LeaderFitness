interface ProductsPage {
  nodes: Product[];
  edges?: Array<{ cursor?: string | null; node: Product }>;
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage?: boolean;
    startCursor?: string | null;
    endCursor?: string | null;
  };
}

interface PaginationFilters {
  search?: string;
  categoryIn?: string[];
  priceMin?: number;
  priceMax?: number;
  onSale?: boolean;
  orderby?: string;
  attributeFilter?: any[];
}

export function useProducts() {
  // State variables
  const products = useState<Product[]>('products', () => []);
  const currentPage = useState<ProductsPage | null>('currentPage', () => null);
  const isLoading = useState<boolean>('productsLoading', () => false);
  const totalProducts = useState<number>('totalProducts', () => 0);

  // Pagination state
  const currentCursor = useState<string | null>('currentCursor', () => null);
  const previousCursors = useState<string[]>('previousCursors', () => []);

  /**
   * Зарежда продукти с server-side pagination и филтри
   */
  async function loadProducts(filters: PaginationFilters = {}, direction: 'next' | 'prev' | 'first' = 'first'): Promise<void> {
    isLoading.value = true;

    try {
      const variables: any = {
        first: direction === 'prev' ? undefined : 12,
        last: direction === 'prev' ? 12 : undefined,
        after: direction === 'next' ? currentCursor.value : undefined,
        before: direction === 'prev' ? previousCursors.value[previousCursors.value.length - 2] || null : undefined,
        search: filters.search || undefined,
        slug: filters.categoryIn?.length ? filters.categoryIn : undefined,
        priceMin: filters.priceMin || undefined,
        priceMax: filters.priceMax || undefined,
        onSale: filters.onSale || undefined,
        orderby: filters.orderby || 'DATE',
      };

      const { data } = await useAsyncGql('getProducts', variables);

      if (data.value?.products) {
        currentPage.value = data.value.products;
        products.value = data.value.products.nodes || [];

        // Управление на cursor историята
        if (direction === 'next' && currentCursor.value) {
          previousCursors.value.push(currentCursor.value);
        } else if (direction === 'prev') {
          previousCursors.value.pop();
        } else if (direction === 'first') {
          previousCursors.value = [];
        }

        currentCursor.value = data.value.products.pageInfo.endCursor || null;
      }
    } catch (error) {
      console.error('Грешка при зареждане на продукти:', error);
    } finally {
      isLoading.value = false;
    }
  }

  /**
   * Отива на следващата страница
   */
  async function nextPage(filters: PaginationFilters = {}): Promise<void> {
    if (currentPage.value?.pageInfo.hasNextPage) {
      await loadProducts(filters, 'next');
    }
  }

  /**
   * Отива на предишната страница
   */
  async function prevPage(filters: PaginationFilters = {}): Promise<void> {
    if (currentPage.value?.pageInfo.hasPreviousPage) {
      await loadProducts(filters, 'prev');
    }
  }

  /**
   * Зарежда първата страница с нови филтри и ресетва pagination
   */
  async function refreshProducts(filters: PaginationFilters = {}): Promise<void> {
    // Ресетваме pagination при нови филтри
    currentCursor.value = null;
    previousCursors.value = [];
    await loadProducts(filters, 'first');
  }

  /**
   * Legacy функция за съвместимост - само задава продуктите
   */
  function setProducts(newProducts: Product[]): void {
    if (!Array.isArray(newProducts)) throw new Error('Products must be an array.');
    products.value = [...newProducts];
  }

  /**
   * Legacy функция за съвместимост - обновява списъка с продукти
   */
  const updateProductList = async (): Promise<void> => {
    const route = useRoute();
    const { scrollToTop } = useHelpers();
    const { getFilter } = useFiltering();

    // Парсваме всички филтри от URL
    const filters: PaginationFilters = {
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

    // TODO: Добавяне на rating и attributeFilter когато WooCommerce ги поддржи в GraphQL

    console.log('Зареждаме продукти с филтри:', filters);
    await refreshProducts(filters);
    scrollToTop();
  };

  return {
    products,
    currentPage,
    isLoading,
    totalProducts,
    previousCursors,
    loadProducts,
    nextPage,
    prevPage,
    refreshProducts,
    setProducts,
    updateProductList,
  };
}
