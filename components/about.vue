<template>
  <section class="about">
    <img src="/img/about/aboutBg1.jpg" alt="aboutBg1" class="about_bg1">
    <div class="about__container" v-observe="'inview'">
      <div class="about__container__contents">
        <img src="/img/about/aboutLine.png" alt="line" class="about__contents__line">
        <div class="about__title__wrapper mask" v-observe="'inview'">
          <h2 class="about__title">About Us</h2>
        </div>
        <h3 class="about__title__sub" v-observe="'inview'">
          つなぐ、ミライへの<br>BIMエクスペリエンス
        </h3>
        <p class="about__text fade-enter-from" v-observe="'inview'">
          株式会社ミライコニックは、<br>
          BIMによる建設プロジェクトの革新をトータルにサポートいたします。<br>
          実務経験豊富なスタッフが、高品質なBIMモデルの構築および、<br>
          初心者から上級者までの教育を包括的に提供しています。<br>
          私たちは日々進化する技術をいち早く取り入れるだけでなく、その伝達方法にも工夫を凝らし、<br>
          DX推進を人々の心躍る体験と共に実現することで、建設業界の発展に寄与してまいります。<br>
          最新のテクノロジーと豊富な経験に基づくエンパシー（共感性）を融合させることで、<br>
          お客様に最適なBIMエクスペリエンスをお届けすることをお約束いたします。
        </p>
        <img src="/img/about/aboutPic.png" alt="about_img1" class="about__img1">
        <div class="about__img__text">
          代表取締役
          <br>
          <span>山口 晃</span>
        </div>
      </div>
      <div class="about__bg__wrapper" style="z-index: 11;">
        <div class="about__bg__wrapper__contents1" v-observe="'inview'">
          <img src="/img/about/about-pt1.png" alt="aboutBg3" class="about_pt1">
        </div>
      </div>
      <div class="about__bg__wrapper" style="z-index: 0;">
        <div class="about__bg__wrapper__contents2" v-observe="'inview'">
          <img src="/img/about/about-pt2.png" alt="aboutBg3" class="about_pt2">
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

    .about__container__contents {
      padding: min(2.5vw, 50px) 6vw;
      background-color: #fff;
      width: 88.9vw;
      margin: 0 0 0 auto;
      color: #252526;
      transform: translate(0, -3.47vw);
      position: relative;
      overflow: hidden;
      z-index: 10;
      .about__contents__line {
        position: absolute;
        top: -100%;
        left: 4vw;
        width: 1.08vw;
        max-width: 15.7px;
        transition: top 0.8s ease-in-out;
      }
      .about__title__wrapper {
        .about__title {
          font-family: 'DinCondensedBold', sans-serif;
          font-size: min(3.47vw, 50px);
          font-weight: bold;
          color: #252526;
          letter-spacing: 0.01em;
          display: block;
          transform: translateY(100%);
          transition: transform 0.8s ease-in-out;
        }
        &.inview {
          .about__title {
            transform: translateY(0);
          }
        }
      }
      .about__title__sub {
        font-size: min(4.03vw, 58px);
        font-weight: bold;
        letter-spacing: 0.03em;
        transform: translateY(30%);
        opacity: 0;
        transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
        &.inview {
          transform: translateY(0);
          opacity: 1;
        }
      }
      .about__text {
        font-size: min(1.04vw, 15px);
        font-weight: medium;
        color: #252526;
        line-height: 2.2;
        margin-top: 1.5vw;
        letter-spacing: 0.05em;
      }
      .about__img1 {
        position: absolute;
        bottom: 0;
        left: min(56vw, 790px);
        width: 15.76vw;
        max-width: 227px;
      }
      .about__img__text {
        position: absolute;
        bottom: 2%;
        left: min(73vw, 1030px);
        font-size: min(0.69vw, 10px);
        font-weight: medium;
        span {
          font-size: min(1.52vw, 22px);
        }
      }
    }
    &.inview {
        .about__contents__line {
          top: 0%;
        }
    }
  }
  .about__bg__wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateY(var(--scroll-offset, 0px));
    transition: transform 0.8s ease-in-out;
    &__contents1 {
      width: fit-content;
      transform: translateX(51%) rotate(180deg);
      margin-right: 0;
      margin-left: auto;
      margin-top: max(-250vw, -250px);
      transition: transform 0.8s ease-in-out;
      position: relative;
      .about_pt1 {
        width: 17.36vw;
        max-width: 250px;
        display: block;
        transition: transform 0.8s ease-in-out;
        position: relative;
        margin-right: 0;
        margin-left: auto;
        z-index: 2;
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

      .about_pt2 {
        width: 43.05vw;
        max-width: 620px;
        transition: transform 0.8s ease-in-out;
        position: relative;
        transform: translate(-90%, 90%);
      }
      &.inview {
        .about_pt2 {
          transform: translate(0, 0);
        }
      }
    }

  }
}
</style>
