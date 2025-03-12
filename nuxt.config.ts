// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'my app',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  css: ['@/assets/css/reset.css'],
  pages: true,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  devServer: {
    port: 5000,
  },
})
