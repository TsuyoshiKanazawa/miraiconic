<template>
  <section class="service">
    <div class="service__container">
      <div class="mask">
        <h2 class="service__title" v-observe="'inview'">Service</h2>
      </div>
      <img v-if="!useIsMobile().value" src="/img/titleLine.svg" alt="line" class="title_line">
      <img v-else src="/img/titleLine-sp.svg" alt="line" class="title_line">
      <div class="mask">
        <h3 class="service__title__sub" v-observe="'inview'">ミライコニックのサービス</h3>
      </div>
      <div class="service__container__contents">
        <div class="service__container__contents__item" v-observe="'inview'">
          <img src="/img/service/service1.jpg" alt="service1" class="service__container__contents__item__img">
          <div class="service__container__contents__item__text">
            <h4 class="service__container__contents__item__text__title" v-observe="'inview'">モデリング・ファミリ制作</h4>
            <p class="service__container__contents__item__text__text" v-observe="'inview'">
              高度な技術力を持つスペシャリストが、<br>
              プロジェクトにおけるBIM活用の目的に応じて最適なモデルや<br class="pc-only">ファミリを制作いたします。<br>
              統一された入力による整然としたモデリングや過不足のない<br class="pc-only">ファミリ設計で、実務でのベストプラクティスを実現します。
            </p>
          </div>
        </div>
        <div class="service__container__contents__item" v-observe="'inview'">
          <img v-if="useIsMobile().value" src="/img/service/service2.jpg" alt="service2" class="service__container__contents__item__img sp">
          <div class="service__container__contents__item__text">
            <h4 class="service__container__contents__item__text__title" v-observe="'inview'">ビジュアライゼーション制作</h4>
            <p class="service__container__contents__item__text__text" v-observe="'inview'">
              BIMモデルと連携したスピーディーなビジュアライゼーションを<br class="pc-only">制作し、合意形成をスムーズにサポートいたします。<br>
              静止画、パノラマ、動画、VRに加え、<br>
              特別なソフトウェア環境がなくても利用できる<br class="pc-only">ウォークスルーデータの納品も可能です。
            </p>
          </div>
          <img v-if="!useIsMobile().value" src="/img/service/service2.jpg" alt="service2" class="service__container__contents__item__img">
        </div>
        <div class="service__container__contents__item" v-observe="'inview'">
          <img src="/img/service/service3.jpg" alt="service3" class="service__container__contents__item__img">
          <div class="service__container__contents__item__text">
            <h4 class="service__container__contents__item__text__title" v-observe="'inview'">コンサルティング</h4>
            <p class="service__container__contents__item__text__text" v-observe="'inview'">
              BIM導入・活用に関する豊富な知見と実績を基に、<br class="pc-only">お客様の課題解決をサポートいたします。<br>
              最適なBIM戦略の策定から実際のテンプレート制作まで、<br class="pc-only">包括的にも部分的にも対応可能です。<br class="pc-only">実践的なアドバイスで、現場で使えるノウハウを提供いたします。
            </p>
          </div>
        </div>
        <div class="service__container__contents__item" v-observe="'inview'">
          <img v-if="useIsMobile().value" src="/img/service/service4.jpg" alt="service4" class="service__container__contents__item__img sp">
          <div class="service__container__contents__item__text">
            <h4 class="service__container__contents__item__text__title" v-observe="'inview'">教育支援</h4>
            <p class="service__container__contents__item__text__text" v-observe="'inview'">
              各社に合わせたBIM教育プログラムで人材育成を支援します。<br>
              基本から実践的なカリキュラム策定、教材制作、<br class="pc-only">リアルおよびオンラインによる講師対応をいたします。<br class="pc-only">さらに、プロジェクトに伴走する形でのマンツーマン講師も<br class="pc-only">承っております。
            </p>
          </div>
          <img v-if="!useIsMobile().value" src="/img/service/service4.jpg" alt="service4" class="service__container__contents__item__img">
        </div>
      </div>
      <div class="service__bg__wrapper1" style="z-index: 0;">
        <div class="service__bg__wrapper__contents1">
          <img src="/img/service/service-pt1.svg" alt="service-pt3" class="service__container__pt1" v-observe="'inview'">
        </div>
      </div>
      <div class="service__bg__wrapper2" style="z-index: 0;">
        <div class="service__bg__wrapper__contents2">
          <img src="/img/service/service-pt2.svg" alt="service-pt3" class="service__container__pt2" v-observe="'inview'">
        </div>
      </div>
      <div class="service__bg__wrapper3" style="z-index: 0;">
        <div class="service__bg__wrapper__contents3">
          <img src="/img/service/service-pt3.svg" alt="service-pt3" class="service__container__pt3" v-observe="'inview'">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import scrollParallaxMixin from '@/mixins/scrollParallaxMixin';
export default {
  name: 'Service',
  mixins: [scrollParallaxMixin],
}
</script>

