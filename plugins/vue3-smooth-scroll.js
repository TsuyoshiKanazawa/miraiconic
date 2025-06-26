import { defineNuxtPlugin } from "#app"

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = {
    duration: 800,
    updateHistory: false,
  }
  const { default: VueSmoothScroll } = await import("vue3-smooth-scroll")
  nuxtApp.vueApp.use(VueSmoothScroll, config)
})
