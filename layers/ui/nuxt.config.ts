import tailwindcss from '@tailwindcss/vite'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode', '@nuxt/image', '@nuxt/icon', 'nuxt-viewport'],
  vite: {
    plugins: [tailwindcss()],
  },

  css: [`${currentDir}/assets/css/tailwind.css`],
  colorMode: {
    preference: 'system',
    classSuffix: '',
  },
  viewport: {
    breakpoints: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },

    defaultBreakpoints: {
      desktop: 'lg',
      mobile: 'xs',
      tablet: 'md',
    },

    fallbackBreakpoint: 'lg',
  },
  alias: {
    '#ui': `${currentDir}`,
  },
})
