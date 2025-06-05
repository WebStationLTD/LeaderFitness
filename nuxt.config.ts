export default defineNuxtConfig({
  extends: ["./woonuxt_base"],

  components: [{ path: "./components", pathPrefix: false }],

  modules: [
    "nuxt-graphql-client",
    "@nuxtjs/sitemap",
    "@vite-pwa/nuxt"
  ],

  experimental: {
    payloadExtraction: true,
    inlineSSRStyles: true,
    renderJsonPayloads: true,
    componentIslands: true
  },

  nitro: {
    preset: 'vercel',
    minify: true,
    compressPublicAssets: true,
    timing: true,
    storage: {
      cache: {
        driver: 'memory',
        max: 100,
        ttl: 1800
      }
    },
    routeRules: {
      // Static pages
      "/": { 
        prerender: true,
        cache: {
          maxAge: 3600,
          staleWhileRevalidate: 86400
        }
      },
      "/categories": { 
        prerender: true,
        cache: {
          maxAge: 7200,
          staleWhileRevalidate: 86400
        }
      },
      "/contact": { 
        prerender: true,
        cache: {
          maxAge: 86400,
          staleWhileRevalidate: 86400
        }
      },

      // Product listing pages with hybrid rendering
      "/products": { 
        prerender: true,
        cache: {
          maxAge: 900,
          staleWhileRevalidate: 3600
        }
      },
      "/products/page/**": { 
        cache: {
          maxAge: 900,
          staleWhileRevalidate: 3600
        }
      },

      // Category pages with hybrid rendering
      "/produkt-kategoriya/**": { 
        cache: {
          maxAge: 1800,
          staleWhileRevalidate: 7200
        }
      },

      // Product pages with hybrid rendering
      "/produkt/**": { 
        cache: {
          maxAge: 3600,
          staleWhileRevalidate: 86400
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
        maxOperations: 5,
        cachePolicy: {
          maxAge: 900,
          staleWhileRevalidate: 3600
        }
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
