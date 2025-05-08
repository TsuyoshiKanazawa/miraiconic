<template>
  <section class="about">
    <FormsTop title="ABOUT" subTitle="会社概要" />
    
    <div class="about__container" v-observe="'inview'">
      <img src="/img/about/aboutBg1.jpg" alt="aboutBg1" class="about_bg1">
      <div class="about__container__message">
        <div class="mask">
          <h2 class="about__title" v-observe="'inview'">Message</h2>
        </div>
        <img v-if="!useIsMobile().value" src="/img/titleLine.svg" alt="line" class="title_line">
        <img v-else src="/img/titleLine-sp.svg" alt="line" class="title_line">
        <div class="mask">
          <h2 class="about__title__sub" v-observe="'inview'">メッセージ</h2>
        </div>
        <p class="about__text fade-enter-from" v-observe="'inview'">
          株式会社ミライコニックは、<br>
          BIMによる建設プロジェクトの革新を<br class="sp-only">トータルにサポートいたします。<br>
          実務経験豊富なスタッフが、<br class="sp-only">高品質なBIMモデルの構築および、<br>
          初心者から上級者までの教育を包括的に<br class="sp-only">提供しています。<br>
          私たちは日々進化する技術を<br class="sp-only">いち早く取り入れるだけでなく、<br class="sp-only">その伝達方法にも工夫を凝らし、<br>
          DX推進を人々の心躍る体験と共に<br class="sp-only">実現することで、<br class="sp-only">建設業界の発展に寄与してまいります。<br>
          最新のテクノロジーと豊富な経験に基づく<br class="sp-only">エンパシー（共感性）を融合させることで、<br>
          お客様に最適なBIMエクスペリエンスを<br class="sp-only">お届けすることをお約束いたします。
        </p>
        <img src="/img/about/aboutPic.png" alt="Yamaguchi's photo" class="about__img1">
        <div class="about__img__text">
          代表取締役
          <br>
          <span>山口 晃</span>
        </div>
      </div>
      <div class="about__bg__wrapper" style="z-index: 11;">
        <div class="about__bg__wrapper__contents1" v-observe="'inview'">
          <img src="/img/about/about-pt1.svg" alt="aboutBg1" class="about_pt1">
        </div>
      </div>
      <div class="about__bg__wrapper" style="z-index: 0;">
        <div class="about__bg__wrapper__contents2" v-observe="'inview'">
          <img src="/img/about/about-pt2.svg" alt="aboutBg2" class="about_pt2">
        </div>
      </div>
    </div>
    <div class="about__container__grey">
      <div class="about__container__mission">
        <div class="mask">
          <h2 class="about__title" v-observe="'inview'">Mission</h2>
        </div>
        <img v-if="!useIsMobile().value" src="/img/titleLine.svg" alt="line" class="title_line">
        <img v-else src="/img/titleLine-sp.svg" alt="line" class="title_line">
        <div class="mask">
          <h2 class="about__title__sub" v-observe="'inview'">ミッション</h2>
        </div>
        <div class="about__container__mission__contents">
          <div class="about__container__mission__contents__item">
            <h3 class="about__container__mission__contents__item__title" v-observe="'inview'">
              ひとつ先、<br class="sp-only">その先の未来を見据える
            </h3>
            <p class="about__container__mission__contents__item__text" v-observe="'inview'">
              私たちは、目の前の課題解決にとどまらず、<br>
              常にその延長線上にある未来を<br class="sp-only">見据えた選択を行えるよう、<br class="sp-only">情報収集やアイデア創出に努めています。​
            </p>
          </div>
          <div class="about__container__mission__contents__item">
            <h3 class="about__container__mission__contents__item__title" v-observe="'inview'">
              デジタルという<br class="sp-only">“素材”を加工する
            </h3>
            <p class="about__container__mission__contents__item__text" v-observe="'inview'">
              私たちは、時代の変化を敏感に捉え、<br class="sp-only">いち早くDX技術を“素材”として受け入れ、​<br>
              それを人々が使いやすい“道具”へと<br class="sp-only">磨き上げることに全力を注いでいます。
            </p>
          </div>
          <div class="about__container__mission__contents__item">
            <h3 class="about__container__mission__contents__item__title" v-observe="'inview'">
              伝統に敬意を払い、<br class="sp-only">革新に向かう​
            </h3>
            <p class="about__container__mission__contents__item__text" v-observe="'inview'">
              DXによって生まれた余裕は、<br class="sp-only">人々のやりがいや豊かさにつながる領域へ<br class="sp-only">置き換えることが重要です。<br>
              そのためには、ものづくりのルーツを、<br class="sp-only">技術革新と同じ熱量で深堀りすることが<br class="sp-only">必要と考えています。
            </p>
          </div>
        </div>
        <img v-if="!useIsMobile().value" src="/img/about/missionbg.jpg" alt="about-mission-bg" class="about__container__mission__bg">
        <img v-else src="/img/about/missionbg-sp.jpg" alt="about-mission-bg" class="about__container__mission__bg">
      </div>
      <div class="about__container__profile">
        <Profile />
      </div>
      <div class="about__bg__wrapper pt3">
        <div class="about__bg__wrapper__contents3" v-observe="'inview'">
          <img src="/img/about/about-pt3.svg" alt="aboutBg3" class="about_pt3">
        </div>
      </div>
      <div class="about__bg__wrapper">
        <div class="about__bg__wrapper__contents4" v-observe="'inview'">
          <img src="/img/about/about-pt4.svg" alt="aboutBg4" class="about_pt4">
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
  color: #252526;

  .about__container {
    background-image: url('/img/about/aboutBg2.jpg');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    padding-bottom: min(3.47vw, 50px);
    position: relative;
    overflow: hidden;
    @include mixins.max-screen(768px) {
      background-image: url('/img/about/aboutBg2-sp.jpg');
    }
    .about_bg1 {
      width: 100%;
      display: block;
    }
    .about__container__message {
      padding: min(2.5vw, 50px) min(5.55vw, 80px);
      background-color: #fff;
      width: min(79vw, 1310px);
      margin: 0 0 0 auto;
      color: #252526;
      transform: translate(0, -3.47vw);
      position: relative;
      z-index: 10;
      @include mixins.min-screen(784px) {
        margin: 0 auto;
        
        &::after {
          content: '';
          display: block;
          width: calc((100vw - 783px) / 2);
          height: 100%;
          background-color: #fff;
          position: absolute;
          top: 0;
          right: calc((783px - 100vw) / 2);
          z-index: 10;
        }
      }
      @include mixins.max-screen(783px) {
        width: 94.66vw;
        padding: 8vw 0 0 0;
      }
      .about__title {
        font-size: min(5.55vw, 80px);
        text-align: center;
        letter-spacing: 0.01em;
        font-family: 'DinCondensedBold', sans-serif;
        font-weight: normal;
        transform: translateY(100%);
        transition: transform 0.8s ease-in-out;
        &.inview {
          transform: translateY(0);
        }
        @include mixins.max-screen(768px) {
          font-size: 16vw;
        }
      }
      .title_line {
        display: block;
        width: 6.25vw;
        max-width: 90px;
        margin: 0 auto;
        @include mixins.max-screen(768px) {
          width: 23.46vw;
          max-width: auto;
        }
      }
      .about__title__sub {
        font-size: min(1.25vw, 18px);
        text-align: center;
        letter-spacing: 0.03em;
        margin-top: min(1.25vw, 18px);
        transform: translateY(100%);
        transition: transform 0.8s ease-in-out;
        @include mixins.max-screen(768px) {
          font-size: 4.26vw;
        }
        &.inview {
          transform: translateY(0);
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
        left: min(52.08vw, 750px);
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
        left: min(69.44vw, 1000px);
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
    .about__bg__wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: translate3d(0, var(--scroll-offset), 0);
      transition: transform 0.8s ease-out;
      &__contents1 {
        width: fit-content;
        transform: translateX(51%) rotate(180deg);
        margin-right: 0;
        margin-left: auto;
        margin-top: 5vw;
        transition: transform 0.8s ease-in-out;
        position: relative;
        @include mixins.max-screen(768px) {
          margin-top: 0;
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
        margin-top: 10vw;
        @include mixins.max-screen(768px) {
          margin-top: 150vw;
          margin-left: -30vw;
        }
        .about_pt2 {
          width: 43.05vw;
          max-width: 620px;
          transition: transform 0.8s ease-in-out;
          position: relative;
          transform: translate(-90%, 90%);
          @include mixins.max-screen(768px) {
            width: 100vw;
            max-width: auto;  
          }
        }
        &.inview {
          .about_pt2 {
            transform: translate(0, 0);
          }
        }
      }

    }
  }
  .about__container__grey {
    background-color: #F2F2F2;
    padding: min(4.86vw, 70px) 0 0;
    position: relative;
    z-index: 10;
    overflow: hidden;
    .about__title {
      font-size: min(5.55vw, 80px);
      text-align: center;
      letter-spacing: 0.01em;
      font-family: 'DinCondensedBold', sans-serif;
      font-weight: normal;
      transform: translateY(100%);
      transition: transform 0.8s ease-in-out;
      &.inview {
        transform: translateY(0);
      }
      @include mixins.max-screen(768px) {
        font-size: 16vw;
      }
    }
    .title_line {
      display: block;
      width: 6.25vw;
      max-width: 90px;
      margin: 0 auto;
      @include mixins.max-screen(768px) {
        width: 23.46vw;
        max-width: auto;
      }
    }
    .about__title__sub {
      font-size: min(1.25vw, 18px);
      text-align: center;
      letter-spacing: 0.03em;
      margin-top: min(1.25vw, 18px);
      transform: translateY(100%);
      transition: transform 0.8s ease-in-out;
      @include mixins.max-screen(768px) {
        font-size: 4.26vw;
      }
      &.inview {
        transform: translateY(0);
      }
    }
    .about__container__mission {
      padding: min(5.83vw, 84px) 6vw;
      background-color: #fff;
      width: min(88.19vw, 1270px);
      margin: 0 auto;
      padding-bottom: min(22.22vw, 320px);
      border-radius: 8.33vw;
      overflow: hidden;
      position: relative;
      z-index: 11;
      @include mixins.max-screen(768px) {
        width: 92vw;
        padding: 7vw 2vw 37.33vw;
      }
      .about__container__mission__contents {
        text-align: center;
        margin-top: min(4.44vw, 64px);
        @include mixins.max-screen(768px) {
          margin-top: 9.33vw;
        }
        .about__container__mission__contents__item {
          width: auto;
          padding: 0 2.5vw;
          .about__container__mission__contents__item__title {
            font-size: min(3.61vw, 52px);
            font-weight: 700;
            letter-spacing: 0.03em;
            transform: translateY(100%);
            transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
            opacity: 0;
            &.inview {
              transform: translateY(0);
              opacity: 1;
            }
            @include mixins.max-screen(768px) {
              font-size: 6.93vw;
              transform: translateY(50%);
            }
          }
          .about__container__mission__contents__item__text {
            font-size: min(1.25vw, 18px);
            font-weight: 500;
            line-height: 2.2;
            letter-spacing: 0.05em;
            margin-top: 1.5vw;
            margin-bottom: min(5.06vw, 73px);
            transform: translateY(100%);
            transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
            opacity: 0;
            &.inview {
              transform: translateY(0);
              opacity: 1;
            }
            @include mixins.max-screen(768px) {
              font-size: 3.73vw;
              margin-bottom: 13.33vw;
              transform: translateY(35%);
            }
          }
        }
      }
      .about__container__mission__bg {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        object-fit: cover;
      }
    }
    .about__container__profile {
      margin-top: min(5.55vw, 80px);
    }
    .about__bg__wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      transform: translate3d(0, var(--scroll-offset), 0);
      transition: transform 0.8s ease-out;
      z-index: 10;
      &.pt3 {
        left: auto;
        right: 12%;
        @include mixins.max-screen(768px) {
          right: 18%;
        }
      }
      &__contents3 {
        width: fit-content;
        transform: scale(0.1);
        margin-top: 5vw;
        transition: transform 0.8s ease-in-out;
        position: relative;
        @include mixins.max-screen(768px) {
          margin-top: 0;
        }
        .about_pt3 {
          width: min(53.6vw, 201px);
          display: block;
          transition: transform 0.8s ease-in-out;
          position: relative;
          margin-right: 0;
          margin-left: auto;
          z-index: 2;
          @include mixins.max-screen(768px) {
            width: 26.66vw;
          }
        }
        &.inview {
          transform: scale(1);
        }
      }
      &__contents4 {
        width: fit-content;
        transform: scale(0);
        margin-right: auto;
        margin-left: 3vw;
        margin-top: 80vw;
        transition: transform 0.8s ease-in-out;
        position: relative;
        @include mixins.max-screen(768px) {
          margin-top: 275vw;
          margin-left: 0;
        }
        .about_pt4 {
          width: min(57.86vw, 217px);
          display: block;
          transition: transform 0.8s ease-in-out;
          position: relative;
          margin-right: 0;
          margin-left: auto;
          z-index: 12;
          @include mixins.max-screen(768px) {
            width: 20.8vw;
          }
        }
        &.inview {
          transform: scale(1);
        }
      }

    }
  }

}
</style>
