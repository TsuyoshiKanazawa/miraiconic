<template>
  <section class="about">
    <img loading="lazy" src="/img/about/aboutBg1.jpg" alt="aboutBg1" class="about_bg1">
    <div class="about__container" v-observe="'inview'">
      <div class="about__container__contents">
        <div class="about__line__wrapper mask">
          <img loading="lazy" v-if="!useIsMobile().value" src="/img/about/aboutLine.svg" alt="line" class="about__contents__line">
          <img loading="lazy" v-if="useIsMobile().value" src="/img/about/aboutLine-sp.png" alt="line" class="about__contents__line">
        </div>
        <h3 class="about__title__sub" v-observe="'inview'">
          つなぐ、ミライへの<br>BIMエクスペリエンス
        </h3>
        <p class="about__text fade-enter-from" v-observe="'inview'">
          株式会社ミライコニックは、高品質なBIMモデルと専門的な教育を提供し、<br>
          建設業界のDXを最先端技術で支援します。
        </p>
        <FormsButton name="About Us" link="/about" class="FormsButton" />
      </div>
      <div class="about__bg__wrapper top" style="z-index: 11;" :style="{ transform: 'translateY(' + parallaxOffset + 'px)' }">
        <div class="about__bg__wrapper__contents1" v-observe="'inview'">
          <img loading="lazy" src="/img/about/about-pt1.svg" alt="aboutBg3" class="about_pt1">
        </div>
      </div>
      <div class="about__bg__wrapper" style="z-index: 0;">
        <div class="about__bg__wrapper__contents2" v-observe="'inview'">
          <img loading="lazy" src="/img/about/about-pt2.svg" alt="aboutBg3" class="about_pt2">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import scrollParallaxMixin from '@/mixins/scrollParallaxMixin';
export default {
  name: 'About',
  mixins: [scrollParallaxMixin],
}
</script>


