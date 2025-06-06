export default defineNuxtConfig({
  extends: ["./woonuxt_base"],

  components: [{ path: "./components", pathPrefix: false }],

  modules: [
    "nuxt-graphql-client",
    "@nuxtjs/sitemap"
  ],

  experimental: {
    payloadExtraction: true,
  },

  nitro: {
    preset: 'vercel',
    future: {
      nativeSWR: true
    },
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

      // Dynamic pages with ISR
      "/products/page/**": { 
        isr: 60
      },

      "/produkt-kategoriya/**": { 
        isr: 60
      },

      "/produkt/**": { 
        isr: 60
      },

      "/blog/**": { 
        isr: 60
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
            maxAge: 60 * 60 * 24,
            sameSite: "Lax",
            secure: true,
          },
        },
        cachePolicy: {
          maxAge: 60,
          staleWhileRevalidate: 3600,
          typePolicies: {
            Product: {
              maxAge: 300,
            },
            Category: {
              maxAge: 600,
            },
            ProductVariation: {
              maxAge: 300,
            },
            Post: {
              maxAge: 600,
            }
          }
        },
        batch: true,
        batchMax: 5,
        retry: 1,
        retryDelay: (count: number) => Math.min(1000 * count, 3000),
        prefetch: {
          enabled: true,
          batchMax: 3,
          timeout: 1000
        },
        defaultFetchOptions: {
          timeout: 5000,
        },
        fetchPolicy: 'cache-and-network',
      },
    },
  },

  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            // Vendor chunks
            if (id.includes('node_modules')) {
              if (id.includes('@headlessui') || id.includes('@heroicons')) {
                return 'vendor-ui';
              }
              if (id.includes('vue') || id.includes('graphql')) {
                return 'vendor-core';
              }
              return 'vendor';
            }
            
            // App chunks
            if (id.includes('composables/')) {
              return 'features';
            }
            if (id.includes('components/')) {
              return 'components';
            }
            if (id.includes('pages/')) {
              return 'pages';
            }
          }
        }
      },
      chunkSizeWarningLimit: 1000,
      cssCodeSplit: true,
      minify: true,
      sourcemap: false
    },
    css: {
      devSourcemap: false,
      preprocessorOptions: {
        postcss: {
          plugins: [
            'autoprefixer',
            ['cssnano', {
              preset: ['default', {
                discardComments: { removeAll: true },
                normalizeWhitespace: false
              }]
            }]
          ]
        }
      }
    },
    optimizeDeps: {
      include: ['vue', 'vue-router', 'graphql'],
      exclude: ['fsevents']
    }
  }
});
