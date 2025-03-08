export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  future: { compatibilityVersion: 4 },

  devtools: {
    enabled: true,
  },

  typescript: {
    typeCheck: true,
    strict: true,
  },

  app: {
    rootId: 'app',
    head: {
      htmlAttrs: {
        lang: 'nl',
      },
    },
  },

  css: ['~/assets/css/app.css'],

  modules: ['@vueuse/nuxt'],
})