import { createResolver } from '@nuxt/kit';
const { resolve } = createResolver(import.meta.url);
import redirects from './redirects.config';

export default defineNuxtConfig({
  compatibilityDate: '2025-03-30',
  future: {
    compatibilityVersion: 4,
  },

  app: {
    head: {
      htmlAttrs: { lang: 'bg' },
      link: [
        { rel: 'icon', href: '/next-level-logo.png', type: 'image/png' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css' },
      ],
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/min/tiny-slider.js',
          defer: true,
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'default' },
  },

  experimental: {
    sharedPrerenderData: true,
    buildCache: true,
    typedPages: true,
    defaults: {
      nuxtLink: {
        prefetch: true,
        prefetchOn: { interaction: true },
      },
    },
  },

  plugins: [resolve('./app/plugins/init.ts')],

  components: [{ path: resolve('./app/components'), pathPrefix: false }],

  modules: ['woonuxt-settings', 'nuxt-graphql-client', '@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/image', '@nuxtjs/i18n'],

  'graphql-client': {
    clients: {
      default: {
        host: process.env.GQL_HOST || 'http://localhost:4000/graphql',
        corsOptions: { mode: 'cors', credentials: 'include' },
        headers: { Origin: process.env.APP_HOST || 'http://localhost:3000' },
      },
    },
  },

  // Добавяне на redirects
  redirects,

  alias: {
    '#constants': resolve('./app/constants'),
    '#woo': '../.nuxt/gql/default',
  },

  hooks: {
    'pages:extend'(pages: any[]) {
      const addPage = (name: string, path: string, file: string) => {
        pages.push({ name, path, file: resolve(`./app/pages/${file}`) });
      };

      addPage('product-page-pager', '/products/page/:pageNumber', 'products.vue');
      addPage('produkt-kategoriya-slug', '/produkt-kategoriya/:categorySlug', 'produkt-kategoriya/[slug].vue');
      addPage('produkt-kategoriya-page-pager', '/produkt-kategoriya/:categorySlug/page/:pageNumber', 'produkt-kategoriya/[slug].vue');
      addPage('order-received', '/checkout/order-received/:orderId', 'order-summary.vue');
      addPage('order-summary', '/order-summary/:orderId', 'order-summary.vue');

      // Нови маршрути за produkt вместо product
      addPage('produkt-page', '/produkt/:slug', 'produkt/[slug].vue');
    },
  },

  nitro: {
    routeRules: {
      // Страниците за checkout не трябва да се рендират server-side
      '/checkout/order-received/**': { ssr: false },
      '/order-summary/**': { ssr: false },

      // Redirects от старите английски URL-и към българските
      '/product/**': { redirect: { to: '/produkt/**', statusCode: 301 } },
      '/product-category/**': { redirect: { to: '/produkt-kategoriya/**', statusCode: 301 } },

      // Pagination страници - не трябва да се prerender-ват но трябва SSR
      '/products/page/**': { ssr: true, prerender: false },
      '/produkt-kategoriya/*/page/**': { ssr: true, prerender: false },

      // Страници с query параметри (филтри, търсене) - не трябва да се prerender-ват
      '/products?*': { ssr: true, prerender: false },
      '/produkt-kategoriya/*?*': { ssr: true, prerender: false },

      // Основни страници - трябва да се prerender-ят
      '/': { prerender: true },
      '/products': { prerender: true },
      '/produkt-kategoriya/**': {
        ssr: true,
        prerender: true,
        // Cache за 1 час за категорийните страници
        headers: { 'Cache-Control': 's-maxage=3600' },
      },

      // Продуктови страници - prerender само ако са статични
      '/produkt/**': {
        ssr: true,
        prerender: true,
        headers: { 'Cache-Control': 's-maxage=3600' },
      },
    },

    // Контрол на generate процеса
    prerender: {
      // Crawl само основните страници, не следва dynamic routes автоматично
      crawlLinks: false,
      // Лимит на concurrent requests към GraphQL API по време на build
      concurrency: 3,
      // Ignore динамични routes с query параметри
      ignore: ['/products?*', '/produkt-kategoriya/*?*', '/products/page/*', '/produkt-kategoriya/*/page/*'],
      // Routes които да се prerender-ят
      routes: ['/', '/products', '/checkout', '/my-account', '/contact', '/about'],
    },
  },

  // Multilingual support
  i18n: {
    locales: [
      { code: 'bg_BG', file: 'bg-BG.json', name: 'Български 🇧🇬' },
      { code: 'en_US', file: 'en-US.json', name: 'English 🇺🇸' },
      { code: 'de_DE', file: 'de-DE.json', name: 'Deutsch 🇩🇪' },
      { code: 'es_ES', file: 'es-ES.json', name: 'Español 🇪🇸' },
      { code: 'fr_FR', file: 'fr-FR.json', name: 'Français 🇫🇷' },
      { code: 'it_IT', file: 'it-IT.json', name: 'Italiano 🇮🇹' },
      { code: 'pt_BR', file: 'pt-BR.json', name: 'Português 🇧🇷' },
    ],
    langDir: 'locales',
    defaultLocale: 'bg_BG',
    strategy: 'no_prefix',
    restructureDir: false,
  },
});
