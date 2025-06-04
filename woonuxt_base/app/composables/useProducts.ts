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

interface GraphQLResponse {
  data?: {
    products?: {
      pageInfo: {
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor: string | null;
        endCursor: string | null;
      };
      nodes: Product[];
    };
  };
}

interface GraphQLCountResponse {
  data?: {
    products?: {
      edges: Array<{
        node: {
          databaseId: number;
        };
      }>;
    };
  };
}

interface Edge {
  cursor?: string | null;
  node: Product;
}

interface Variables {
  first?: number;
  after?: string | null;
  search?: string;
  slug?: string[];
  priceMin?: number;
  priceMax?: number;
  onSale?: boolean;
  orderby?: string;
  order?: string;
  rating?: number[];
}

export function useProducts() {
  const { setCacheEntry, getCacheEntry } = useGraphQLCache();

  // State variables
  const products = useState<Product[]>('products', () => []);
  const currentPage = useState<ProductsPage | null>('currentPage', () => null);
  const isLoading = useState<boolean>('productsLoading', () => false);
  const totalProducts = useState<number>('totalProducts', () => 0);

  // Pagination state
  const currentCursor = useState<string | null>('currentCursor', () => null);
  const previousCursors = useState<string[]>('previousCursors', () => []);

  // Добавяме prefetched state
  const prefetchedProducts = useState<{[key: string]: ProductsPage}>('prefetchedProducts', () => ({}));

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

      // За останалите страници - използваме cursor навигация
      const variables: Variables = {
        first: 12,
        ...filters
      };

      let currentPageData = null;
      let cursor: string | null = null;

      // GraphQL заявка
      const query = `
        query getProducts(
          $after: String
          $first: Int = 12
          $search: String
          $slug: [String]
          $priceMin: Float
          $priceMax: Float
          $onSale: Boolean
          $orderby: ProductsOrderByEnum = DATE
          $order: OrderEnum = DESC
          $rating: [Int]
        ) {
          products(
            first: $first
            after: $after
            where: {
              categoryIn: $slug
              search: $search
              minPrice: $priceMin
              maxPrice: $priceMax
              onSale: $onSale
              rating: $rating
              visibility: VISIBLE
              status: "publish"
              orderby: { field: $orderby, order: $order }
            }
          ) {
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
            nodes {
              name
              slug
              type
              databaseId
              id
              averageRating
              reviewCount
              ... on SimpleProduct {
                price
                regularPrice
                salePrice
                stockStatus
                stockQuantity
                image {
                  sourceUrl
                  altText
                }
              }
              ... on VariableProduct {
                price
                regularPrice
                salePrice
                stockStatus
                stockQuantity
                image {
                  sourceUrl
                  altText
                }
                variations {
                  nodes {
                    databaseId
                    name
                    price
                    regularPrice
                    salePrice
                    stockStatus
                    stockQuantity
                    attributes {
                      nodes {
                        name
                        value
                      }
                    }
                    image {
                      sourceUrl
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      `;

      // Итерираме до желаната страница
      for (let i = 1; i <= pageNumber; i++) {
        const currentVariables: Variables = {
          ...variables,
          after: i === 1 ? undefined : cursor,
        };

        const config = useRuntimeConfig();
        const gqlHost = config.public.GQL_HOST || 'https://leaderfitness.admin-panels.com/graphql';
        
        const response = await $fetch<GraphQLResponse>(gqlHost, {
          method: 'POST',
          body: {
            query,
            variables: currentVariables
          }
        });

        if (response.data?.products) {
          currentPageData = response.data.products;

          if (i < pageNumber) {
            // Запазваме cursor за следващата итерация
            cursor = currentPageData.pageInfo.endCursor;
            if (cursor && !previousCursors.value.includes(cursor)) {
            previousCursors.value.push(cursor);
            }
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
  async function loadProducts(filters: PaginationFilters = {}, direction: 'next' | 'prev' | 'first' = 'first', isPrefetch = false): Promise<void> {
    // Ако е prefetch режим, проверяваме дали вече имаме кеширани данни
    const cacheKey = `${direction}-${JSON.stringify(filters)}`;
    if (!isPrefetch && prefetchedProducts.value[cacheKey]) {
      currentPage.value = prefetchedProducts.value[cacheKey];
      products.value = currentPage.value.nodes || [];
      delete prefetchedProducts.value[cacheKey];
      return;
    }

    if (!isPrefetch) {
    isLoading.value = true;
    }

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

      // Проверяваме за кеширани данни
      const query = `
        query getProducts(
          $after: String
          $before: String
          $slug: [String]
          $first: Int = 12
          $last: Int
          $search: String
          $priceMin: Float
          $priceMax: Float
          $onSale: Boolean
          $orderby: ProductsOrderByEnum = DATE
          $order: OrderEnum = DESC
          $rating: [Int]
        ) {
          products(
            first: $first
            last: $last
            after: $after
            before: $before
            where: {
              categoryIn: $slug
              search: $search
              minPrice: $priceMin
              maxPrice: $priceMax
              onSale: $onSale
              rating: $rating
              visibility: VISIBLE
              status: "publish"
              orderby: { field: $orderby, order: $order }
            }
          ) {
            pageInfo {
              hasNextPage
              hasPreviousPage
              startCursor
              endCursor
            }
            nodes {
              name
              slug
              type
              databaseId
              id
              averageRating
              reviewCount
              ... on SimpleProduct {
                price
                regularPrice
                salePrice
                stockStatus
                stockQuantity
                image {
                  sourceUrl
                  altText
                }
              }
              ... on VariableProduct {
                price
                regularPrice
                salePrice
                stockStatus
                stockQuantity
                image {
                  sourceUrl
                  altText
                }
                variations {
                  nodes {
                    databaseId
                    name
                    price
                    regularPrice
                    salePrice
                    stockStatus
                    stockQuantity
                    attributes {
                      nodes {
                        name
                        value
                      }
                    }
                    image {
                      sourceUrl
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      `;

      let productsData = null;

      // Използваме $fetch за client-side заявки
      if (process.client) {
        const config = useRuntimeConfig();
        const gqlHost = config.public.GQL_HOST || 'https://leaderfitness.admin-panels.com/graphql';
        const response = await $fetch<GraphQLResponse>(gqlHost, {
          method: 'POST',
          body: {
            query,
            variables
          }
        });

        if (response.data?.products) {
          productsData = response.data.products;
        }

        if (productsData) {
          if (isPrefetch) {
            prefetchedProducts.value[cacheKey] = productsData;
          } else {
            currentPage.value = productsData;
            products.value = productsData.nodes || [];
          }
        }
      } else {
        // За server-side рендериране използваме useAsyncGql
      const { data } = await useAsyncGql('getProducts', variables);

      if (data.value?.products) {
          if (isPrefetch) {
            prefetchedProducts.value[cacheKey] = data.value.products;
          } else {
        currentPage.value = data.value.products;
        products.value = data.value.products.nodes || [];
          }
        }
      }

      if (!isPrefetch) {
        // Управление на cursor историята
        if (direction === 'next' && currentCursor.value) {
          previousCursors.value.push(currentCursor.value);
        } else if (direction === 'prev') {
          previousCursors.value.pop();
        } else if (direction === 'first') {
          previousCursors.value = [];
        }

        currentCursor.value = currentPage.value?.pageInfo.endCursor || null;

      // Зареждаме общия брой продукти при първо зареждане или при нови филтри
      if (direction === 'first') {
        await loadProductsCount(filters);
        }
      }
    } catch (error) {
      console.error('Грешка при зареждане на продукти:', error);
    } finally {
      if (!isPrefetch) {
      isLoading.value = false;
      }
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

      const countQuery = `
        query getProductsCount(
          $slug: [String]
          $search: String
          $priceMin: Float
          $priceMax: Float
          $onSale: Boolean
          $orderby: ProductsOrderByEnum = DATE
          $order: OrderEnum = DESC
          $rating: [Int]
        ) {
          products(
            first: 9999
            where: {
              categoryIn: $slug
              search: $search
              minPrice: $priceMin
              maxPrice: $priceMax
              onSale: $onSale
              rating: $rating
              visibility: VISIBLE
              status: "publish"
              orderby: { field: $orderby, order: $order }
            }
          ) {
            edges {
              node {
                databaseId
              }
            }
          }
        }
      `;

      if (process.client) {
        // Проверяваме за кеширани данни
        const cachedData = getCacheEntry(countQuery, countVariables);
        if (cachedData?.edges) {
          totalProducts.value = cachedData.edges.length;
          return;
        }

        const config = useRuntimeConfig();
        const gqlHost = config.public.GQL_HOST || 'https://leaderfitness.admin-panels.com/graphql';
        const response = await $fetch<GraphQLCountResponse>(gqlHost, {
          method: 'POST',
          body: {
            query: countQuery,
            variables: countVariables
          }
        });

        if (response.data?.products?.edges) {
          totalProducts.value = response.data.products.edges.length;
          // Кешираме резултата
          setCacheEntry(countQuery, countVariables, response.data.products);
        }
      } else {
        // За server-side рендериране използваме useAsyncGql
      const { data: countData } = await useAsyncGql('getProductsCount' as any, countVariables);

      if (countData.value?.products?.edges) {
        totalProducts.value = countData.value.products.edges.length;
        }
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

    // Запазваме текущата страница при филтриране
    const currentPageNum = getCurrentPageFromRoute();
    await loadProductsForPage(currentPageNum, filters);

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
    prefetchedProducts,
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
