import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",

  devtools: {
    enabled: true,
  },

  typescript: {
    typeCheck: true,
    strict: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  future: {
    compatibilityVersion: 4,
  },

  app: {
    rootId: "app",
    head: {
      htmlAttrs: {
        lang: "nl",
      },
    },
  },

  css: ["~/assets/css/app.css"],

  modules: ["@vueuse/nuxt", "@nuxtjs/color-mode", "@nuxt/image", "@nuxt/icon"],
});
