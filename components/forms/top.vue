<template>
  <div class="top-form">
    <div v-if="!isPrivacy" class="top-form__title">
      <h1>{{ title }}</h1>
      <p>{{ subTitle }}</p>
    </div>
    <div v-if="isPrivacy" class="top-form__title__privacy">
      <h1>{{ title }}</h1>
      <p>{{ subTitle }}</p>
    </div>
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
  </div>
</template>

<script>
import scrollParallaxMixin from '@/mixins/scrollParallaxMixin';
export default {
  name: 'Fv',
  mixins: [scrollParallaxMixin],
  props: {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
  },
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
    isPrivacy() {
      return this.$route.name === 'privacypolicy';
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        this.isVisible = entry.isIntersecting;
      });
    });
    this.observer.observe(this.$el);
    //console.log(this.$route.name);
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
.top-form {
  width: 100vw;
  height: 26.38vw;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  z-index: 20;
  @include mixins.max-screen(768px) {
    height: 26.66vw;
    margin-top: 60px;
  }
  .top-form__title {
    position: absolute;
    top: 45%;
    left: 10%;
    display: flex;
    gap: 1.38vw;
    z-index: 1;
    @include mixins.max-screen(768px) {
      top: 27%;
    }
    h1 {
      font-size: 2.5vw;
      font-family: "Barlow Condensed", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 6.94vw;
      //letter-spacing: 0.01em;
      letter-spacing: 0.001em;
      color: #252526;
      @include mixins.max-screen(768px) {
        font-size: 16vw;
      }
    }
    p {
      font-size: 2.63vw;
      font-weight: bold;
      margin-top: 3vw;
      color: #252526;
      @include mixins.max-screen(768px) {
        font-size: 4.8vw;
        margin-top: 8vw;
      }
    }
  }
  .top-form__title__privacy {
    position: absolute;
    top: 45%;
    left: 10%;
    display: flex;
    gap: 1.38vw;
    z-index: 1;
    @include mixins.max-screen(768px) {
      top: 15%;
      display: block;
    }
    h1 {
      font-size: 2.5vw;
      font-family: "Barlow Condensed", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 6.94vw;
      //letter-spacing: 0.01em;
      letter-spacing: 0.001em;
      color: #252526;
      @include mixins.max-screen(768px) {
        font-size: 13.33vw;
        line-height: 1;
      }
    }
    p {
      font-size: 2.63vw;
      font-weight: bold;
      margin-top: 3vw;
      color: #252526;
      @include mixins.max-screen(768px) {
        font-size: 4.8vw;
        margin-top: 0;
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
    width: 12.29vw;
    position: absolute;
    top: 18%;
    left: -3%;
    animation: fv__img1 1.5s cubic-bezier(0.035, 0.800, 0.115, 1.000);
    transform: translate(0, 0);
    will-change: transform;
    @include mixins.max-screen(768px) {
      width: 12.79vw;
      top: 5%;
      left: -2%;
    }
  }
  .fv__img__parallax .fv__img2 {
    width: 10.48vw;
    position: absolute;
    top: 75%;
    left: 40%;
    animation: fv__img2 2s cubic-bezier(0.035, 0.800, 0.115, 1.000);
    will-change: transform;
    @include mixins.max-screen(768px) {
      width: 10.4vw;
      top: -10%;
      left: 35%;
    }
  }
  .fv__img__parallax .fv__img3 {
    width: 23.05vw;
    position: absolute;
    top: 0%;
    right: 20%;
    transform: translateY(-50%);
    will-change: transform;
    @include mixins.min-screen(769px) {
      animation: fv__img3 2s cubic-bezier(0.035, 0.800, 0.115, 1.000);
    }
    @include mixins.max-screen(768px) {
      width: 24vw;
      top: 0;
      right: 7%;
      transform: translateY(-50%);
      animation: fv__img3__sp 2s cubic-bezier(0.035, 0.800, 0.115, 1.000);
    }
  }
  .fv__img__parallax .fv__img4 {
    width: 29.16vw;
    position: absolute;
    bottom: -17%;
    right: -5%;
    animation: fv__img4 1.5s cubic-bezier(0.035, 0.800, 0.115, 1.000);
    will-change: transform;
    @include mixins.max-screen(768px) {
      width: 26.66vw;
      bottom: -10%;
      right: -5%;
    }
  }
}
</style>