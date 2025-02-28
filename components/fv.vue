<template>
  <section class="fv">
    <div class="fv__text__wrapper">
      <img src="/img/fv_text.png" alt="copy" class="fv__text">
      <img src="/img/fv_title.png" alt="fv_title" class="fv__title">
    </div>
    <!-- 親ラッパー内にパララックス用ラッパーを新規追加 -->
    <div class="fv__img__wrapper">
      <div class="fv__img__parallax" :style="{ transform: 'translateY(' + parallaxOffset + 'px)' }">
        <img src="/img/fv-pt1.png" alt="fv_img" class="fv__img1">
        <img src="/img/fv-pt2.png" alt="fv_img" class="fv__img2">
        <img src="/img/fv-pt3.png" alt="fv_img" class="fv__img3">
        <img src="/img/fv-pt4.png" alt="fv_img" class="fv__img4">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Fv',
  data() {
    return {
      parallaxSpeed: 10,
      scrollY: 0,
    };
  },
  computed: {
    parallaxOffset() {
      return this.scrollY / this.parallaxSpeed;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
    },
  },
};
</script>

<style lang="scss" scoped>
.fv {
  width: 100%;
  height: 100vh;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  .fv__text__wrapper {
    position: absolute;
    bottom: 21px;
    left: 10%;
    z-index: 10;
    transition: transform 1s ease-out;
    img {
      display: block;
    }
    .fv__text {
      width: 70vw;
      max-width: 1040px;
      min-width: 500px;
    }
    .fv__title {
      width: 52.5vw;
      max-width: 779px;
      min-width: 300px;
    }
  }
  /* fv__img__wrapperはレイアウト上の基点となる */
  .fv__img__wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }
  /* パララックス効果は内部のfv__img__parallaxに適用 */
  .fv__img__parallax {
    transition: transform 1s ease-out;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  /* 以下、子要素はfv__img__parallax内で元々のtop/left指定とアニメーションがそのまま効く */
  .fv__img__parallax .fv__img1 {
    width: 18vw;
    position: absolute;
    top: 18%;
    left: -7%;
    animation: fv__img1 1.5s cubic-bezier(0.035, 0.800, 0.115, 1.000);
  }
  .fv__img__parallax .fv__img2 {
    width: 13vw;
    position: absolute;
    top: 38%;
    left: 23%;
    animation: fv__img2 2s cubic-bezier(0.035, 0.800, 0.115, 1.000);
  }
  .fv__img__parallax .fv__img3 {
    width: 30vw;
    position: absolute;
    top: 0%;
    right: 20%;
    transform: translateY(-50%);
    animation: fv__img3 2s cubic-bezier(0.035, 0.800, 0.115, 1.000);
  }
  .fv__img__parallax .fv__img4 {
    width: 35vw;
    position: absolute;
    bottom: 0%;
    right: -5%;
    animation: fv__img4 1.5s cubic-bezier(0.035, 0.800, 0.115, 1.000);
  }
}

@keyframes fv__img1 {
  0% {
    transform: translate(-100%, 50%);
  }
  50% {
    transform: translate(-100%, 50%);
  }
  100% {
    transform: translate(0%, 0%);
  }
}

@keyframes fv__img2 {
  0% {
    transform: scale(0) rotate(-35deg);
  }
  50% {
    transform: scale(0) rotate(-35deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
  }
}

@keyframes fv__img3 {
  0% {
    transform: translateY(-100%) rotate(-180deg);
  }
  50% {
    transform: translateY(-100%) rotate(-180deg);
  }
  100% {
    transform: translateY(-50%) rotate(0deg);
  }
}

@keyframes fv__img4 {
  0% {
    transform: translate(100%, -100%);
  }
  50% {
    transform: translate(100%, -100%);
  }
  100% {
    transform: translate(0%, 0%);
  }
}
</style>
