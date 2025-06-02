/**
 * @name useFiltering
 * @description A composable that handles the filtering of products. For reference this
 * is what the filter query looks like: ?filter=pa_color[green,blue],pa_size[md]
 */
export function useFiltering() {
  const route = useRoute();
  const router = useRouter();
  const runtimeConfig = useRuntimeConfig(); // Declare a variable for the runtime config and the filter and order functions
  const { updateProductList } = useProducts();

  const filterQuery = useState<string>('filter', () => '');

  filterQuery.value = route.query.filter as string;

  /**
   * Get the filter value from the url
   * @param {string} filterName
   * @returns {string[]} - An array of filter values
   * @example getFilter('pa_color') // ["green", "blue"]
   */
  function getFilter(filterName: string): string[] {
    return filterQuery.value?.split(`${filterName}[`)[1]?.split(']')[0]?.split(',') || [];
  }

  /**
   * Set the filter value in the url
   * @param {string}
   * @param {string[]}
   * @example Just like the example above, but in reverse. setFilter('pa_color', ['green', 'blue'])
   */
  function setFilter(filterName: string, filterValue: string[]) {
    let newFilterQuery = filterQuery.value || '';

    // If there are filters and filterName is not one of them, add the filter query
    if (!filterQuery.value?.includes(filterName)) {
      newFilterQuery = filterQuery.value ? `${filterQuery.value},${filterName}[${filterValue}]` : `${filterName}[${filterValue}]`;
    } else {
      // If filterValue is empty, remove the filter query
      newFilterQuery = !filterValue.length
        ? filterQuery.value.replace(`${filterName}[${getFilter(filterName)}]`, '')
        : filterQuery.value.replace(`${filterName}[${getFilter(filterName)}]`, `${filterName}[${filterValue}]`);
    }

    // remove the first or last comma
    newFilterQuery = newFilterQuery.replace(/^,/, '').replace(/,$/, '');

    // if there is 2 or more commas in a row, replace them with one
    newFilterQuery = newFilterQuery.replace(/,{2,}/g, ',');

    // Update the filter query
    filterQuery.value = newFilterQuery;

    // remove pagination from the url
    const path = route.path.includes('/page/') ? route.path.split('/page/')[0] : route.path;

    // ПРИНУДИТЕЛНО навигираме с navigateTo вместо router.push за да се осигури че URL се обновява правилно
    const queryParams = { ...route.query };

    if (!newFilterQuery) {
      delete queryParams.filter;
    } else {
      queryParams.filter = newFilterQuery;
    }

    // Навигираме към новия URL без pagination
    const newUrl = Object.keys(queryParams).length > 0 ? `${path}?${new URLSearchParams(queryParams as any).toString()}` : path;

    navigateTo(newUrl);
  }

  /**
   * Reset the filter value in the url
   */
  function resetFilter(): void {
    const { scrollToTop } = useHelpers();
    filterQuery.value = '';

    // Обнуляваме всички state променливи принудително
    const searchQuery = useState<string>('searchQuery', () => '');
    searchQuery.value = '';

    // Премахваме page параметъра когато изчистваме филтрите
    const currentPath = route.path.includes('/page/') ? route.path.split('/page/')[0] : route.path;

    // Изчистваме всички query параметри свързани с филтриране и търсене
    router.push({
      path: currentPath,
      query: {}, // Изчистваме всички query параметри
    });

    setTimeout(() => {
      updateProductList();
      scrollToTop();
    }, 50);
  }

  /**
   * Check if there are any filters active
   * @returns {boolean}
   */
  const isFiltersActive = computed<boolean>(() => {
    const route = useRoute();
    return !!(
      filterQuery.value ||
      route.query.search ||
      route.query.priceMin ||
      route.query.priceMax ||
      route.query.sale ||
      route.query.rating ||
      route.query.category ||
      route.query.orderby ||
      route.query.order
    );
  });

  /**
   * Server-side филтриране се обработва автоматично в GraphQL заявката
   * Тази функция вече не е нужна за филтриране на продуктите
   * @param {Product[]} products - An array of all the products
   * @returns {Product[]} - An array of filtered products
   */
  function filterProducts(products: Product[]): Product[] {
    // Връщаме продуктите就好像 са, защото филтрирането се прави на сървъра
    return products;
  }

  return { getFilter, setFilter, resetFilter, isFiltersActive, filterProducts };
}
