interface ProductsPage {
  nodes: Product[];
  edges?: Array<{ cursor?: string | null; node: Product }>;
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage?: boolean;
    startCursor?: string | null;
    endCursor?: string | null;
    total?: number;
  };
}

interface PaginationFilters {
  search?: string;
  categoryIn?: string[];
  priceMin?: number;
  priceMax?: number;
  onSale?: boolean;
  orderby?: string;
  order?: string;
  rating?: number[];
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
   * Зарежда продукти за конкретна страница
   */
  async function loadProductsForPage(pageNumber: number, filters: PaginationFilters = {}): Promise<void> {
    isLoading.value = true;

    try {
      // За първата страница - директно зареждане
      if (pageNumber === 1) {
        await loadProducts(filters, 'first');
        return;
      }

      // За останалите страници - симулираме cursor навигация
      // Ресетваме състоянието и прескачаме до желаната страница
      currentCursor.value = null;
      previousCursors.value = [];

      // Зареждаме първата страница
      const variables: any = {
        first: 12,
        search: filters.search || undefined,
        slug: filters.categoryIn?.length ? filters.categoryIn : undefined,
        priceMin: filters.priceMin || undefined,
        priceMax: filters.priceMax || undefined,
        onSale: filters.onSale || undefined,
        orderby: filters.orderby || 'DATE',
        order: filters.order ? filters.order.toUpperCase() : 'DESC',
        rating: filters.rating?.length ? filters.rating : undefined,
      };

      let currentPageData = null;
      let cursor = null;

      // Итерираме до желаната страница
      for (let i = 1; i <= pageNumber; i++) {
        const currentVariables: any = {
          ...variables,
          after: i === 1 ? undefined : cursor,
        };

        const { data }: { data: any } = await useAsyncGql('getProducts', currentVariables);

        if (data.value?.products) {
          currentPageData = data.value.products;

          if (i < pageNumber) {
            // Запазваме cursor за следващата итерация
            cursor = data.value.products.pageInfo.endCursor;
            previousCursors.value.push(cursor);
          } else {
            // Последната страница - задаваме данните
            currentPage.value = currentPageData;
            products.value = currentPageData.nodes || [];
            currentCursor.value = currentPageData.pageInfo.endCursor || null;
          }
        }
      }

      // Зареждаме общия брой продукти само веднъж
      await loadProductsCount(filters);
    } catch (error) {
      console.error('Грешка при зареждане на продукти за страница:', error);
    } finally {
      isLoading.value = false;
    }
  }

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
        order: filters.order ? filters.order.toUpperCase() : 'DESC',
        rating: filters.rating?.length ? filters.rating : undefined,
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

