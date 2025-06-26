import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(async () => {
  // クライアント＆デスクトップ幅のみ
  if (process.client && window.innerWidth >= 768) {
    const { gsap } = await import('gsap')
    const { ScrollTrigger, ScrollSmoother } = await import('gsap/all')
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
  }
})
