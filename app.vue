<template>
  <div>
    <Header />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

// useIsMobileはreactiveなrefを返すカスタムコンポーザブルと仮定
const isMobile = useIsMobile();

const updateIsMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  // コンポーネントのマウント時に初期値を設定
  updateIsMobile();
  // resizeイベントの監視を開始
  window.addEventListener('resize', updateIsMobile);
});

onUnmounted(() => {
  // コンポーネントのアンマウント時にイベントリスナーを解除
  window.removeEventListener('resize', updateIsMobile);
});
</script>


<style lang="scss" scoped></style>