      // Зареждаме общия брой продукти при първо зареждане или при нови филтри
      if (direction === 'first') {
        await loadProductsCount(filters);
      }
    } catch (error) {
      console.error('Грешка при зареждане на продукти:', error);
    } finally {
      isLoading.value = false;
    }
  }

  /**
   * Зарежда общия брой продукти с същите филтри
   */
  async function loadProductsCount(filters: PaginationFilters = {}): Promise<void> {
    try {
      const countVariables: any = {
        search: filters.search || undefined,
        slug: filters.categoryIn?.length ? filters.categoryIn : undefined,
        priceMin: filters.priceMin || undefined,
        priceMax: filters.priceMax || undefined,
        onSale: filters.onSale || undefined,
        orderby: filters.orderby || 'DATE',
        order: filters.order ? filters.order.toUpperCase() : 'DESC',
        rating: filters.rating?.length ? filters.rating : undefined,
      };

      const { data: countData } = await useAsyncGql('getProductsCount' as any, countVariables);

      if (countData.value?.products?.edges) {
        totalProducts.value = countData.value.products.edges.length;
      }
    } catch (error) {
      console.error('Грешка при зареждане на общ брой продукти:', error);
      // При грешка задаваме приблизителна стойност базирана на pagination
      totalProducts.value = 0;
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

    // Извличаме категорията от URL параметрите ако сме в категорийна страница
    let categorySlug: string | undefined;

    // Проверяваме дали сме в категорийна страница
    if (route.name === 'produkt-kategoriya-slug' || route.name === 'produkt-kategoriya-page-pager') {
      categorySlug = (route.params.categorySlug || route.params.slug) as string;
    } else if (route.name === 'product-category-slug' || route.name === 'product-category-page-pager') {
      categorySlug = route.params.slug as string;
    }

    // Парсваме всички филтри от URL
    const filters: PaginationFilters = {
      search: route.query.search as string,
      // Първо проверяваме за категория от URL параметрите, после от query, после от филтрите
      categoryIn: categorySlug
        ? [categorySlug]
        : route.query.category
          ? [route.query.category as string]
          : getFilter('category').length > 0
            ? getFilter('category')
            : undefined,
      priceMin: route.query.priceMin ? parseFloat(route.query.priceMin as string) : undefined,
      priceMax: route.query.priceMax ? parseFloat(route.query.priceMax as string) : undefined,
      onSale: getFilter('sale').includes('true') ? true : undefined,
      orderby: (route.query.orderby as string) || 'DATE',
      order: (route.query.order as string) || 'DESC',
      rating: getFilter('rating').length > 0 ? getFilter('rating').map((r) => parseInt(r, 10)) : undefined,
    };

    // Добавяме ценови филтър ако има такъв
    const priceFilter = getFilter('price');
    if (priceFilter.length === 2 && priceFilter[0] && priceFilter[1]) {
      const minPrice = parseFloat(priceFilter[0]);
      const maxPrice = parseFloat(priceFilter[1]);
      if (!isNaN(minPrice)) filters.priceMin = minPrice;
      if (!isNaN(maxPrice)) filters.priceMax = maxPrice;
    }

    // ВИНАГИ зареждаме страница 1 когато updateProductList е извикана
    // Това се случва при промяна на филтри, така че искаме да се върнем в началото
    await loadProductsForPage(1, filters);

    scrollToTop();
  };

  /**
   * Пресмята page номера от URL параметрите
   */
  function getCurrentPageFromRoute(): number {
    const route = useRoute();
    const pageParam = route.params.pageNumber;
    if (pageParam && typeof pageParam === 'string') {
      const pageNum = parseInt(pageParam, 10);
      return pageNum > 0 ? pageNum : 1;
    }
    return 1;
  }

  /**
   * Генерира URL за конкретна страница
   */
  function getPageUrl(pageNumber: number): string {
    const route = useRoute();
    const query = { ...route.query };

    // Ако сме на категория страница
    if (route.name === 'produkt-kategoriya-slug' || route.name === 'produkt-kategoriya-page-pager') {
      const categorySlug = route.params.categorySlug || route.params.slug;
      if (pageNumber === 1) {
        return `/produkt-kategoriya/${categorySlug}${Object.keys(query).length ? '?' + new URLSearchParams(query as any).toString() : ''}`;
      } else {
        return `/produkt-kategoriya/${categorySlug}/page/${pageNumber}${Object.keys(query).length ? '?' + new URLSearchParams(query as any).toString() : ''}`;
      }
    }

    // За основната products страница
    if (pageNumber === 1) {
      return `/products${Object.keys(query).length ? '?' + new URLSearchParams(query as any).toString() : ''}`;
    } else {
      return `/products/page/${pageNumber}${Object.keys(query).length ? '?' + new URLSearchParams(query as any).toString() : ''}`;
    }
  }

  /**
   * Навигира към конкретна страница чрез URL
   */
  async function navigateToPage(pageNumber: number): Promise<void> {
    const targetUrl = getPageUrl(pageNumber);
    await navigateTo(targetUrl);
  }

  return {
    products,
    currentPage,
    isLoading,
    totalProducts,
    previousCursors,
    loadProducts,
    loadProductsForPage,
    nextPage,
    prevPage,
    refreshProducts,
    setProducts,
    updateProductList,
    getCurrentPageFromRoute,
    getPageUrl,
    navigateToPage,
  };
}
