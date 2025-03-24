<template>
  <section class="features">
    <div class="features__container">
      <div class="mask">
        <h3 class="features__title" v-observe="'inview'">Features</h3>
      </div>
      <img v-if="!useIsMobile().value" src="/img/titleLine.svg" alt="line" class="title_line">
      <img v-else src="/img/titleLine-sp.svg" alt="line" class="title_line">
      <div class="mask">
        <h3 class="features__title__sub" v-observe="'inview'">ミライコニックの特徴</h3>
      </div>
      <div class="features__container__experience">
        <div class="features__container__experience__wrapper">
          <h3 class="features__container__experience__title" v-observe="'inview'">
            制作と教育<br class="sp-only"> 双方向のスキルを活かした<br class="sp-only">特別な体験
          </h3>
          <p class="features__container__experience__text" v-observe="'inview'">
            当社のBIMエンジニアは、<br class="sp-only">実制作のスペシャリストであると同時に、<br class="sp-only">教育分野でも高い評価を受けています。<br>
            それぞれのスキルをインタラクティブに<br class="sp-only">接続することで以下のような<br class="sp-only">サービス提供をいたします。
          </p>
          <div class="features__container__experience__container">
            <div class="features__container__experience__container__item">
              <div class="features__container__experience__container__item__container">
                <img src="/img/features/experience1.jpg" alt="experience" class="features__container__experience__container__item__container__img" v-observe="'inview'">
                <h4 class="features__container__experience__container__item__container__title" v-observe="'inview'">
                  【制作のシーン】
                </h4>
                <p class="features__container__experience__container__item__container__text" v-observe="'inview'">
                  講師業で培った明快な説明と、教材作成スキルを活かした<br class="pc-only">わかりやすい資料作成によって、<br class="sp-only">透明性のある業務報告を行います。
                </p>
              </div>
            </div>
            <svg class="features__container__experience__container__svg" width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1.41406" width="120" height="2" rx="1" transform="rotate(45 1.41406 0)" fill="#252526"/>
              <rect y="84.853" width="120" height="2" rx="1" transform="rotate(-45 0 84.853)" fill="#252526"/>
            </svg>
            <div class="features__container__experience__container__item margin">
              <div class="features__container__experience__container__item__container">
                <img src="/img/features/experience2.jpg" alt="experience" class="features__container__experience__container__item__container__img" v-observe="'inview'">
                <h4 class="features__container__experience__container__item__container__title" v-observe="'inview'">
                  【教育のシーン】
                </h4>
                <p class="features__container__experience__container__item__container__text" v-observe="'inview'">
                  実案件における事例や実利的な機能の<br class="sp-only">紹介など、<br class="pc-only">豊富な制作経験を活かした<br class="sp-only">トレーニングを行います。
                </p>
              </div>
            </div>
          </div>
          <div class="features__container__experience__container__hr" />
          <p class="features__container__experience__container__bottomText" v-observe="'inview'">
            実案件でよく起こる課題を<br class="sp-only">高い鮮度のまま教育にフィードバックし、<br class="sp-only">ナレッジを最大限に活用します。​<br>
            また、プロジェクトに伴走する<br class="sp-only">マンツーマン講師を行いつつ、<br class="sp-only">複雑な部分は制作を担当することが可能です。​​<br>
            これにより、BIM案件に不慣れな<br class="sp-only">ご担当者様でも安心してBIMモデルを扱えるよう<br class="sp-only">サポートいたします。
          </p>
        </div>
      </div>
      <div class="features__container__responsive">
        <div class="features__container__responsive__wrapper">
          <h3 class="features__container__responsive__title" v-observe="'inview'">
            建築からインテリア<br class="sp-only">多様な業種やフェーズまで<br class="sp-only">幅広く対応
          </h3>
          <p class="features__container__responsive__text" v-observe="'inview'">
            当社のBIMエンジニアは、ゼネコン様や<br class="sp-only">内装デザイン会社様でのBIM推進による<br class="sp-only">豊富な経験を財産としております。​<br>
            一定の方針に定まらないBIM案件でも、<br class="sp-only">本質的な解決策を数多く用意し、<br class="sp-only">お客様に寄り添ったサービスを提供いたします。
          </p>
          <div class="features__container__responsive__container">
            <div class="features__container__responsive__container__item">
              <div class="features__container__responsive__container__item__container">
                <img src="/img/features/responsive1.jpg" alt="responsive" class="features__container__responsive__container__item__container__img" v-observe="'inview'">
                <h4 class="features__container__responsive__container__item__container__title" v-observe="'inview'">
                  【建築設計】
                </h4>
                <p class="features__container__responsive__container__item__container__text" v-observe="'inview'">
                  構造体ごとの特性を的確に捉えた<br class="sp-only">制作を実現します。​​<br>
                  また、意匠・構造・設備・電気の各設計、<br class="sp-only">および企画から実施、​​<br>
                  施工から維持管理まで様々な<br class="sp-only">フェーズに対応します。
                </p>
              </div>
            </div>
            <svg class="features__container__responsive__container__svg" width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1.41406" width="120" height="2" rx="1" transform="rotate(45 1.41406 0)" fill="#252526"/>
              <rect y="84.853" width="120" height="2" rx="1" transform="rotate(-45 0 84.853)" fill="#252526"/>
            </svg>
            <div class="features__container__responsive__container__item">
              <div class="features__container__responsive__container__item__container">
                <img src="/img/features/responsive2.jpg" alt="responsive" class="features__container__responsive__container__item__container__img" v-observe="'inview'">
                <h4 class="features__container__responsive__container__item__container__title" v-observe="'inview'">
                  【インテリア設計】
                </h4>
                <p class="features__container__responsive__container__item__container__text" v-observe="'inview'" >
                  建築工事から引き継いだ<br class="sp-only">BIMモデルの最適な運用方法や、​<br>
                  既存部分と業務範囲に対して<br class="sp-only">無駄のない制作を行います。​<br>
                  また、アプリケーション間の連携にも<br class="sp-only">柔軟に対応します。​
                </p>
              </div>
            </div>
          </div>
          <div class="features__container__responsive__container__hr" />
          <p class="features__container__responsive__container__bottomText" v-observe="'inview'">
            BIM案件を進める上では、<br class="sp-only">理念と実態のバランスをとり、<br class="sp-only">実務で使えることを第一にサポートいたします。​<br>
            様々な業種やフェーズでの経験に基づく<br class="sp-only">確かな状況判断で、​<br>
            詳細度のコントロールや自動化が難しい<br class="sp-only">修正・変更業務にも的確に対応します。
          </p>
        </div>
      </div>
      <div class="features__bg__wrapper1" style="z-index: 1;">
        <div class="features__bg__wrapper__contents1">
          <img src="/img/service/service-pt1.svg" alt="features-pt3" class="features__container__pt1" v-observe="'inview'">
        </div>
      </div>
      <div class="features__bg__wrapper2" style="z-index: 1;">
        <div class="features__bg__wrapper__contents2">
          <img src="/img/service/service-pt2.svg" alt="features-pt2" class="features__container__pt2" v-observe="'inview'">
        </div>
      </div>
      <div class="features__bg__wrapper3" style="z-index: 1;">
        <div class="features__bg__wrapper__contents3">
          <img src="/img/about/about-pt2.svg" alt="features-pt3" class="features__container__pt3" v-observe="'inview'">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import scrollParallaxMixin from '@/mixins/scrollParallaxMixin';
