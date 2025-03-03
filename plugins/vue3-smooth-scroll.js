import { defineNuxtPlugin } from "#app"
import VueSmoothScroll from "vue3-smooth-scroll"

export default defineNuxtPlugin((nuxtApp) => {
  const config = {
    duration: 800,
    updateHistory: false,
  }
  nuxtApp.vueApp.use(VueSmoothScroll, config)
})