export default [
  // Редиректи от стари към нови URL-и
  { from: '/product/:slug', to: '/produkt/:slug', statusCode: 301 },
  { from: '/product-category/:slug', to: '/produkt-kategoriya/:slug', statusCode: 301 },
  { from: '/product-category/:slug/page/:page', to: '/produkt-kategoriya/:slug/page/:page', statusCode: 301 },

  // Допълнителни redirects за pagination
  { from: '/products/page/:page', to: '/products/page/:page', statusCode: 200 }, // Запазва URL структурата

  // Редиректи за вариации в английските URL-и
  { from: '/shop', to: '/products', statusCode: 301 },
  { from: '/shop/:slug', to: '/produkt/:slug', statusCode: 301 },
  { from: '/category/:slug', to: '/produkt-kategoriya/:slug', statusCode: 301 },

  // Редиректи за стари WooCommerce URL patterns
  { from: '/product-tag/:slug', to: '/products?search=:slug', statusCode: 301 },
];