export default {
  name: 'Features',
  mixins: [scrollParallaxMixin],
}
</script>

<style lang="scss" scoped>
.features {
  padding-top: 5.55vw;
  padding-bottom: min(9.58vw, 138px);
  position: relative;
  overflow-x: hidden;
  &__title {
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
  &__title__sub {
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
  &__container__experience {
    background-color: #D9D9D9;
    margin-top: min(4.02vw, 58px);
    padding-bottom: min(4.44vw, 64px);
    width: min(94.44vw, 1360px);
    border-top-right-radius: min(8.33vw, 120px);
    border-bottom-right-radius: min(8.33vw, 120px);
    position: relative;
    z-index: 10;
    @include mixins.min-screen(1441px) {
      margin-left: calc((100vw - 1440px) / 2);
      &::after {
        content: '';
        display: block;
        width: calc((100vw - 1440px) / 2);
        height: 100%;
        background-color: #D9D9D9;
        position: absolute;
        top: 0;
        left: calc((1440px - 100vw) / 2);
      }
    }
    @include mixins.max-screen(768px) {
      width: 96vw;
      border-top-right-radius: 10.66vw;
      border-bottom-right-radius: 10.66vw;
      padding-bottom: 15vw;
      margin-top: 9vw;
    }
    &__wrapper {
      width: min(78.88vw, 1136px);
      margin-left: auto;
      margin-right: min(5.55vw, 80px);
      @include mixins.max-screen(768px) {
        width: 88vw;
        margin: 0 auto;
      }
    }
    &__title {
      font-size: min(2.22vw, 32px);
      text-align: center;
      letter-spacing: 0.03em;
      padding-top: min(4.72vw, 68px);
      transform: translateY(50%);
      transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
      opacity: 0;
      @include mixins.max-screen(768px) {
        font-size: 5.86vw;
        line-height: 1.5;
        padding-top: 10.66vw;
        transform: translateY(10vw);
      }
      &.inview {
        transform: translateY(0);
        opacity: 1;
      }
    }
    &__text {
      font-size: min(1.04vw, 15px);
      text-align: center;
      letter-spacing: 0.05em;
      margin-top: min(1.25vw, 18px);
      line-height: 1.8;
      transform: translateY(50%);
      transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
      opacity: 0;
      font-weight: 500;
      @include mixins.max-screen(768px) {
        font-size: 3.73vw;
        line-height: 1.6;
        margin-top: 3vw;
        font-weight: 500;
        transform: translateY(10vw);
      }
      &.inview {
        transform: translateY(0);
        opacity: 1;
      }
    }
    &__container {
      display: flex;
      justify-content: center;
      gap: min(11.11vw, 160px);
      margin-top: min(2.08vw, 30px);
      position: relative;
      @include mixins.max-screen(768px) {
        display: block;
        margin-top: 5.66vw;
      }
      &__svg {
        position: absolute;
        top: min(10.41vw, 150px);
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 87px;
        width: 6.04vw;
        @include mixins.max-screen(768px) {
          position: static;
          transform: none;
          width: 19.2vw;
          max-width: none;
          display: block;
          margin: 5.33vw auto;
        }
      }
      &__item {
        &__container {
          &__img {
            max-width: 480px;
            width: 33.33vw;
            border-radius: min(0.69vw, 10px);
            transition: box-shadow 0.5s ease-in-out;
            transition-delay: 1s;
            @include mixins.max-screen(768px) {
              max-width: none;
              width: 88vw;
              border-radius: 2.66vw;
            }
            &.inview {
              box-shadow: max(0.34vw, 5px) max(0.34vw, 5px) 0px 0px #85C1DE;
              @include mixins.max-screen(768px) {
                box-shadow: 1.33vw 1.33vw 0px 0px #85C1DE;
              }
            }
          }
          &__title {
            font-size: min(1.66vw, 24px);
            text-align: center;
            letter-spacing: 0.03em;
            margin-top: min(1.25vw, 18px);
            transform: translateY(50%);
            transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
            opacity: 0;
            @include mixins.max-screen(768px) {
              font-size: 4.8vw;
              margin-top: 3vw;
            }
            &.inview {
              transform: translateY(0);
              opacity: 1;
            }
          }
          &__text {
            font-size: min(1.04vw, 15px);
            text-align: center;
            letter-spacing: 0.03em;
            margin-top: min(0.69vw, 10px);
            transform: translateY(50%);
            transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
            opacity: 0;
            font-weight: 500;
            @include mixins.max-screen(768px) {
              font-size: 3.73vw;
              font-weight: 500;
              margin-top: 1.33vw;
            }
            &.inview {
              transform: translateY(0);
              opacity: 1;
            }
          }
        }
      }
      &__hr {
        width: min(77.77vw, 1120px);
        height: 1px;
        background-color: #252526;
        margin: min(2.08vw, 30px) auto;
        @include mixins.max-screen(768px) {
          width: 100%;
          height: 2px;
          margin: 5.33vw auto;
        }
      }
      &__bottomText {
        font-size: min(1.04vw, 15px);
        text-align: center;
        letter-spacing: 0.03em;
        margin-top: min(1.25vw, 18px);
        transform: translateY(50%);
        transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
        opacity: 0;
        font-weight: 500;
        @include mixins.max-screen(768px) {
          font-size: 3.73vw;
          transform: translateY(10vw);
        }
        &.inview {
          transform: translateY(0);
          opacity: 1;
        }
      }
    }
  }
  &__container__responsive {
    background-color: #D9D9D9;
    margin-top: min(4.02vw, 58px);
    padding-bottom: min(4.44vw, 64px);
    width: min(94.44vw, 1360px);
    margin-right: 0;
    margin-left: auto;
    border-top-left-radius: min(8.33vw, 120px);
    border-bottom-left-radius: min(8.33vw, 120px);
    position: relative;
    z-index: 10;
    @include mixins.min-screen(1441px) {
      margin-right: calc((100vw - 1440px) / 2);
      &::after {
        content: '';
        display: block;
        width: calc((100vw - 1440px) / 2);
        height: 100%;
        background-color: #D9D9D9;
        position: absolute;
        top: 0;
        right: calc((1440px - 100vw) / 2);
      }
    }
    @include mixins.max-screen(768px) {
      width: 96vw;
      border-top-left-radius: 10.66vw;
      border-bottom-left-radius: 10.66vw;
      padding-bottom: 15vw;
    }
    &__wrapper {
      width: min(78.88vw, 1136px);
      margin-left: min(5.55vw, 80px);
      margin-right: auto;
      @include mixins.max-screen(768px) {
        width: 88vw;
        margin: 0 auto;
      }
    }
    &__title {
      font-size: min(2.22vw, 32px);
      text-align: center;
      letter-spacing: 0.03em;
      padding-top: min(4.72vw, 68px);
      transform: translateY(50%);
      transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
      opacity: 0;
      @include mixins.max-screen(768px) {
        font-size: 5.86vw;
        line-height: 1.5;
        padding-top: 10.66vw;
        transform: translateY(10vw);
      }
      &.inview {
        transform: translateY(0);
        opacity: 1;
      }
    }
    &__text {
      font-size: min(1.04vw, 15px);
      text-align: center;
      letter-spacing: 0.05em;
      margin-top: min(1.25vw, 18px);
      line-height: 1.8;
      transform: translateY(50%);
      transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
      opacity: 0;
      font-weight: 500;
      @include mixins.max-screen(768px) {
        font-size: 3.73vw;
        line-height: 1.6;
        margin-top: 3vw;
        font-weight: 500;
        transform: translateY(10vw);
      }
      &.inview {
        transform: translateY(0);
        opacity: 1;
      }
    }
    &__container {
      display: flex;
      justify-content: center;
      gap: min(11.11vw, 160px);
      margin-top: min(2.08vw, 30px);
      position: relative;
      @include mixins.max-screen(768px) {
        display: block;
        margin-top: 5.66vw;
      }
      &__svg {
        position: absolute;
        top: min(10.41vw, 150px);
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 87px;
        width: 6.04vw;
        @include mixins.max-screen(768px) {
          position: static;
          transform: none;
          width: 19.2vw;
          max-width: none;
          display: block;
          margin: 5.33vw auto;
        }
      }
      &__item {
        &__container {
          &__img {
            max-width: 480px;
            width: 33.33vw;
            border-radius: min(0.69vw, 10px);
            transition: box-shadow 0.5s ease-in-out;
            transition-delay: 1s;
            @include mixins.max-screen(768px) {
              max-width: none;
              width: 88vw;
              border-radius: 2.66vw;
            }
            &.inview {
              box-shadow: max(0.34vw, 5px) max(0.34vw, 5px) 0px 0px #85C1DE;
            }
          }
          &__title {
            font-size: min(1.66vw, 24px);
            text-align: center;
            letter-spacing: 0.03em;
            margin-top: min(1.25vw, 18px);
            transform: translateY(50%);
            transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
            opacity: 0;
            @include mixins.max-screen(768px) {
              font-size: 4.8vw;
              margin-top: 3vw;
              transform: translateY(10vw);
            }
            &.inview {
              transform: translateY(0);
              opacity: 1;
            }
          }
          &__text {
            font-size: min(1.04vw, 15px);
            text-align: center;
            letter-spacing: 0.03em;
            margin-top: min(0.69vw, 10px);
            transform: translateY(50%);
            transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
            opacity: 0;
            font-weight: 500;
            @include mixins.max-screen(768px) {
              font-size: 3.73vw;
              font-weight: 500;
              margin-top: 1.33vw;
              transform: translateY(10vw);
            }
            &.inview {
              transform: translateY(0);
              opacity: 1;
            }
          }
        }
      }
      &__hr {
        width: min(77.77vw, 1120px);
        height: 1px;
        background-color: #252526;
        margin: min(2.08vw, 30px) auto;
        @include mixins.max-screen(768px) {
          width: 100%;
          height: 2px;
          margin: 5.33vw auto;
        }
      }
      &__bottomText {
        font-size: min(1.04vw, 15px);
        text-align: center;
        letter-spacing: 0.03em;
        margin-top: min(1.25vw, 18px);
        transform: translateY(50%);
        transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
        opacity: 0;
        font-weight: 500;
        @include mixins.max-screen(768px) {
          font-size: 3.73vw;
          transform: translateY(10vw);
        }
        &.inview {
          transform: translateY(0);
          opacity: 1;
        }
      }
    }
  }
  .features__bg__wrapper1 {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    .features__bg__wrapper__contents1 {
      margin-top: max(-6.94vw, -100px);
      margin-right: max(-6.25vw, -90px);
      transform: translateY(var(--scroll-offset, 0px));
      transition: transform 0.8s ease-out;
      @include mixins.max-screen(768px) {
        margin-top: 20vw;
        margin-right: -12.5vw;
      }
      .features__container__pt1 {
        width: min(15.9vw, 229px);
        transform: scale(0);
        transition: transform 0.5s ease-in-out;
        @include mixins.max-screen(768px) {
          width: 30.66vw;
        }
        &.inview {
          transform: scale(1);
        }
      }
    }
  }
  .features__bg__wrapper2 {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    .features__bg__wrapper__contents2 {
      margin-top: min(76.38vw, 1100px);
      margin-left: max(-6.25vw, -50px);
      transform: translateY(var(--scroll-offset, 0px));
      transition: transform 0.8s ease-out;
      @include mixins.max-screen(768px) {
        margin-top: 340vw;
        margin-left: 3vw;
      }
      .features__container__pt2 {
        width: min(11.66vw, 168px);
        transform: scale(0);
        transition: transform 0.5s ease-in-out;
        @include mixins.max-screen(768px) {
          width: 26.13vw;
        }
        &.inview {
          transform: scale(1);
        }
      }
    }
  }
  .features__bg__wrapper3 {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 100%;
    overflow: hidden;
    .features__bg__wrapper__contents3 {
      margin-top: min(118.05vw, 1700px);
      margin-left: 0;
      transform: translate3d(0, var(--scroll-offset, 0px), 0);
      transition: transform 0.8s ease-out;
      @include mixins.max-screen(768px) {
        margin-top: 660vw;
      }
      .features__container__pt3 {
        width: min(24.58vw, 354px);
        transform: translate(85%, -85%);
        transition: transform 0.8s ease-in-out;
        @include mixins.max-screen(768px) {
          width: 52.53vw;
        }
        &.inview {
          transform: translate(0, 0);
        }
      }
    }
  }
}
</style>