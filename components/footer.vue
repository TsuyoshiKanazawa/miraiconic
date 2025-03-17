<template>
  <footer class="footer" id="footer">
    <div class="footer__inner">
      <p>お問い合わせは下記メールアドレスにて<br class="sp-only">お願い申し上げます。</p>
      <p>
        <a href="mailto:info@miraconi.com">info@miraconi.com</a>
      </p>
    </div>
    <div class="footer__sns">
      <a href="https://www.instagram.com/miraiconic/" target="_blank">
        <img src="/img/insta.png" alt="Instagram">
      </a>
      <a href="https://x.com/MIRAICONIC" target="_blank">
        <img src="/img/x.png" alt="X">
      </a>
    </div>
    <div class="footer__copyright">
      <p>
        © 2025 MIRAICONIC
      </p>
    </div>
    <div class="footer__bg-container" :style="{ transform: 'translateY(' + parallaxOffset + 'px)' }">
      <img src="/img/fv-pt3.svg" alt="footer-bg" class="footer__bg1">
      <img src="/img/fv-pt1.svg" alt="footer-bg" class="footer__bg2">
      <img src="/img/fv-pt4.svg" alt="footer-bg" class="footer__bg3">
    </div>
  </footer>
</template>

<script>
import scrollParallaxMixin from '@/mixins/scrollParallaxMixin';
export default {
  name: 'Footer',
  mixins: [scrollParallaxMixin],
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #fff;
  width: 100%;
  height: min(30.55vw, 440px);
  border-top: 3px solid #252526;
  position: relative;
  overflow: hidden;
  @include mixins.max-screen(768px) {
    border-top: 2px solid #252526;
    height: auto;
    padding-bottom: 5vw;
  }
  &__inner {
    width: min(55.55vw, 800px);
    height: min(12.5vw, 180px);
    background-color: #F2F2F2;
    border-radius: min(2.08vw, 30px);
    margin: min(5.34vw, 77px) auto 0;
    text-align: center;
    padding: min(3.54vw, 51px);
    position: relative;
    z-index: 2;
    @include mixins.max-screen(768px) {
      width: 89.33vw;
      height: auto;
      padding: 8vw 7.13vw;
      margin: 20vw auto 0;
    }
    p {
      font-size: min(1.25vw, 18px);
      line-height: min(2.70vw, 39px);
      font-weight: 700;
      color: #252526;
      line-height: 1;
      margin-bottom: min(1.875vw, 27px);
      @include mixins.max-screen(768px) {
        font-size: 3.73vw;
        line-height: 1.6;
      }
      a {
        color: #252526;
        line-height: 1;
        font-size: min(3.47vw, 50px);
        font-family: 'DinCondensedBold', sans-serif;
        transition: opacity 0.1s ease-in-out;
        letter-spacing: 0.05em;
        font-weight: normal;
        @include mixins.max-screen(768px) {
          font-size: 8vw;
        }
        @include mixins.min-screen(769px) {
          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
  }
  &__sns {
    display: flex;
    justify-content: center;
    gap: min(1.38vw, 20px);
    margin-top: min(3.19vw, 46px);
    position: relative;
    z-index: 100;
    @include mixins.max-screen(768px) {
      margin-top: 25.86vw;
    }
    a {
      cursor: pointer;
      transition: opacity 0.1s ease-in-out;
      @include mixins.min-screen(769px) {
        &:hover {
          opacity: 0.7;
        }
      }
      img {
        height: min(3.19vw, 46px);
        @include mixins.max-screen(768px) {
          height: 12.26vw;
        }
      }
    }
  }
  &__copyright {
    text-align: center;
    margin-top: min(3.19vw, 46px);
    position: relative;
    z-index: 5;
    p {
      font-size: min(2.08vw, 30px);
      line-height: 1;
      font-weight: 700;
      color: #252526;
      letter-spacing: 0.01em;
      font-family: 'DinCondensedBold', sans-serif;
      font-weight: normal;
      @include mixins.max-screen(768px) {
        font-size: 5.33vw;
      }
    }
  }
  &__bg-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    transform: translateY(var(--scroll-offset, 0px));
    transition: transform 0.8s ease-out;
  }
  &__bg1 {
    width: min(19.58vw, 282px);
    transform: translateY(-50%);
    z-index: 1;
    margin-top: max(-2.08vw, -30px);
    margin-left: min(6.94vw, 100px);
    display: block;
    @include mixins.max-screen(768px) {
      width: 37.86vw;
      margin: 5vw -10vw 0 auto;
    }
  }
  &__bg2 {
    display: block;
    width: min(11.04vw, 159px);
    @include mixins.max-screen(768px) {
      width: 24.53vw;
    }
  }
  &__bg3 {
    display: block;
    width: min(43.05vw, 620px);
    margin-top: max(-45.13vw, -650px);
    margin-right: max(-3.47vw, -50px);
    margin-left: auto;
    @include mixins.max-screen(768px) {
      width: 42.4vw;
      margin-top: -30vw;
    }
  }
}
</style>
