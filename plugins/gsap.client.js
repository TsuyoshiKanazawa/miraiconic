import { defineNuxtPlugin } from '#app'
import { gsap } from 'gsap'
import { ScrollTrigger, ScrollSmoother } from 'gsap/all'

export default defineNuxtPlugin(() => {
  // クライアント＆デスクトップ幅のみ
  if (process.client && window.innerWidth >= 768) {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
  }
})
