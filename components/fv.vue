<template>
  <section class="fv">
    <div class="fv__text__wrapper">
      <div class="mask">
        <img src="/img/fv-text1.svg" alt="fv_title" class="fv__text1">
      </div>
      <div class="mask">
        <img src="/img/fv-text2.svg" alt="fv_title" class="fv__text2">
      </div>
      <div class="mask">
        <img src="/img/fv-title.svg" alt="fv_title" class="fv__title">
      </div>
    </div>
    <!-- 親ラッパー内にパララックス用ラッパーを新規追加 -->
    <div class="fv__img__wrapper">
      <div class="fv__img__parallax" :style="{ transform: 'translateY(' + parallaxOffset + 'px)' }">
        <img src="/img/fv-pt1.svg" alt="fv_img" class="fv__img1">
        <img src="/img/fv-pt2.svg" alt="fv_img" class="fv__img2">
        <img src="/img/fv-pt3.svg" alt="fv_img" class="fv__img3">
        <img src="/img/fv-pt4.svg" alt="fv_img" class="fv__img4">
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
  @include mixins.max-screen(768px) {
    height: 148vw;
  }
  .fv__text__wrapper {
    position: absolute;
    bottom: 21px;
    left: 10%;
    z-index: 10;
    transition: transform 1s ease-out;
    @include mixins.max-screen(768px) {
      bottom: 40%;
      left: 5%;
    }
    img {
      display: block;
    }
    .fv__text1 {
      display: block;
      width: 46.59vw;
      max-width: 671px;
      min-width: 500px;
      height: min(5.8vw, 83.52px);
      margin-bottom: 2%;
      animation: fv__text 2s cubic-bezier(0.035, 0.800, 0.115, 1.000);
      @include mixins.max-screen(768px) {
        width: 90vw;
        min-width: auto;
      }
    }
    .fv__text2 {
      display: block;
      width: 70vw;
      max-width: 1040px;
      min-width: 500px;
      height: min(6.5vw, 93.7px);
      margin-bottom: 2%;
      animation: fv__text 2s cubic-bezier(0.035, 0.800, 0.115, 1.000);
      @include mixins.max-screen(768px) {
        width: 90vw;
        min-width: auto;
      }
    }
    .fv__title {
      display: block;
      width: 52.5vw;
      max-width: 779px;
      min-width: 300px;
      height: min(8.33vw, 120px);
      animation: fv__title 2s cubic-bezier(0.035, 0.800, 0.115, 1.000);
      @include mixins.max-screen(768px) {
        width: 90vw;
        min-width: auto;
      }
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
    @include mixins.max-screen(768px) {
      width: 20vw;
      top: auto;
      bottom: 5%;
      left: -2%;
    }
  }
  .fv__img__parallax .fv__img2 {
    width: 13vw;
    position: absolute;
    top: 38%;
    left: 23%;
    animation: fv__img2 2s cubic-bezier(0.035, 0.800, 0.115, 1.000);
    @include mixins.max-screen(768px) {
      width: 20vw;
      top: 20%;
      left: 15%;
    }
  }
  .fv__img__parallax .fv__img3 {
    width: 30vw;
    position: absolute;
    top: 0%;
    right: 20%;
    transform: translateY(-50%);
    animation: fv__img3 2s cubic-bezier(0.035, 0.800, 0.115, 1.000);
    @include mixins.max-screen(768px) {
      width: 40vw;
      top: 15%;
      right: -10%;
      animation: fv__img3__sp 2s cubic-bezier(0.035, 0.800, 0.115, 1.000);
    }
  }
  .fv__img__parallax .fv__img4 {
    width: 35vw;
    position: absolute;
    bottom: 0%;
    right: -5%;
    animation: fv__img4 1.5s cubic-bezier(0.035, 0.800, 0.115, 1.000);
    @include mixins.max-screen(768px) {
      width: 60vw;
      bottom: -5%;
      right: -5%;
    }
  }
}
@keyframes fv__text {
  0% {
    transform: translateY(130%);
  }
  65% {
    transform: translateY(130%);
  }
  100% {
    transform: translateY(0%);
  }
}

@keyframes fv__title {
  0% {
    transform: translateY(100%);
  }
  65% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
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

@keyframes fv__img3__sp {
  0% {
    transform: translateY(-150%) rotate(-180deg);
  }
  50% {
    transform: translateY(-150%) rotate(-180deg);
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
