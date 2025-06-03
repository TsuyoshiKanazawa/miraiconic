<!-- app.vue -->
<template>
  <div v-if="isExcludedPage">
    <Header />
    <main>
      <NuxtPage />
    </main>
    <Footer />
    <FormsLoading v-if="useLoading().value" />
  </div>
  <div v-else class="scroll-wrap">
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
import { onMounted, onBeforeUnmount, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
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

const route = useRoute()

// 除外したいパスのリスト
const excludedPaths = ['/contact', '/contact/check', '/contact/thanks']

// 現在のルートが除外パスかを判定
const isExcludedPage = computed(() => {
  return excludedPaths.includes(route.path)
})

/**
 * ScrollSmoother を必要に応じて初期化 or 破棄する
 */
const refreshSmoother = async () => {
  // まず既存インスタンスを kill
  const prev = ScrollSmoother.get()
  if (prev) {
    prev.kill()
  }

  // 除外ページなら new しない
  if (isExcludedPage.value) {
    smoother = null
    return
  }

  // 除外じゃなければ再作成
  await nextTick()
  smoother = ScrollSmoother.create({
    wrapper: '.scroll-wrap',
    content: '.scroll-content',
    smooth: 1.5,
    normalizeScroll: true,
    effects: false
  })
  ScrollTrigger.refresh()
}

onMounted(async () => {
  await refreshSmoother()
  updateIsMobile()
  window.addEventListener('resize', updateIsMobile)
})

// ルートが変わるたびに re-init
watch(
  () => route.path,
  async () => {
    await refreshSmoother()
  }
)

onBeforeUnmount(() => {
  if (smoother) {
    smoother.kill()
    smoother = null
  }
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
