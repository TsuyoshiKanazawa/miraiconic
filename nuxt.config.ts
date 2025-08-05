// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      gtm: {
        id: 'GTM-5FHGLTTF'
      },
      spaceUid: process.env.NEWT_SPACE_UID,
      cdnApiToken: process.env.NEWT_CDN_API_TOKEN,
      microcmsServiceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
      microcmsApiKey: process.env.MICROCMS_API_KEY,
      siteUrl: 'https://miraconi.com',
      emailjs: {
        serviceID: process.env.EMAILJS_SERVICE_ID,
        templateID: process.env.EMAILJS_TEMPLATE_ID,
        publicKey: process.env.EMAILJS_PUBLIC_KEY
      }
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: false,
  app: {
    baseURL: '/',
    head: {
      title: 'ミライコニック / MIRAICONIC',
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
        { hid: 'description', name: 'description', content: '株式会社ミライコニックは、高品質なBIMモデル制作と教育支援を通じ、建設業界のDXを支援します。' },
        { hid: 'keywords', name: 'keywords', content: 'ミライコニック, MIRAICONIC, BIM, 建設業界, DX, 教育支援' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'ミライコニック / MIRAICONIC' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://miraconi.com/' },
        { hid: 'og:title', property: 'og:title', content: 'ミライコニック / MIRAICONIC' },
        { hid: 'og:description', property: 'og:description', content: '株式会社ミライコニックは、高品質なBIMモデル制作と教育支援を通じ、建設業界のDXを支援します。' },
        { hid: 'og:image', property: 'og:image', content: 'https://miraconi.com/img/OGP.jpg' },
        { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:site', property: 'twitter:site', content: '@' },
        { hid: 'twitter:title', property: 'twitter:title', content: 'ミライコニック / MIRAICONIC' },
        { hid: 'twitter:description', property: 'twitter:description', content: '株式会社ミライコニックは、高品質なBIMモデル制作と教育支援を通じ、建設業界のDXを支援します。' },
        { hid: 'twitter:image', property: 'twitter:image', content: 'https://miraconi.com/img/OGP.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },
  plugins: [
    { src: '~/plugins/gsap.client.js', mode: 'client' }
  ],
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
  modules: ['@zadigetvoltaire/nuxt-gtm', 'nuxt-simple-sitemap'],
  sitemap: {
    urls: [
      {
        loc: '/',
        changefreq: 'daily',
        priority: 1
      },
      {
        loc: '/news',
        changefreq: 'daily',
        priority: 0.8
      },
      {
        loc: '/about',
        changefreq: 'daily',
        priority: 0.8
      },
      {
        loc: '/service',
        changefreq: 'daily',
        priority: 0.8
      },
      {
        loc: '/contact',
        changefreq: 'daily',
        priority: 0.8
      },
      {
        loc: '/privacypolicy',
        changefreq: 'daily',
        priority: 0.8
      }
    ]
  },
  site: {
    url: 'https://miraconi.com'
  },
})
