import{aw as t}from"./8-GQfn7S.js";var $=(e=>(e.FACEBOOK="FACEBOOK",e.GITHUB="GITHUB",e.GOOGLE="GOOGLE",e.INSTAGRAM="INSTAGRAM",e.LINKEDIN="LINKEDIN",e.OAUTH2_GENERIC="OAUTH2_GENERIC",e.PASSWORD="PASSWORD",e.SITETOKEN="SITETOKEN",e))($||{}),I=(e=>(e.CANCELLED="CANCELLED",e.CHECKOUT_DRAFT="CHECKOUT_DRAFT",e.COMPLETED="COMPLETED",e.FAILED="FAILED",e.ON_HOLD="ON_HOLD",e.PENDING="PENDING",e.PROCESSING="PROCESSING",e.REFUNDED="REFUNDED",e))(I||{}),P=(e=>(e.EXTERNAL="EXTERNAL",e.GROUPED="GROUPED",e.SIMPLE="SIMPLE",e.VARIABLE="VARIABLE",e.VARIATION="VARIATION",e))(P||{}),A=(e=>(e.DATE="DATE",e.IN="IN",e.MENU_ORDER="MENU_ORDER",e.MODIFIED="MODIFIED",e.NAME="NAME",e.NAME_IN="NAME_IN",e.ON_SALE_FROM="ON_SALE_FROM",e.ON_SALE_TO="ON_SALE_TO",e.PARENT="PARENT",e.POPULARITY="POPULARITY",e.PRICE="PRICE",e.RATING="RATING",e.REGULAR_PRICE="REGULAR_PRICE",e.REVIEW_COUNT="REVIEW_COUNT",e.SALE_PRICE="SALE_PRICE",e.SLUG="SLUG",e.TOTAL_SALES="TOTAL_SALES",e))(A||{}),C=(e=>(e.IN_STOCK="IN_STOCK",e.ON_BACKORDER="ON_BACKORDER",e.OUT_OF_STOCK="OUT_OF_STOCK",e))(C||{}),T=(e=>(e.CATEGORY="CATEGORY",e.PA="PA",e.PABRANDS="PABRANDS",e.PAPREORDER="PAPREORDER",e.PASOONAVAILABLE="PASOONAVAILABLE",e.POSTFORMAT="POSTFORMAT",e.PRODUCTCATEGORY="PRODUCTCATEGORY",e.PRODUCTTAG="PRODUCTTAG",e.PRODUCTTYPE="PRODUCTTYPE",e.SHIPPINGCLASS="SHIPPINGCLASS",e.TAG="TAG",e.VISIBLEPRODUCT="VISIBLEPRODUCT",e))(T||{});const a=t`
    fragment Image on MediaItem {
  sourceUrl
  altText
  title
  databaseId
}
    `,r=t`
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
    `,o=t`
    fragment VariationAttribute on VariationAttribute {
  name
  attributeId
  value
  label
}
    `,i=t`
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
    `,n=t`
    fragment ExternalProduct on ExternalProduct {
  databaseId
  externalUrl
  buttonText
}
    `,s=t`
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
    `,d=t`
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
    `,l=t`
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
    `,u=t`
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
    `,c=t`
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
    `;t`
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
    `;const g=t`
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
    `,S=t`
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
    `,m=t`
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
    `,h=t`
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
    `,p=t`
    fragment Terms on Product {
  terms(first: 100) {
    nodes {
      taxonomyName
      slug
    }
  }
}
    `,D=t`
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
    `,R=t`
    fragment PaymentGateway on PaymentGateway {
  title
  id
  description
}
    `,b=t`
    fragment LoginClient on LoginClient {
  name
  provider
  isEnabled
  authorizationUrl
}
    `,w=t`
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
    `,f=t`
    fragment ProductWithAttributes on ProductWithAttributes {
  attributes {
    nodes {
      ...ProductAttribute
    }
  }
}
    `,y=t`
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
    `;t`
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
    `;t`
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
    `;t`
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
    `;t`
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
    `;t`
    mutation addToCart($input: AddToCartInput!) {
  addToCart(input: $input) {
    cart {
      ...Cart
    }
  }
}
    ${s}
${r}
${a}
${i}
${o}
${n}`;t`
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
    ${s}
${r}
${a}
${i}
${o}
${n}`;t`
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
    `;t`
    mutation ChangeShippingMethod($shippingMethods: [String] = "") {
  updateShippingMethod(input: {shippingMethods: $shippingMethods}) {
    cart {
      ...Cart
    }
  }
}
    ${s}
${r}
${a}
${i}
${o}
${n}`;t`
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
    ${a}`;t`
    mutation EmptyCart {
  emptyCart(input: {clearPersistentCart: true}) {
    cart {
      ...Cart
    }
  }
}
    ${s}
${r}
${a}
${i}
${o}
${n}`;t`
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
    `;t`
    query getAllowedCountries {
  allowedCountries
}
    `;t`
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
    ${s}
${r}
${a}
${i}
${o}
${n}
${u}
${l}
${D}
${R}
${b}`;t`
    query getCategoriesPage {
  page(id: "produkt-kategoriya", idType: URI) {
    id
    title
    uri
    slug
    ...SeoFragment
  }
}
    ${m}`;t`
    query getDownloads {
  customer {
    downloadableItems(first: 100) {
      nodes {
        ...DownloadableItem
      }
    }
  }
}
    ${d}`;t`
    query getHomeSeo {
  page(id: "/", idType: URI) {
    id
    title
    uri
    slug
    ...SeoFragment
  }
}
    ${m}`;t`
    query getOrder($id: ID!) {
  order(id: $id, idType: DATABASE_ID) {
    ...OrderFragment
  }
}
    ${c}
${d}
${u}
${l}`;t`
    query getOrders {
  customer {
    orders(first: 100) {
      nodes {
        ...OrderFragment
      }
    }
  }
}
    ${c}
${d}
${u}
${l}`;t`
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
    `;t`
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
    `;t`
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
    ${f}
${w}
${g}
${p}
${r}
${a}
${i}
${o}
${n}
${h}
${y}`;t`
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
    ${a}
${S}`;t`
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
    ${p}
${g}
${r}
${a}
${i}
${o}
${n}`;t`
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
    ${r}
${a}
${i}
${o}
${n}`;t`
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
    `;t`
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
    `;t`
    query getStates($country: CountriesEnum!) {
  countryStates(country: $country) {
    code
    name
  }
}
    `;t`
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
    `;t`
    query getStripePaymentIntent {
  stripePaymentIntent {
    amount
    clientSecret
    error
    id
    currency
  }
}
    `;t`
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
    `;t`
    mutation loginWithProvider($input: LoginInput!) {
  login(input: $input) {
    authToken
    refreshToken
    authTokenExpiration
  }
}
    `;t`
    mutation Logout {
  logout(input: {clientMutationId: ""}) {
    success
  }
}
    `;t`
    mutation registerCustomer($input: RegisterCustomerInput!) {
  registerCustomer(input: $input) {
    customer {
      ...Customer
    }
  }
}
    ${u}
${l}`;t`
    mutation removeCoupons($codes: [String]!) {
  removeCoupons(input: {codes: $codes}) {
    cart {
      ...Cart
    }
  }
}
    ${s}
${r}
${a}
${i}
${o}
${n}`;t`
    mutation ResetPasswordEmail($username: String!) {
  sendPasswordResetEmail(input: {username: $username}) {
    success
  }
}
    `;t`
    mutation ResetPasswordKey($key: String!, $login: String!, $password: String!) {
  resetUserPassword(input: {key: $key, login: $login, password: $password}) {
    user {
      id
    }
  }
}
    `;t`
    mutation UpDateCartQuantity($key: ID!, $quantity: Int!) {
  updateItemQuantities(input: {items: {key: $key, quantity: $quantity}}) {
    cart {
      ...Cart
    }
  }
}
    ${s}
${r}
${a}
${i}
${o}
${n}`;t`
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
    ${d}`;t`
    mutation updatePassword($id: ID!, $password: String!) {
  updateUser(input: {id: $id, password: $password}) {
    user {
      id
    }
  }
}
    `;t`
    mutation WriteReview($author: String!, $commentOn: Int!, $content: String!, $rating: Int!, $authorEmail: String!) {
  writeReview(
    input: {rating: $rating, author: $author, content: $content, commentOn: $commentOn, authorEmail: $authorEmail}
  ) {
    rating
  }
}
    `;export{$ as L,I as O,A as P,C as S,T,P as a};
