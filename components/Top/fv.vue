<template>
  <section class="fv" id="fv">
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
      <!--:style="{ transform: 'translate3d(0, ' + parallaxOffset + 'px, 0)' }"-->
      <div class="fv__img__parallax" >
        <img src="/img/fv-pt1.svg" alt="fv_img" class="fv__img1">
        <img src="/img/fv-pt2.svg" alt="fv_img" class="fv__img2">
        <svg class="fv__img3" width="450" height="450" viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M225 450C349.264 450 450 349.264 450 225C450 100.736 349.264 0 225 0C100.736 0 0 100.736 0 225C0 349.264 100.736 450 225 450Z" fill="#85C1DE"/>
          <path d="M225.439 349C157.054 349 101.439 293.386 101.439 225C101.439 156.614 157.054 101 225.439 101V349Z" fill="#3676B6"/>
        </svg>

        <img src="/img/fv-pt4.svg" alt="fv_img" class="fv__img4">
      </div>
    </div>
  </section>
</template>

<script>
import scrollParallaxMixin from '@/mixins/scrollParallaxMixin';
export default {
  name: 'Fv',
  mixins: [scrollParallaxMixin],
  data() {
    return {
      parallaxSpeed: 10,
      scrollY: 0,
      ticking: false,
      isVisible: false,
      observer: null,
    };
  },
  computed: {
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        this.isVisible = entry.isIntersecting;
      });
    });
    this.observer.observe(this.$el);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    handleScroll() {
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          if (this.isVisible) {
            this.scrollY = window.scrollY;
          }
          this.ticking = false;
        });
        this.ticking = true;
      }
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
      height: min(5.8vw, 83.52px);
      margin-bottom: 2%;
      animation: fv__text 2s cubic-bezier(0.035, 0.800, 0.115, 1.000);
      @include mixins.max-screen(768px) {
        width: 58.4vw;
        height: auto;
        min-width: auto;
      }
    }
    .fv__text2 {
      display: block;
      width: 70vw;
      max-width: 1040px;
      height: min(6.5vw, 93.7px);
      margin-bottom: 2%;
      animation: fv__text 2s cubic-bezier(0.035, 0.800, 0.115, 1.000);
      @include mixins.max-screen(768px) {
        width: 89.33vw;
        height: auto;
        min-width: auto;
      }
    }
    .fv__title {
      display: block;
      width: 52.5vw;
      max-width: 779px;
      height: min(8.33vw, 120px);
      animation: fv__title 2s cubic-bezier(0.035, 0.800, 0.115, 1.000);
      @include mixins.max-screen(768px) {
        width: 89.33vw;
        height: auto;
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
    will-change: transform;
    transform: translate3d(0, var(--scroll-offset, 0px), 0);
  }
  /* 以下、子要素はfv__img__parallax内で元々のtop/left指定とアニメーションがそのまま効く */
  .fv__img__parallax .fv__img1 {
    width: 18vw;
    position: absolute;
    top: 18%;
    left: -7%;
    animation: fv__img1 1.5s cubic-bezier(0.035, 0.800, 0.115, 1.000);
    transform: translate(0, 0);
    will-change: transform;
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
    will-change: transform;
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
    will-change: transform;
    @include mixins.min-screen(769px) {
      animation: fv__img3 2s cubic-bezier(0.035, 0.800, 0.115, 1.000);
    }
    @include mixins.max-screen(768px) {
      width: 40vw;
      top: 15%;
      right: -10%;
      transform: translateY(-50%);
      animation: fv__img3__sp 2s cubic-bezier(0.035, 0.800, 0.115, 1.000);
    }
  }
  .fv__img__parallax .fv__img4 {
    width: 35vw;
    position: absolute;
    bottom: 0%;
    right: -5%;
    animation: fv__img4 1.5s cubic-bezier(0.035, 0.800, 0.115, 1.000);
    will-change: transform;
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
    transform: translateY(101%);
  }
  65% {
    transform: translateY(101%);
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
