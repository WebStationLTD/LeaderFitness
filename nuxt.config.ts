export default defineNuxtConfig({
  extends: ["./woonuxt_base"],

  components: [{ path: "./components", pathPrefix: false }],

  modules: [
    "nuxt-graphql-client",
    "@nuxtjs/sitemap"
  ],

  experimental: {
    payloadExtraction: false
  },

  nitro: {
    preset: 'vercel',
    prerender: {
      routes: [
        "/",
        "/products",
        "/categories",
        "/contact"
      ],
      crawlLinks: false,
      failOnError: false,
    },
    minify: true,
    compression: {
      gzip: true,
      brotli: true
    },
    routeRules: {
      // Static pages
      "/": { static: true },
      "/categories": { static: true },
      "/contact": { static: true },
      "/products": { static: true },

      // Dynamic pages with cache
      "/products/page/**": { 
        cache: {
          maxAge: 3600
        }
      },

      // Category pages with cache
      "/produkt-kategoriya/**": { 
        cache: {
          maxAge: 3600
        }
      },

      // Product pages with cache
      "/produkt/**": { 
        cache: {
          maxAge: 3600
        }
      },

      // No-cache pages
      "/checkout/**": { ssr: true },
      "/cart": { ssr: true },
      "/my-account/**": { ssr: true },
    },
    timing: false,
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
    keepalive: true,
    rootId: '__n',
    rootTag: 'div'
  },

  sitemap: {
    siteUrl: "https://leaderfitness.admin-panels.com",
    excludes: [
      "/checkout/**",
      "/order-summary/**",
      "/my-account/**",
      "/oauth/**",
    ],
    cacheTime: 1000 * 60 * 30,
    routes: ["/", "/products", "/categories", "/contact"],
  },

  "graphql-client": {
    clients: {
      default: {
        host: "https://leaderfitness.admin-panels.com/graphql",
        tokenStorage: {
          cookieOptions: {
            name: "authToken",
            maxAge: 60 * 60 * 24 * 7,
            sameSite: "Lax",
            secure: true,
          },
        },
        cachePolicy: {
          maxAge: 1800,
          staleWhileRevalidate: 7200,
          typePolicies: {
            Product: {
              maxAge: 3600,
            },
            Category: {
              maxAge: 7200,
            },
            ProductVariation: {
              maxAge: 1800,
            }
          }
        },
        batch: true,
        batchMax: 10,
        retry: 2,
        retryDelay: (count: number) => Math.min(1000 * Math.pow(2, count), 5000),
        prefetch: {
          enabled: true,
          batchMax: 5,
          timeout: 2000
        },
        defaultFetchOptions: {
          timeout: 15000,
        },
        fetchPolicy: 'cache-first',
      },
    },
  },

  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'graphql': ['graphql'],
            'vue': ['vue', 'vue-router'],
          }
        }
      }
    }
  }
});
