export default defineNuxtConfig({
  extends: ["./woonuxt_base"],

  components: [{ path: "./components", pathPrefix: false }],

  modules: [
    "nuxt-graphql-client",
    "@nuxtjs/sitemap",
    "@vite-pwa/nuxt"
  ],

  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: false,
    componentIslands: false
  },

  nitro: {
    preset: 'vercel',
    minify: true,
    compressPublicAssets: true,
    timing: false,
    routeRules: {
      // Static pages with basic caching
      "/": { 
        static: true,
        swr: 3600
      },
      "/categories": { 
        static: true,
        swr: 7200
      },
      "/contact": { 
        static: true,
        swr: 86400
      },

      // Product listing pages
      "/products": { 
        swr: true,
        cache: {
          maxAge: 900
        }
      },
      "/products/page/**": { 
        swr: true,
        cache: {
          maxAge: 900
        }
      },

      // Category pages
      "/produkt-kategoriya/**": { 
        swr: true,
        cache: {
          maxAge: 1800
        }
      },

      // Product pages
      "/produkt/**": { 
        swr: true,
        cache: {
          maxAge: 3600
        }
      },

      // No-cache dynamic pages
      "/checkout/**": { 
        ssr: true, 
        cache: false
      },
      "/cart": { 
        ssr: true, 
        cache: false
      },
      "/my-account/**": { 
        ssr: true, 
        cache: false
      }
    }
  },

  runtimeConfig: {
    public: {
      GQL_HOST: "https://leaderfitness.admin-panels.com/graphql",
      PRODUCT_CATEGORY_PERMALINK: "/produkt-kategoriya/",
      PRODUCTS_PER_PAGE: 12,
      graphql: {
        timeout: 8000,
        retries: 1,
        maxOperations: 5
      }
    },
  },

  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://leaderfitness.admin-panels.com" },
        { rel: "dns-prefetch", href: "https://leaderfitness.admin-panels.com" },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5' }
      ]
    },
    buildAssetsDir: '/_nuxt/',
    cdnURL: process.env.NODE_ENV === 'production' ? 'https://leader-fitness.vercel.app' : undefined,
  },

  sitemap: {
    siteUrl: "https://leaderfitness.admin-panels.com",
    excludes: [
      "/checkout/**",
      "/order-summary/**",
      "/my-account/**",
      "/oauth/**",
      "/cart",
    ],
    cacheTime: 1000 * 60 * 60,
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
          maxAge: 1800,
          staleWhileRevalidate: 7200,
          typePolicies: {
            Product: {
              maxAge: 3600,
              merge: true,
            },
            Category: {
              maxAge: 7200,
              merge: true,
            },
            ProductVariation: {
              maxAge: 1800,
              merge: true,
            }
          }
        },
        batch: true,
        batchMax: 5,
        retry: 2,
        retryDelay: (count: number) => Math.min(1000 * Math.pow(2, count), 5000),
        prefetch: true,
        defaultFetchOptions: {
          timeout: 8000,
          headers: {
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive'
          }
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
      background_color: '#ffffff',
      display: 'standalone',
      orientation: 'portrait',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        },
      ]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,jpg,jpeg,webp,woff2}'],
      runtimeCaching: [
        {
          urlPattern: '/graphql',
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api-cache',
            networkTimeoutSeconds: 10,
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 3600
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
              maxEntries: 100,
              maxAgeSeconds: 86400 * 7
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        },
        {
          urlPattern: /\.(css|js|woff2)$/,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'static-cache',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 86400
            }
          }
        }
      ],
      cleanupOutdatedCaches: true,
      skipWaiting: true,
      clientsClaim: true
    }
  }
});
