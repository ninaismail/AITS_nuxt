import { routes } from "vue-router/auto-routes";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
  modules: ['@vueuse/motion/nuxt']
})
