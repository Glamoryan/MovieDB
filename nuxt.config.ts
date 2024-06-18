// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '~/assets/main.css',
    '~/assets/css/nav.css',
    '~/assets/css/banner.css',
    '~/assets/css/recommender.css',
    '~/assets/css/layout/sidebar.css'
  ],
  modules: [
    '@pinia/nuxt'
  ],
  plugins: [
    '~/plugins/fontawesome.js'
  ]
})
