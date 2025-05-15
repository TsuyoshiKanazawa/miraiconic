<template>
  <div>
    <Header />
    <div class="error-page">
      <div v-if="error.statusCode === 404" class="error-page__text">
        <h1>404</h1>
        <p>Page Not Found</p>
        <p>
          ページが見つかりませんでした。<br>
          お探しのページは移動または削除された可能性があります。
        </p>
      </div>
      <div v-if="error.statusCode === 403" class="error-page__text">
        <h1>403</h1>
        <p>Access Denied</p>
        <p>
          アクセスが拒否されました。<br>
          指定されたページへのアクセスが許可されていません。
        </p>
      </div>
      <div v-if="error.statusCode === 500" class="error-page__text">
        <h1>500</h1>
        <p>Internal Server Error</p>
        <p>
          サーバーでエラーが発生しました。<br>
          しばらく経ってから再度アクセスしてください。
        </p>
      </div>
      <a href="/">トップに戻る</a>
    </div>
    <Footer />
  </div>
</template>

<script setup>
const error = useError();
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

<style lang="scss" scoped>
.error-page {
  text-align: center;
  background-color: #f0f0f0;
  padding: 15% 0;
  color: #252526;
  @include mixins.max-screen(768px) {
    padding: 30% 0;
  }
  .error-page__text {
    h1 {
      font-size: min(80px, 5.55vw);
      font-weight: 700;
      span {
        font-size: min(20px, 1.38vw);
        font-weight: 500;
      }
      @include mixins.max-screen(768px) {
        font-size: 20vw;
      }
    }
    p {
      font-size: min(20px, 1.38vw);
      font-weight: 500;
      margin-bottom: min(40px, 2.77vw);
      @include mixins.max-screen(768px) {
        font-size: 5vw;
        width: 90%;
        margin: 3% auto;
      }
    }
  }
  a {
    display: block;
    background-color: #3676B6;
    color: #fff !important;
    font-weight: 500;
    font-size: min(16px, 1.38vw);
    border-radius: 5px;
    width: min(300px, 20.83vw);
    height: min(40px, 2.77vw);
    line-height: min(36px, 2.5vw);
    border-radius: min(60px, 4.16vw);
    box-shadow: min(4px, 0.27vw) min(4px, 0.27vw) 0 0 #252526;
    position: relative;
    z-index: 10000;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out, color 0.2s ease-in-out;
    border: 2px solid #3676B6;
    margin: 0 auto;
    @include mixins.max-screen(768px) {
      width: 80vw;
      height: 10.66vw;
      border-radius: 16vw;
      line-height: 8.66vw;
      font-size: 5.33vw !important;
      margin: 10vw auto 2vw;
      box-shadow: 1.06vw 1.06vw 0 0 #252526;
    }
    @include mixins.min-screen(769px) {
      &:hover {
        background-color: #fff;
        color: #3676B6 !important;
        svg {
          path {
            fill: #3676B6;
          }
          circle {
            stroke: #3676B6;
          }
        }
      }
    }
  }
}
</style>
