<template>
  <!-- モバイル幅のときは通常レイアウト -->
  <div v-if="isExcludedPage || isMobile">
    <Header />
    <main>
      <NuxtPage />
    </main>
    <Footer />
    <FormsLoading v-if="useLoading().value" />
  </div>

  <!-- 慣性スクロール -->
  <div v-else class="scroll-wrap">
    <Header />
    <div class="scroll-content">
      <main>
        <NuxtPage />
      </main>
      <Footer />
      <FormsLoading v-if="useLoading().value" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

let smoother

// useIsMobile の監視用
const isMobile = useIsMobile()
const updateIsMobile = () => {
  isMobile.value = window.innerWidth < 768
}

// 除外ページ判定
const route = useRoute()
const excludedPaths = ['/contact', '/contact/check', '/contact/thanks']
const isExcludedPage = computed(() => excludedPaths.includes(route.path))

// 慣性スクロールの初期化／破棄
const refreshSmoother = async () => {
  const prev = ScrollSmoother.get()
  if (prev) prev.kill()

  // モバイル or 除外ページ なら skip
  if (isMobile.value || isExcludedPage.value) {
    smoother = null
    return
  }

  // それ以外は再作成
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
  updateIsMobile()
  await refreshSmoother()

  window.addEventListener('resize', async () => {
    updateIsMobile()
    await refreshSmoother()
  })
})

// ルート変更で再初期化
watch(() => route.path, async () => {
  await refreshSmoother()
})

onBeforeUnmount(() => {
  if (smoother) smoother.kill()
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
