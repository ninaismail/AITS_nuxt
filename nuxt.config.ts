import { routes } from "vue-router/auto-routes";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/contact': { ssr: false }
  },
  css: ['./assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',      
      link: [{ rel: 'icon', type: 'image/png', href: "/aits.png" }]
    },
  },
  build: {
    analyze:true
  },
  modules: ['@vueuse/motion/nuxt', 'vue-recaptcha/nuxt', "@nuxt/image", "@nuxt/fonts"],
  runtimeConfig: {
    public: {
      recaptcha: {
        v2SiteKey: '6LdrDcYpAAAAAAKprMmCkM5ESKdgGcLAwmr016wl',
      },
    },
    fonts: {
      // You can provide overrides for individual families
      families: [
        { name: 'aktifo', src: 'url(/fonts/Aktifo/Aktifo-A Book.woff2)' },
      ],
      assets: {
        // The prefix where your fonts will be accessible
        prefix: '/_fonts'
      },
      // You can customize the order in which providers are checked.
      priority: ['aktifo'],
      // You can also set a single provider, which is a shortcut for disabling all but one provider
      provider: 'fontshare',
      experimental: {
        // You can also enable support for processing CSS variables for font family names.
        // This may have a performance impact.
        processCSSVariables: true,
      }
    }
  }
})