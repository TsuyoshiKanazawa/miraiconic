<!-- app.vue -->
<template>
  <div class="scroll-wrap">
    <Header />
    <div class="scroll-content">
      <main>
        <div>
          <NuxtPage />
        </div>
      </main>
      <Footer />
      <FormsLoading v-if="useLoading().value" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

// ScrollTrigger／ScrollSmoother を登録
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

let smoother

// useIsMobile の監視用
const isMobile = useIsMobile()
const updateIsMobile = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(async () => {
  // NuxtPage 等の描画完了を待つ
  await nextTick()

  // モバイル判定用リスナー
  updateIsMobile()
  window.addEventListener('resize', updateIsMobile)

  // ScrollSmoother の初期化
  smoother = ScrollSmoother.create({
    wrapper: '.scroll-wrap',
    content: '.scroll-content',
    smooth: 1.5,           // モメンタム感の強さ（大きくすると滑らか）
    normalizeScroll: true, // iOS Safari の慣性差を吸収
    effects: false         // data-speed などを使わなければ false
  })

  ScrollTrigger.refresh()
})

onBeforeUnmount(() => {
  // ScrollSmoother を破棄
  if (smoother) {
    smoother.kill()
    smoother = null
  }
  // モバイル判定用リスナー解除
  window.removeEventListener('resize', updateIsMobile)
})
</script>

<style lang="scss" scoped>
/* ブラウザ標準スクロールを隠し、Fixed で画面全体を制御 */
.scroll-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* ScrollSmoother が translateY で動かす要素 */
.scroll-content {
  position: relative;
  width: 100%;
  /* コンテンツの総高さ分だけスクロール領域を確保 */
  min-height: 100vh;
}
</style>
