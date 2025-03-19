// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /**
  runtimeConfig: {
    public: {
      gtm: {
        id: 'GTM-W7RG6B8T'
      }
    }
  },*/
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: false,
  app: {
    baseURL: '/',
    head: {
      title: 'ミライコニック / Miraiconic Inc.',
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: http://ogp.me/ns#'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' },
        { name: 'format-detection', content: 'telephone=no' },
        { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
        { 'http-equiv': 'content-language', content: 'ja' },
        { hid: 'description', name: 'description', content: '株式会社ミライコニックは、高品質なBIMモデル制作と教育支援を通じ、建設業界のDXをサポートします。' },
        { hid: 'keywords', name: 'keywords', content: '' },
        { hid: 'og:site_name', property: 'og:site_name', content: '' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: '' },
        { hid: 'og:title', property: 'og:title', content: 'ミライコニック / Miraiconic Inc.' },
        { hid: 'og:description', property: 'og:description', content: '株式会社ミライコニックは、高品質なBIMモデル制作と教育支援を通じ、建設業界のDXをサポートします。' },
        { hid: 'og:image', property: 'og:image', content: '/img/OGP.jpg' },
        { hid: 'twitter:card', property: 'twitter:card', content: 'summary' },
        { hid: 'twitter:site', property: 'twitter:site', content: '@' },
        { hid: 'twitter:title', property: 'twitter:title', content: 'ミライコニック / Miraiconic Inc.' },
        { hid: 'twitter:description', property: 'twitter:description', content: '株式会社ミライコニックは、高品質なBIMモデル制作と教育支援を通じ、建設業界のDXをサポートします。' },
        { hid: 'twitter:image', property: 'twitter:image', content: '/img/OGP.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  plugins: [],
  css: [
    '@/assets/scss/reset.scss',
    '@/assets/scss/main.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/mixins" as mixins; @use "@/assets/scss/defines" as defines;',
        },
      },
    },
  },
})
