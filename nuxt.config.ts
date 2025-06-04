export default defineNuxtConfig({
  extends: ["./woonuxt_base"],

  components: [{ path: "./components", pathPrefix: false }],

  modules: [
    "nuxt-graphql-client",
    "@nuxtjs/sitemap",
    "@vite-pwa/nuxt"
  ],

  experimental: {
    payloadExtraction: true
  },

  nitro: {
    preset: 'vercel',
    prerender: {
      routes: [
        "/",
        "/products",
        "/categories",
        "/contact",
        "/products/page/1",
        "/products/page/2",
        "/products/page/3",
        "/products/page/4",
        "/products/page/5",
        "/products/page/6",
        "/products/page/7",
        "/products/page/8",
        "/products/page/9",
        "/products/page/10"
      ],
      crawlLinks: false,
      failOnError: false,
    },
    minify: true,
    compression: true,
    routeRules: {
      // Static pages
      "/": { static: true },
      "/categories": { static: true },
      "/contact": { static: true },
      "/products": { static: true },
      "/products/page/[1-10]": { static: true },

      // Dynamic pages with edge caching
      "/products/page/**": { 
        cors: true,
        headers: {
          'cache-control': 's-maxage=3600, stale-while-revalidate=86400'
        }
      },

      // Product and category pages with edge caching
      "/produkt/**": { 
        cors: true,
        headers: {
          'cache-control': 's-maxage=3600, stale-while-revalidate=86400'
        }
      },
      "/produkt-kategoriya/**": { 
        cors: true,
        headers: {
          'cache-control': 's-maxage=3600, stale-while-revalidate=86400'
        }
      },

      // No-cache pages
      "/checkout/**": { ssr: true, cache: false },
      "/cart": { ssr: true, cache: false },
      "/my-account/**": { ssr: true, cache: false },
    },
    timing: true,
    serverAssets: [{
      baseName: "public",
      dir: "public"
    }]
  },

  runtimeConfig: {
    public: {
      GQL_HOST: "https://leaderfitness.admin-panels.com/graphql",
      PRODUCT_CATEGORY_PERMALINK: "/produkt-kategoriya/",
      PRODUCTS_PER_PAGE: 12,
    },
  },

  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://leaderfitness.admin-panels.com" },
        { rel: "dns-prefetch", href: "https://leaderfitness.admin-panels.com" },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }
      ]
    },
  },

  sitemap: {
    siteUrl: "https://leaderfitness.admin-panels.com",
    excludes: [
      "/checkout/order-received/**",
      "/order-summary/**",
      "/my-account/**",
      "/oauth/**",
    ],
    cacheTime: 1000 * 60 * 30,
    routes: ["/", "/products", "/categories", "/contact", "/wishlist"],
  },

  "graphql-client": {
    clients: {
      default: {
        host: "https://leaderfitness.admin-panels.com/graphql",
        tokenStorage: {
          cookieOptions: {
            name: "authToken",
            maxAge: 60 * 60 * 24 * 7,
            sameSite: "None",
            secure: true,
          },
        },
        cachePolicy: {
          maxAge: 3600,                // 1 час основен кеш
          staleWhileRevalidate: 14400, // 4 часа stale данни
          typePolicies: {
            Product: {
              maxAge: 14400,           // 4 часа
            },
            Category: {
              maxAge: 28800,           // 8 часа
            },
            ProductVariation: {
              maxAge: 3600,            // 1 час
            }
          }
        },
        batch: true,
        batchMax: 15,                  // Намалено за по-малко натоварване
        retry: 3,
        retryDelay: (count: number) => Math.min(1000 * Math.pow(2, count), 15000),
        prefetch: true,
        defaultFetchOptions: {
          timeout: 30000,              // 30 секунди за споделен хостинг
        },
        fetchPolicy: 'cache-first',
      },
    },
  },

  compatibilityDate: "2025-05-03",

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Leader Fitness',
      short_name: 'LeaderFitness',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
      ]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,jpg,jpeg,webp}'],
      runtimeCaching: [
        {
          urlPattern: '/graphql',
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'api-cache',
            expiration: {
              maxEntries: 200,
              maxAgeSeconds: 86400 * 2 // 48 часа
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },
        {
          urlPattern: /\.(png|jpg|jpeg|webp)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'image-cache',
            expiration: {
              maxEntries: 500,
              maxAgeSeconds: 86400 * 7 // 7 дни
            }
          }
        }
      ]
    }
  },

  routeRules: {
    // Global rate limiting
    "/**": {
      headers: {
        "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=3600"
      }
    }
  },
});