<style lang="scss" scoped>
.about {
  position: relative;
  overflow: hidden;
  .about_bg1 {
    width: 100%;
    display: block;
  }
  .about__container {
    background-image: url('/img/about/aboutBg2.jpg');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    padding-bottom: min(3.47vw, 50px);
    position: relative;
    @include mixins.max-screen(768px) {
      background-image: url('/img/about/aboutBg2-sp.jpg');
    }
    .about__container__contents {
      padding: min(2.5vw, 50px) 6vw;
      background-color: #fff;
      width: 93vw;
      max-width: 1310px;
      margin: 0 0 0 auto;
      color: #252526;
      transform: translate(0, -3.47vw);
      position: relative;
      z-index: 10;
      @include mixins.min-screen(1441px) {
        margin-right: calc((100vw - 1440px) / 2);
        margin-left: auto;
        &::after {
          content: '';
          display: block;
          width: calc((100vw - 1440px) / 2);
          height: 100%;
          background-color: #fff;
          position: absolute;
          top: 0;
          right: calc((1440px - 100vw) / 2);
          z-index: 10;
        }
      }
      @include mixins.max-screen(783px) {
        width: 94.66vw;
        padding: 8vw 0 0 0;
      }
      .about__line__wrapper {
        position: absolute;
        top: 0%;
        left: 4vw;
        width: fit-content;
        height: fit-content;
        padding: 0;
        .about__contents__line {
          width: 0.41vw;
          max-width: 6px;
          transition: transform 0.8s ease-in-out;
          transform: translateY(-100%);
          @include mixins.max-screen(768px) {
            width: 2.3vw;
            max-width: none;
            display: block;
            margin: 0;
          }
        }
      }
      .about__title__wrapper {
        .about__title {
          font-family: "Barlow Condensed", sans-serif;
          font-weight: 600;
          font-style: normal;
          font-size: min(3.47vw, 50px);
          color: #252526;
          //letter-spacing: 0.01em;
          letter-spacing: 0.001em;
          display: block;
          transform: translateY(100%);
          transition: transform 0.8s ease-in-out;
          @include mixins.max-screen(768px) {
            font-size: 8vw;
            margin-left: 10.66vw;
          }
        }
        &.inview {
          .about__title {
            transform: translateY(0);
          }
        }
      }
      .about__title__sub {
        font-size: min(4.03vw, 58px);
        font-weight: 700;
        letter-spacing: 0.03em;
        transform: translateY(30%);
        opacity: 0;
        transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
        &.inview {
          transform: translateY(0);
          opacity: 1;
        }
        @include mixins.max-screen(768px) {
          line-height: 1.5;
          font-size: 8vw;
          margin-left: 10.66vw;
        }
      }
      .about__text {
        font-size: min(1.04vw, 15px);
        font-weight: 500;
        color: #252526;
        line-height: 2.2;
        margin-top: 1.5vw;
        letter-spacing: 0.05em;
        @include mixins.max-screen(768px) {
          font-size: 3.73vw;
          margin-left: 10.66vw;
          line-height: 2;
        }
      }
      .about__img1 {
        position: absolute;
        bottom: 0;
        left: min(56vw, 790px);
        width: 15.76vw;
        max-width: 227px;
        @include mixins.max-screen(768px) {
          position: static;
          width: 41.33vw;
          margin: 0 auto;
          display: block;
        }
      }
      .about__img__text {
        position: absolute;
        bottom: 2%;
        left: min(73vw, 1030px);
        font-size: min(0.69vw, 10px);
        font-weight: 500;
        @include mixins.max-screen(768px) {
          font-size: 2.66vw;
          bottom: 1%;
          right: 6%;
          left: auto;
        }
        span {
          font-size: min(1.52vw, 22px);
          @include mixins.max-screen(768px) {
            font-size: 5.33vw;
          }
        }
      }
    }
    &.inview {
      .about__line__wrapper {
        .about__contents__line {
          transform: translateY(0);
        }
      }
      .about__title__wrapper {
        .about__title {
          transform: translateY(0);
        }
      }
    }
  }
  .about__bg__wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    transform: translate3d(0, var(--scroll-offset), 0);
    transition: transform 0.8s ease-out;
    &.top {
      top: 0;
      left: auto;
      right: 0%;
    }
    &__contents1 {
      width: fit-content;
      transform: translateX(51%) rotate(180deg);
      margin-right: 0;
      margin-left: auto;
      margin-top: max(-250vw, -250px);
      transition: transform 0.8s ease-in-out;
      position: relative;
      @include mixins.max-screen(768px) {
        margin-top: -20vw;
      }
      .about_pt1 {
        width: 17.36vw;
        max-width: 250px;
        display: block;
        transition: transform 0.8s ease-in-out;
        position: relative;
        margin-right: 0;
        margin-left: auto;
        z-index: 2;
        transform: translateX(-100%);
        @include mixins.max-screen(768px) {
          width: 26.66vw;
          max-width: auto;  
        }
      }
      &.inview {
        transform: translateX(51%) rotate(0);
      }
    }
    &__contents2 {
      width: fit-content;
      margin-right: auto;
      margin-left: 0;
      transition: transform 0.8s ease-in-out;
      position: relative;
      @include mixins.max-screen(768px) {
        margin-top: 120vw;
        margin-left: -30vw;
      }
      .about_pt2 {
        width: 43.05vw;
        max-width: 620px;
        transition: transform 0.8s ease-in-out;
        position: relative;
        transform: translate(-90%, 100%);
        @include mixins.max-screen(768px) {
          width: 100vw;
          max-width: auto;
        }
      }
      &.inview {
        .about_pt2 {
          transform: translate(0, -10%);
        }
      }
    }

  }
  .FormsButton {
    margin: min(2.22vw, 32px) 0;
    @include mixins.max-screen(768px) {
      margin-top: 10vw;
    }
  }
}
</style>
