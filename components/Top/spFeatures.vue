<template>
  <div class="features">
    <img loading="lazy" src="/img/top/scrollConnectionSp.jpg" alt="features" class="connection">
    <div class="features-wrap">
      <div class="features-wrap-title" v-observe="'inview'">
        Features
      </div>
      <p class="features-wrap-item" v-observe="'inview'">ミライコニックは、<br>本気で制作する人が、本気で教えるチームです。</p>
      <p class="features-wrap-item" v-observe="'inview'">私たちが目指すのは、<br>“実務に根づくBIM”。</p>
      <p class="features-wrap-item" v-observe="'inview'">技術力と伝える力、その両輪で現場に向き合い、<br>お客様に寄り添います。</p>
      <p class="features-wrap-item" v-observe="'inview'">ただ新しいだけのDXではなく、<br>変革の足元を照らし続けます。</p>
      <FormsButtonWhite2 name="More" link="/service#features" />
      <div class="feature__bg__wrapper1" style="z-index: 1;">
        <div class="feature__bg__wrapper__contents1">
          <img loading="lazy" src="/img/top/topFeatures-pt1.svg" alt="feature_bg" class="feature__container__pt1" v-observe="'inview'">
        </div>
      </div>
      <div class="feature__bg__wrapper2" style="z-index: 1;">
        <div class="feature__bg__wrapper__contents2" v-observe="'inview'">
          <img loading="lazy" src="/img/top/topFeatures-pt2.svg" alt="feature_bg" class="feature__container__pt2">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import scrollParallaxMixin from '@/mixins/scrollParallaxMixin';

export default {
  name: 'SpFeatures',
  mixins: [scrollParallaxMixin],
}
</script>

<style lang="scss" scoped>
.features {
  .connection {
    display: block;
    width: 100%;
    object-fit: cover;
    position: relative;
    z-index: 3;
  }
  .features-wrap {
    background-color: #85C1DE;
    color: #fff;
    padding: 10vw 8vw 20vw;
    position: relative;
    &-title {
      font-family: "Barlow Condensed", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 26.66vw;
      //letter-spacing: 0.01em;
      letter-spacing: 0.001em;
      position: relative;
      z-index: 2;
      opacity: 0;
      transform: translateY(10vw);
      transition: all 0.5s ease-in-out;
      &.inview {
        opacity: 1;
        transform: translateY(0);
      }
    }
    &-item {
      font-size: 4.8vw;
      line-height: 2.6;
      position: relative;
      z-index: 2;
      opacity: 0;
      transform: translateY(10vw);
      transition: all 0.5s ease-in-out;
      &.inview {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .feature__bg__wrapper1 {
      position: absolute;
      top: -10%;
      right: -5%;
      height: 100%;
      .feature__bg__wrapper__contents1 {
        margin-top: min(2.08vw, 30px);
        margin-left: min(2.77vw, 40px);
        transform: translate3d(0, var(--scroll-offset, 0px), 0);
        transition: transform 0.8s ease-out;
        will-change: transform;
        @include mixins.max-screen(768px) {
          margin-left: -3vw;
        }
        .feature__container__pt1 {
          width: min(14.65vw, 211px);
          transform: scale(0);
          transition: transform 0.5s ease-in-out;
          @include mixins.max-screen(768px) {
            width: 25.33vw;
          }
          &.inview {
            transform: scale(1);
          }
        }
      }
    }
    .feature__bg__wrapper2 {
      position: absolute;
      top: 50%;
      right: -20%;
      height: 100%;
      .feature__bg__wrapper__contents2 {
        transform: translate3d(0, var(--scroll-offset, 0px), 0);
        transition: transform 0.8s ease-out;
        will-change: transform;
        .feature__container__pt2 {
          width: min(14.65vw, 211px);
          transform: scale(0);
          transition: transform 0.5s ease-in-out;
          @include mixins.max-screen(768px) {
            width: 35.73vw;
          }
        }
        &.inview {
          .feature__container__pt2 {
            transform: scale(1);
          }
        }
      }
    }
  }

}

</style>