<style lang="scss" scoped>
.service {
  background-color: #F2F2F2;
  color: #252526;
  @include mixins.max-screen(768px) {
    scroll-margin-top: 60px;
  }
  .service__container {
    padding-top: min(5vw, 72px);
    padding-bottom: min(9.58vw, 138px);
    position: relative;
    overflow: hidden;
    @include mixins.max-screen(768px) {
      padding-top: 10vw;
      padding-bottom: 15vw;
    }
    .service__title {
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
    .service__title__sub {
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
    .service__container__contents {
      margin-top: min(2.56vw, 37px);
      @include mixins.max-screen(768px) {
        margin-top: 11vw;
      }
      .service__container__contents__item {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 10;
        @include mixins.max-screen(768px) {
          display: block;
        }
        &__img {
          max-width: 640px;
          width: 44.44vw;
          height: 100%;
          object-fit: cover;
          border-radius: min(8.33vw, 120px);
          position: relative;
          transition: box-shadow .5s ease-in-out;
          transition-delay: .3s;
          @include mixins.max-screen(768px) {
            width: 92vw;
            max-width: none;
            height: auto;
            max-height: none;
            margin: 0 auto !important;
            border-radius: 10.66vw;
            display: block;
          }
          &:nth-child(odd) {
            z-index: 10;
          }
          &:nth-child(even) {
            z-index: 15;
          }
        }
        &__text {
          background-color: #fff;
          max-width: 800px;
          width: 55.55vw;
          max-height: 360px;
          height: 25vw;
          border-radius: min(8.33vw, 120px);
          margin-top: min(5.2vw, 75px);
          position: relative;
          z-index: 9;
          @include mixins.max-screen(768px) {
            width: 92vw;
            max-width: none;
            height: auto;
            max-height: none;
            padding: 29vw 4.86vw 7.46vw !important;
            margin: -24vw auto 8vw !important;
            line-height: 1.6;
          }
          &__title {
            font-size: min(2.5vw, 36px);
            letter-spacing: 0.03em;
            max-width: 510px;
            width: 35.41vw;
            transform: translateY(min(3.47vw, 50px));
            transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
            opacity: 0;
            @include mixins.max-screen(768px) {
              font-size: 5.86vw;
              width: auto;
            }
            &.inview {
              opacity: 1;
              transform: translateY(0);
            }
          }
          &__text {
            font-size: min(1.04vw, 15px);
            margin-top: min(1.11vw, 16px);
            font-weight: 500;
            letter-spacing: 0.05em;
            max-width: 510px;
            width: 35.41vw;
            line-height: 1.8;
            transform: translateY(min(3.47vw, 50px));
            transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
            opacity: 0;
            @include mixins.max-screen(768px) {
              font-size: 3.73vw;
              width: auto;
            }
            &.inview {
              opacity: 1;
              transform: translateY(0);
            }
          }
          &:nth-child(even) {
            padding: min(5.69vw, 82px) min(2.5vw, 37px) min(2.5vw, 37px) min(15.27vw, 220px);
            margin-left: max(-11.11vw, -160px);
          }
          &:nth-child(odd) {
            padding: min(5.69vw, 82px) min(15.27vw, 169px) min(2.5vw, 37px) min(2.5vw, 37px);
            margin-right: max(-11.11vw, -160px);
            p, h4 {
              margin-left: min(5.55vw, 80px);
            }
          }
          &.inview {
            p, h4 {
              transform: translateY(0);
              opacity: 1;
            }
          }
        }
        &.inview {
          .service__container__contents__item__img {
            &:nth-child(odd) {
              box-shadow: max(-0.69vw, -10px) max(-0.69vw, -10px) 0px 0px #85C1DE;
              @include mixins.max-screen(768px) {
                box-shadow: -1.33vw -1.33vw 0px 0px #85C1DE;
                &.sp {
                  box-shadow: 1.33vw 1.33vw 0px 0px #3676B6;
                }
              }
            }
            &:nth-child(even) {
              box-shadow: min(0.69vw, 10px) max(-0.69vw, -10px) 0px 0px #3676B6;
            }
          }
        }
      }
    }
    .service__bg__wrapper1 {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      z-index: 10;
      .service__bg__wrapper__contents1 {
        margin-top: min(41.66vw, 600px);
        margin-left: max(-3.47vw, -50px);
        transform: translateY(var(--scroll-offset, 0px));
        transition: transform 0.8s ease-out;
        @include mixins.max-screen(768px) {
          margin-top: 120vw;
        }
        .service__container__pt1 {
          width: min(11.31vw, 163px);
          transform: rotate(-16.03deg) scale(0);
          transition: transform 0.5s ease-in-out;
          @include mixins.max-screen(768px) {
            width: 24vw;
          }
          &.inview {
            transform: rotate(-16.03deg) scale(1);
          }
        }
      }
    }
    .service__bg__wrapper2 {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      z-index: 10;
      .service__bg__wrapper__contents2 {
        margin-top: min(76.38vw, 1100px);
        transform: translateY(var(--scroll-offset, 0px));
        transition: transform 0.8s ease-out;
        @include mixins.max-screen(768px) {
          margin-top: 350vw;
        }
        .service__container__pt2 {
          width: min(8.88vw, 128px);
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
    .service__bg__wrapper3 {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      z-index: 10;
      .service__bg__wrapper__contents3 {
        margin-top: min(118.05vw, 1700px);
        transform: translateY(var(--scroll-offset, 0px));
        transition: transform 0.8s ease-out;
        @include mixins.max-screen(768px) {
          margin-top: 450vw;
        }
        .service__container__pt3 {
          width: min(97.22vw, 89px);
          transform: rotate(30.32deg) scale(0);
          transition: transform 0.5s ease-in-out;
          @include mixins.max-screen(768px) {
            width: 14.66vw;
          }
          &.inview {
            transform: rotate(30.32deg) scale(1);
          }
        }
      }
    }
  }
}
</style>
