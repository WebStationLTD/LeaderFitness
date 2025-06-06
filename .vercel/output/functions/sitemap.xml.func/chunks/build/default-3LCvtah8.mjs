import{gql as e}from"graphql-request";var t,a=((t=a||{}).FACEBOOK="FACEBOOK",t.GITHUB="GITHUB",t.GOOGLE="GOOGLE",t.INSTAGRAM="INSTAGRAM",t.LINKEDIN="LINKEDIN",t.OAUTH2_GENERIC="OAUTH2_GENERIC",t.PASSWORD="PASSWORD",t.SITETOKEN="SITETOKEN",t),r=(e=>(e.CANCELLED="CANCELLED",e.CHECKOUT_DRAFT="CHECKOUT_DRAFT",e.COMPLETED="COMPLETED",e.FAILED="FAILED",e.ON_HOLD="ON_HOLD",e.PENDING="PENDING",e.PROCESSING="PROCESSING",e.REFUNDED="REFUNDED",e))(r||{}),o=(e=>(e.EXTERNAL="EXTERNAL",e.GROUPED="GROUPED",e.SIMPLE="SIMPLE",e.VARIABLE="VARIABLE",e.VARIATION="VARIATION",e))(o||{}),i=(e=>(e.DATE="DATE",e.IN="IN",e.MENU_ORDER="MENU_ORDER",e.MODIFIED="MODIFIED",e.NAME="NAME",e.NAME_IN="NAME_IN",e.ON_SALE_FROM="ON_SALE_FROM",e.ON_SALE_TO="ON_SALE_TO",e.PARENT="PARENT",e.POPULARITY="POPULARITY",e.PRICE="PRICE",e.RATING="RATING",e.REGULAR_PRICE="REGULAR_PRICE",e.REVIEW_COUNT="REVIEW_COUNT",e.SALE_PRICE="SALE_PRICE",e.SLUG="SLUG",e.TOTAL_SALES="TOTAL_SALES",e))(i||{}),n=(e=>(e.IN_STOCK="IN_STOCK",e.ON_BACKORDER="ON_BACKORDER",e.OUT_OF_STOCK="OUT_OF_STOCK",e))(n||{}),s=(e=>(e.CATEGORY="CATEGORY",e.PA="PA",e.PABRANDS="PABRANDS",e.PAPREORDER="PAPREORDER",e.PASOONAVAILABLE="PASOONAVAILABLE",e.POSTFORMAT="POSTFORMAT",e.PRODUCTCATEGORY="PRODUCTCATEGORY",e.PRODUCTTAG="PRODUCTTAG",e.PRODUCTTYPE="PRODUCTTYPE",e.SHIPPINGCLASS="SHIPPINGCLASS",e.TAG="TAG",e.VISIBLEPRODUCT="VISIBLEPRODUCT",e))(s||{});const u=e`
    fragment Image on MediaItem {
  sourceUrl
  altText
  title
  databaseId
}
    `,d=e`
    fragment SimpleProduct on SimpleProduct {
  databaseId
  name
  slug
  type
  price
  rawPrice: price(format: RAW)
  date
  regularPrice
  rawRegularPrice: regularPrice(format: RAW)
  salePrice
  rawSalePrice: salePrice(format: RAW)
  stockStatus
  stockQuantity
  lowStockAmount
  averageRating
  weight
  length
  width
  height
  reviewCount
  onSale
  virtual
  image {
    ...Image
    cartSourceUrl: sourceUrl(size: THUMBNAIL)
    producCardSourceUrl: sourceUrl(size: WOOCOMMERCE_THUMBNAIL)
  }
  galleryImages(first: 20) {
    nodes {
      ...Image
      databaseId
    }
  }
}
    `,l=e`
    fragment VariationAttribute on VariationAttribute {
  name
  attributeId
  value
  label
}
    `,c=e`
    fragment VariableProduct on VariableProduct {
  databaseId
  name
  slug
  type
  price
  rawPrice: price(format: RAW)
  date
  weight
  length
  width
  height
  image {
    ...Image
    cartSourceUrl: sourceUrl(size: THUMBNAIL)
    producCardSourceUrl: sourceUrl(size: WOOCOMMERCE_THUMBNAIL)
  }
  averageRating
  reviewCount
  onSale
  regularPrice
  rawRegularPrice: regularPrice(format: RAW)
  salePrice
  rawSalePrice: salePrice(format: RAW)
  stockStatus
  totalSales
  stockQuantity
  lowStockAmount
  defaultAttributes {
    nodes {
      ...VariationAttribute
    }
  }
  variations(first: 100) {
    nodes {
      name
      databaseId
      price
      regularPrice
      salePrice
      rawSalePrice: salePrice(format: RAW)
      slug
      stockQuantity
      stockStatus
      hasAttributes
      image {
        ...Image
        cartSourceUrl: sourceUrl(size: THUMBNAIL)
        producCardSourceUrl: sourceUrl(size: WOOCOMMERCE_THUMBNAIL)
      }
      attributes {
        nodes {
          ...VariationAttribute
        }
      }
    }
  }
  galleryImages(first: 20) {
    nodes {
      ...Image
      databaseId
    }
  }
}
    `,m=e`
    fragment ExternalProduct on ExternalProduct {
  databaseId
  externalUrl
  buttonText
}
    `,g=e`
    fragment Cart on Cart {
  total
  rawTotal: total(format: RAW)
  subtotal
  totalTax
  discountTotal
  rawDiscountTotal: discountTotal(format: RAW)
  shippingTotal
  chosenShippingMethods
  availableShippingMethods {
    rates {
      cost
      id
      label
    }
  }
  appliedCoupons {
    description
    discountTax
    discountAmount
    code
  }
  isEmpty
  contents(first: 100) {
    itemCount
    productCount
    nodes {
      quantity
      key
      product {
        node {
          name
          slug
          sku
          databaseId
          type
          ...SimpleProduct
          ...VariableProduct
          ...ExternalProduct
        }
      }
      variation {
        node {
          name
          slug
          price
          stockStatus
          regularPrice
          rawRegularPrice: regularPrice(format: RAW)
          salePrice
          rawSalePrice: salePrice(format: RAW)
          image {
            sourceUrl(size: THUMBNAIL)
            cartSourceUrl: sourceUrl(size: THUMBNAIL)
            altText
            title
          }
        }
      }
    }
  }
}
    `,p=e`
    fragment DownloadableItem on DownloadableItem {
  id
  name
  product {
    name
    slug
  }
  url
  accessExpires
  downloadsRemaining
}
    `,$=e`
    fragment Address on CustomerAddress {
  address1
  address2
  city
  country
  email
  firstName
  lastName
  phone
  postcode
  company
  state
}
    `,I=e`
    fragment Customer on Customer {
  lastName
  email
  firstName
  username
  databaseId
  sessionToken
  isPayingCustomer
  billing {
    ...Address
  }
  shipping {
    ...Address
  }
}
    `,P=e`
    fragment OrderFragment on Order {
  orderNumber
  date
  status
  needsPayment
  needsProcessing
  databaseId
  orderKey
  total
  subtotal
  discountTotal
  rawDiscountTotal: discountTotal(format: RAW)
  totalTax
  shippingTotal
  paymentMethodTitle
  paymentMethod
  customer {
    email
    downloadableItems(first: 100) {
      nodes {
        ...DownloadableItem
      }
    }
  }
  downloadableItems(first: 100) {
    nodes {
      ...DownloadableItem
    }
  }
  lineItems {
    nodes {
      quantity
      total
      id
      product {
        node {
          name
          slug
          image {
            sourceUrl(size: THUMBNAIL)
            altText
            title
          }
        }
      }
      variation {
        node {
          name
          image {
            sourceUrl(size: THUMBNAIL)
            altText
            title
          }
        }
      }
    }
  }
  customer {
    ...Customer
  }
}
    `;e`
    fragment PostSeoFragment on Post {
  seo {
    title
    metaDesc
    metaKeywords
    metaRobotsNoindex
    metaRobotsNofollow
    opengraphTitle
    opengraphDescription
    opengraphImage {
      sourceUrl
      altText
    }
    twitterTitle
    twitterDescription
    twitterImage {
      sourceUrl
      altText
    }
    canonical
    schema {
      raw
    }
  }
}
    `;const T=e`
    fragment ProductCategories on Product {
  productCategories {
    nodes {
      databaseId
      slug
      name
      count
    }
  }
}
    `,S=e`
    fragment SeoFragment on Page {
  seo {
    title
    metaDesc
    metaKeywords
    metaRobotsNoindex
    metaRobotsNofollow
    opengraphTitle
    opengraphDescription
    opengraphImage {
      sourceUrl
      altText
    }
    twitterTitle
    twitterDescription
    twitterImage {
      sourceUrl
      altText
    }
    canonical
    schema {
      raw
    }
  }
}
    `,A=e`
    fragment Terms on Product {
  terms(first: 100) {
    nodes {
      taxonomyName
      slug
    }
  }
}
    `;e`
    fragment ProductCategory on ProductCategory {
  count
  databaseId
  id
  name
  slug
  image {
    sourceUrl(size: MEDIUM_LARGE)
    altText
    title
  }
}
    `,e`
    query GetBlogPage {
  pageBy(uri: "blog") {
    title
    content
    seo {
      title
      metaDesc
      metaKeywords
      metaRobotsNoindex
      metaRobotsNofollow
      opengraphTitle
      opengraphDescription
      opengraphImage {
        sourceUrl
        altText
      }
      twitterTitle
      twitterDescription
      twitterImage {
        sourceUrl
        altText
      }
      canonical
      schema {
        raw
      }
    }
  }
}
    `,e`
    query GetBlogPost($id: ID!) {
  post(id: $id) {
    id
    databaseId
    title
    slug
    date
    excerpt
    content
    featuredImage {
      node {
        sourceUrl
        altText
      }
    }
  }
}
    `,e`
    query GetBlogPosts($first: Int) {
  posts(first: $first) {
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      id
      databaseId
      title
      slug
      date
      excerpt
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
}
    `,e`
    mutation addToCart($input: AddToCartInput!) {
  addToCart(input: $input) {
    cart {
      ...Cart
    }
  }
}
    ${g}
${d}
${u}
${c}
${l}
${m}`,e`
    mutation applyCoupon($code: String!) {
  applyCoupon(input: {code: $code}) {
    applied {
      code
      description
      discountTax
      discountAmount
    }
    cart {
      ...Cart
    }
  }
}
    ${g}
${d}
${u}
${c}
${l}
${m}`,e`
    mutation ChangeShippingCounty($shippingState: String!, $shippingCountry: CountriesEnum!, $billingState: String!, $billingCountry: CountriesEnum!) {
  updateCustomer(
    input: {shipping: {state: $shippingState, country: $shippingCountry}, billing: {state: $billingState, country: $billingCountry}}
  ) {
    customer {
      calculatedShipping
      hasCalculatedShipping
    }
  }
}
    `,e`
    mutation ChangeShippingMethod($shippingMethods: [String] = "") {
  updateShippingMethod(input: {shippingMethods: $shippingMethods}) {
    cart {
      ...Cart
    }
  }
}
    ${g}
${d}
${u}
${c}
${l}
${m}`,e`
    mutation Checkout($billing: CustomerAddressInput = {}, $metaData: [MetaDataInput] = {key: "", value: ""}, $paymentMethod: String = "stripe", $shipping: CustomerAddressInput = {}, $customerNote: String = "", $shipToDifferentAddress: Boolean = false, $account: CreateAccountInput = {username: "", password: ""}, $transactionId: String = "", $isPaid: Boolean = false) {
  checkout(
    input: {paymentMethod: $paymentMethod, billing: $billing, metaData: $metaData, shipping: $shipping, customerNote: $customerNote, shipToDifferentAddress: $shipToDifferentAddress, account: $account, transactionId: $transactionId, isPaid: $isPaid}
  ) {
    result
    redirect
    order {
      needsPayment
      needsProcessing
      status
      databaseId
      orderKey
      subtotal
      total
      subtotal
      totalTax
      shippingTotal
      paymentMethodTitle
      paymentMethod
      date
      subtotal
      customer {
        email
      }
      lineItems {
        nodes {
          quantity
          total
          product {
            node {
              name
              image {
                ...Image
              }
            }
          }
          variation {
            node {
              name
              image {
                ...Image
              }
            }
          }
        }
      }
    }
  }
}
    ${u}`,e`
    mutation EmptyCart {
  emptyCart(input: {clearPersistentCart: true}) {
    cart {
      ...Cart
    }
  }
}
    ${g}
${d}
${u}
${c}
${l}
${m}`,e`
    query getAllTerms($hideEmpty: Boolean = true, $taxonomies: [TaxonomyEnum]!, $first: Int = 100) {
  terms(where: {taxonomies: $taxonomies, hideEmpty: $hideEmpty}, first: $first) {
    nodes {
      taxonomyName
      name
      slug
      count
    }
  }
}
    `,e`
    query getAllowedCountries {
  allowedCountries
}
    `,e`
    query getCart {
  cart {
    ...Cart
  }
  customer {
    ...Customer
  }
  viewer {
    ...Viewer
  }
  paymentGateways {
    nodes {
      ...PaymentGateway
    }
  }
  loginClients {
    ...LoginClient
  }
}
    ${g}
${d}
${u}
${c}
${l}
${m}
${I}
${$}
${e`
    fragment Viewer on User {
  lastName
  email
  databaseId
  id
  firstName
  username
  nicename
  wooSessionToken
  avatar {
    url
  }
}
    `}
${e`
    fragment PaymentGateway on PaymentGateway {
  title
  id
  description
}
    `}
${e`
    fragment LoginClient on LoginClient {
  name
  provider
  isEnabled
  authorizationUrl
}
    `}`,e`
    query getCategoriesPage {
  page(id: "produkt-kategoriya", idType: URI) {
    id
    title
    uri
    slug
    ...SeoFragment
  }
}
    ${S}`,e`
    query getDownloads {
  customer {
    downloadableItems(first: 100) {
      nodes {
        ...DownloadableItem
      }
    }
  }
}
    ${p}`,e`
    query getHomeSeo {
  page(id: "/", idType: URI) {
    id
    title
    uri
    slug
    ...SeoFragment
  }
}
    ${S}`,e`
    query getOrder($id: ID!) {
  order(id: $id, idType: DATABASE_ID) {
    ...OrderFragment
  }
}
    ${P}
${p}
${I}
${$}`,e`
    query getOrders {
  customer {
    orders(first: 100) {
      nodes {
        ...OrderFragment
      }
    }
  }
}
    ${P}
${p}
${I}
${$}`,e`
    query GetPost($id: ID!) {
  post(id: $id, idType: SLUG) {
    id
    databaseId
    title
    slug
    date
    excerpt
    content
    featuredImage {
      node {
        sourceUrl
        altText
      }
    }
    author {
      node {
        name
        avatar {
          url
        }
      }
    }
    categories {
      nodes {
        name
        slug
      }
    }
  }
}
    `,e`
    query GetPosts($first: Int) {
  posts(first: $first, where: {status: PUBLISH}) {
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      id
      databaseId
      title
      slug
      date
      excerpt
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
    }
  }
}
    `,e`
    query getProduct($slug: ID!) {
  product(id: $slug, idType: SLUG) {
    name
    type
    databaseId
    id
    metaData {
      id
      key
      value
    }
    slug
    sku
    description
    rawDescription: description(format: RAW)
    shortDescription
    ...ProductWithAttributes
    ...ProductCategories
    ...Terms
    ...SimpleProduct
    ...VariableProduct
    ...ExternalProduct
    ...SeoProductFragment
    related(first: 5) {
      nodes {
        ...SimpleProduct
        ...VariableProduct
        ...ExternalProduct
      }
    }
    reviews {
      averageRating
      edges {
        rating
        node {
          ...Comment
        }
      }
    }
  }
}
    ${e`
    fragment ProductWithAttributes on ProductWithAttributes {
  attributes {
    nodes {
      ...ProductAttribute
    }
  }
}
    `}
${e`
    fragment ProductAttribute on ProductAttribute {
  variation
  name
  id
  options
  label
  scope
  ... on GlobalProductAttribute {
    terms {
      nodes {
        name
        slug
        taxonomyName
        databaseId
      }
    }
  }
}
    `}
${T}
${A}
${d}
${u}
${c}
${l}
${m}
${e`
    fragment SeoProductFragment on Product {
  seo {
    title
    metaDesc
    metaKeywords
    metaRobotsNoindex
    metaRobotsNofollow
    opengraphTitle
    opengraphDescription
    opengraphImage {
      sourceUrl
      altText
    }
    twitterTitle
    twitterDescription
    twitterImage {
      sourceUrl
      altText
    }
    canonical
    schema {
      raw
    }
  }
}
    `}
${e`
    fragment Comment on Comment {
  content
  id
  date
  author {
    node {
      name
      avatar {
        url
      }
    }
  }
}
    `}`,e`
    query getProductCategories($first: Int, $after: String, $slug: [String]) {
  productCategories(
    first: $first
    after: $after
    where: {hideEmpty: true, slug: $slug}
  ) {
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      slug
      name
      databaseId
      id
      description
      count
      uri
      image {
        ...Image
      }
      children {
        nodes {
          slug
          name
          databaseId
          description
          count
          image {
            ...Image
          }
        }
      }
      ...SeoCategoryFragment
    }
  }
}
    ${u}
${e`
    fragment SeoCategoryFragment on ProductCategory {
  seo {
    title
    metaDesc
    metaKeywords
    metaRobotsNoindex
    metaRobotsNofollow
    opengraphTitle
    opengraphDescription
    opengraphImage {
      sourceUrl
      altText
    }
    twitterTitle
    twitterDescription
    twitterImage {
      sourceUrl
      altText
    }
    canonical
    schema {
      raw
    }
  }
}
    `}`,e`
    query getProducts($after: String, $before: String, $slug: [String], $first: Int = 12, $last: Int, $search: String, $priceMin: Float, $priceMax: Float, $onSale: Boolean, $orderby: ProductsOrderByEnum = DATE, $order: OrderEnum = DESC, $rating: [Int]) {
  products(
    first: $first
    last: $last
    after: $after
    before: $before
    where: {categoryIn: $slug, search: $search, minPrice: $priceMin, maxPrice: $priceMax, onSale: $onSale, rating: $rating, visibility: VISIBLE, status: "publish", orderby: {field: $orderby, order: $order}}
  ) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        name
        slug
        type
        databaseId
        id
        averageRating
        reviewCount
        ...Terms
        ...ProductCategories
        ...SimpleProduct
        ...VariableProduct
        ...ExternalProduct
      }
    }
    nodes {
      name
      slug
      type
      databaseId
      id
      averageRating
      reviewCount
      ...Terms
      ...ProductCategories
      ...SimpleProduct
      ...VariableProduct
      ...ExternalProduct
    }
  }
}
    ${A}
${T}
${d}
${u}
${c}
${l}
${m}`,e`
    query getProductsByIds($ids: [Int]) {
  products(where: {include: $ids}, first: 10) {
    nodes {
      databaseId
      name
      slug
      shortDescription
      ...SimpleProduct
      ...VariableProduct
      ...ExternalProduct
    }
  }
}
    ${d}
${u}
${c}
${l}
${m}`,e`
    query getProductsCount($slug: [String], $search: String, $priceMin: Float, $priceMax: Float, $onSale: Boolean, $orderby: ProductsOrderByEnum = DATE, $order: OrderEnum = DESC, $rating: [Int]) {
  products(
    first: 9999
    where: {categoryIn: $slug, search: $search, minPrice: $priceMin, maxPrice: $priceMax, onSale: $onSale, rating: $rating, visibility: VISIBLE, status: "publish", orderby: {field: $orderby, order: $order}}
  ) {
    edges {
      node {
        databaseId
      }
    }
  }
}
    `,e`
    query getShopPage {
  page(id: 8, idType: DATABASE_ID) {
    id
    databaseId
    title
    uri
    slug
    content
    seo {
      title
      metaDesc
      metaKeywords
      metaRobotsNoindex
      metaRobotsNofollow
      opengraphTitle
      opengraphDescription
      opengraphImage {
        sourceUrl
        altText
      }
      twitterTitle
      twitterDescription
      twitterImage {
        sourceUrl
        altText
      }
      canonical
      schema {
        raw
      }
    }
  }
}
    `,e`
    query getStates($country: CountriesEnum!) {
  countryStates(country: $country) {
    code
    name
  }
}
    `,e`
    query getStockStatus($slug: ID!) {
  product(id: $slug, idType: SLUG) {
    ... on SimpleProduct {
      stockStatus
    }
    ... on VariableProduct {
      stockStatus
      variations {
        nodes {
          stockStatus
        }
      }
    }
  }
}
    `,e`
    query getStripePaymentIntent {
  stripePaymentIntent {
    amount
    clientSecret
    error
    id
    currency
  }
}
    `,e`
    mutation login($username: String!, $password: String!) {
  login(
    input: {provider: PASSWORD, credentials: {username: $username, password: $password}}
  ) {
    authToken
    authTokenExpiration
    refreshToken
    refreshTokenExpiration
    user {
      name
      username
    }
    sessionToken
    customer {
      databaseId
      username
      firstName
      lastName
    }
  }
}
    `,e`
    mutation loginWithProvider($input: LoginInput!) {
  login(input: $input) {
    authToken
    refreshToken
    authTokenExpiration
  }
}
    `,e`
    mutation Logout {
  logout(input: {clientMutationId: ""}) {
    success
  }
}
    `,e`
    mutation registerCustomer($input: RegisterCustomerInput!) {
  registerCustomer(input: $input) {
    customer {
      ...Customer
    }
  }
}
    ${I}
${$}`,e`
    mutation removeCoupons($codes: [String]!) {
  removeCoupons(input: {codes: $codes}) {
    cart {
      ...Cart
    }
  }
}
    ${g}
${d}
${u}
${c}
${l}
${m}`,e`
    mutation ResetPasswordEmail($username: String!) {
  sendPasswordResetEmail(input: {username: $username}) {
    success
  }
}
    `,e`
    mutation ResetPasswordKey($key: String!, $login: String!, $password: String!) {
  resetUserPassword(input: {key: $key, login: $login, password: $password}) {
    user {
      id
    }
  }
}
    `,e`
    mutation UpDateCartQuantity($key: ID!, $quantity: Int!) {
  updateItemQuantities(input: {items: {key: $key, quantity: $quantity}}) {
    cart {
      ...Cart
    }
  }
}
    ${g}
${d}
${u}
${c}
${l}
${m}`,e`
    mutation UpdateCustomer($input: UpdateCustomerInput!) {
  updateCustomer(input: $input) {
    customer {
      downloadableItems(first: 100) {
        nodes {
          ...DownloadableItem
        }
      }
    }
  }
}
    ${p}`,e`
    mutation updatePassword($id: ID!, $password: String!) {
  updateUser(input: {id: $id, password: $password}) {
    user {
      id
    }
  }
}
    `,e`
    mutation WriteReview($author: String!, $commentOn: Int!, $content: String!, $rating: Int!, $authorEmail: String!) {
  writeReview(
    input: {rating: $rating, author: $author, content: $content, commentOn: $commentOn, authorEmail: $authorEmail}
  ) {
    rating
  }
}
    `;export{a as $,i as A,n as C,r as I,o as P,s as T};
//# sourceMappingURL=default-3LCvtah8.mjs.map
