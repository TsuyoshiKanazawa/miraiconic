<template>
  <section class="qa">
    <div class="qa__container">
      <div class="mask">
        <h3 class="qa__title" v-observe="'inview'">Q&A</h3>
      </div>
      <img loading="lazy" v-if="!useIsMobile().value" src="/img/titleLine.svg" alt="line" class="title_line">
      <img loading="lazy" v-else src="/img/titleLine-sp.svg" alt="line" class="title_line">
      <div class="mask">
        <h3 class="qa__title__sub" v-observe="'inview'">質問にお答えします</h3>
      </div>
      <div class="qa__container__item" v-observe="'inview'">
        <svg v-if="!useIsMobile().value" class="qa__container__item__line" width="1120" height="6" viewBox="0 0 1120 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="2" width="1114" height="2" fill="#252526"/>
          <circle cx="3" cy="3" r="3" fill="#252526"/>
          <circle cx="1117" cy="3" r="3" fill="#252526"/>
        </svg>
        <svg v-if="useIsMobile().value" class="qa__container__item__line" width="329" height="5" viewBox="0 0 329 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="325" height="1" fill="#252526"/>
          <circle cx="2.5" cy="2.5" r="2.5" fill="#252526"/>
          <circle cx="326.5" cy="2.5" r="2.5" fill="#252526"/>
        </svg>
        <div class="qa__container__item__question">
          <svg class="qa__container__item__question__icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" rx="10" fill="#252526"/>
          </svg>
          <h4 class="qa__container__item__question__title">
            遠隔でもモデリングを依頼することは可能ですか？
          </h4>
        </div>
        <div class="qa__container__item__answer">
          <p class="qa__container__item__answer__text">
            はい。通常のモデリングだけでなく、BIM Collaborate Proを使用したクラウドワークシェアリングにも<br class="pc-only">​対応可能です。
          </p>
        </div>
      </div>
      <div class="qa__container__item" v-observe="'inview'">
        <svg v-if="!useIsMobile().value" class="qa__container__item__line" width="1120" height="6" viewBox="0 0 1120 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="2" width="1114" height="2" fill="#252526"/>
          <circle cx="3" cy="3" r="3" fill="#252526"/>
          <circle cx="1117" cy="3" r="3" fill="#252526"/>
        </svg>
        <svg v-if="useIsMobile().value" class="qa__container__item__line" width="329" height="5" viewBox="0 0 329 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="325" height="1" fill="#252526"/>
          <circle cx="2.5" cy="2.5" r="2.5" fill="#252526"/>
          <circle cx="326.5" cy="2.5" r="2.5" fill="#252526"/>
        </svg>
        <div class="qa__container__item__question">
          <svg class="qa__container__item__question__icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" rx="10" fill="#252526"/>
          </svg>
          <h4 class="qa__container__item__question__title">
            干渉チェックを依頼することは可能ですか？
          </h4>
        </div>
        <div class="qa__container__item__answer">
          <p class="qa__container__item__answer__text">
            統合モデルの作成や干渉チェックのためのモデル整理から実際の設定まで、お客様のご要望に応じて<br class="pc-only">対応可能です。
          </p>
        </div>
      </div>
      <div class="qa__container__item" v-observe="'inview'">
        <svg v-if="!useIsMobile().value" class="qa__container__item__line" width="1120" height="6" viewBox="0 0 1120 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="2" width="1114" height="2" fill="#252526"/>
          <circle cx="3" cy="3" r="3" fill="#252526"/>
          <circle cx="1117" cy="3" r="3" fill="#252526"/>
        </svg>
        <svg v-if="useIsMobile().value" class="qa__container__item__line" width="329" height="5" viewBox="0 0 329 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="325" height="1" fill="#252526"/>
          <circle cx="2.5" cy="2.5" r="2.5" fill="#252526"/>
          <circle cx="326.5" cy="2.5" r="2.5" fill="#252526"/>
        </svg>
        <div class="qa__container__item__question">
          <svg class="qa__container__item__question__icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" rx="10" fill="#252526"/>
          </svg>
          <h4 class="qa__container__item__question__title">
            BIMを導入したいが、何から始めれば良いかわからない
          </h4>
        </div>
        <div class="qa__container__item__answer">
          <p class="qa__container__item__answer__text">
            丁寧なヒアリングを通じて最適な段取りを行い、初期導入において最適なコストを見極め、<br class="pc-only">イチからサポートいたします。<br>過去案件のトレース、トライアル案件実施、テンプレートやファミリの準備まで幅広く対応しております。​
          </p>
        </div>
      </div>
      <div class="qa__container__item" v-observe="'inview'">
        <svg v-if="!useIsMobile().value" class="qa__container__item__line" width="1120" height="6" viewBox="0 0 1120 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="2" width="1114" height="2" fill="#252526"/>
          <circle cx="3" cy="3" r="3" fill="#252526"/>
          <circle cx="1117" cy="3" r="3" fill="#252526"/>
        </svg>
        <svg v-if="useIsMobile().value" class="qa__container__item__line" width="329" height="5" viewBox="0 0 329 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="325" height="1" fill="#252526"/>
          <circle cx="2.5" cy="2.5" r="2.5" fill="#252526"/>
          <circle cx="326.5" cy="2.5" r="2.5" fill="#252526"/>
        </svg>
        <div class="qa__container__item__question">
          <svg class="qa__container__item__question__icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" rx="10" fill="#252526"/>
          </svg>
          <h4 class="qa__container__item__question__title">
            BIMを導入したものの、何か不便に感じる
          </h4>
        </div>
        <div class="qa__container__item__answer">
          <p class="qa__container__item__answer__text">
            BIMの活用目的に対して、テンプレートやファミリ、パラメータが過不足のない最適なものとなっているかを診断し、再整備いたします。改善提案のみのチェックも承っております。
          </p>
        </div>
      </div>
      <div class="qa__container__item" v-observe="'inview'">
        <svg v-if="!useIsMobile().value" class="qa__container__item__line" width="1120" height="6" viewBox="0 0 1120 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="2" width="1114" height="2" fill="#252526"/>
          <circle cx="3" cy="3" r="3" fill="#252526"/>
          <circle cx="1117" cy="3" r="3" fill="#252526"/>
        </svg>
        <svg v-if="useIsMobile().value" class="qa__container__item__line" width="329" height="5" viewBox="0 0 329 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="325" height="1" fill="#252526"/>
          <circle cx="2.5" cy="2.5" r="2.5" fill="#252526"/>
          <circle cx="326.5" cy="2.5" r="2.5" fill="#252526"/>
        </svg>
        <div class="qa__container__item__question">
          <svg class="qa__container__item__question__icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" rx="10" fill="#252526"/>
          </svg>
          <h4 class="qa__container__item__question__title">
            教材制作はどのようなコンテンツに対応していますか？
          </h4>
        </div>
        <div class="qa__container__item__answer">
          <p class="qa__container__item__answer__text">
            BIM・CADともに、リアルおよびオンライン向けのテキスト、動画、それに伴う演習データの制作に対応<br class="pc-only">しております。
          </p>
        </div>
      </div>
      <div class="qa__container__item" v-observe="'inview'">
        <svg v-if="!useIsMobile().value" class="qa__container__item__line" width="1120" height="6" viewBox="0 0 1120 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="2" width="1114" height="2" fill="#252526"/>
          <circle cx="3" cy="3" r="3" fill="#252526"/>
          <circle cx="1117" cy="3" r="3" fill="#252526"/>
        </svg>
        <svg v-if="useIsMobile().value" class="qa__container__item__line" width="329" height="5" viewBox="0 0 329 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="325" height="1" fill="#252526"/>
          <circle cx="2.5" cy="2.5" r="2.5" fill="#252526"/>
          <circle cx="326.5" cy="2.5" r="2.5" fill="#252526"/>
        </svg>
        <div class="qa__container__item__question">
          <svg class="qa__container__item__question__icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" rx="10" fill="#252526"/>
          </svg>
          <h4 class="qa__container__item__question__title">
            自社にすでにある教育資料で講師をしてもらうことは可能ですか？
          </h4>
        </div>
        <div class="qa__container__item__answer">
          <p class="qa__container__item__answer__text">
            もちろんです。リアルおよびオンラインにおいて、ご要望に応じた講師業のみを担当することも可能です。
          </p>
        </div>
      </div>
      <div class="qa__container__item" v-observe="'inview'">
        <svg v-if="!useIsMobile().value" class="qa__container__item__line" width="1120" height="6" viewBox="0 0 1120 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="2" width="1114" height="2" fill="#252526"/>
          <circle cx="3" cy="3" r="3" fill="#252526"/>
          <circle cx="1117" cy="3" r="3" fill="#252526"/>
        </svg>
        <svg v-if="useIsMobile().value" class="qa__container__item__line" width="329" height="5" viewBox="0 0 329 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="325" height="1" fill="#252526"/>
          <circle cx="2.5" cy="2.5" r="2.5" fill="#252526"/>
          <circle cx="326.5" cy="2.5" r="2.5" fill="#252526"/>
        </svg>
        <div class="qa__container__item__question">
          <svg class="qa__container__item__question__icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" rx="10" fill="#252526"/>
          </svg>
          <h4 class="qa__container__item__question__title">
            BIMの知識やスキルを測る資格はありますか？
          </h4>
        </div>
        <div class="qa__container__item__answer">
          <p class="qa__container__item__answer__text">
            オートデスク認定トレーニングセンター（ATC）でのRevitユーザー検定やBIM利用技術者試験があります。資格取得済の講師による対策講座の実施も可能ですので、一度ご相談ください。
          </p>
        </div>
        <svg v-if="!useIsMobile().value" class="qa__container__item__line" width="1120" height="6" viewBox="0 0 1120 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="2" width="1114" height="2" fill="#252526"/>
          <circle cx="3" cy="3" r="3" fill="#252526"/>
          <circle cx="1117" cy="3" r="3" fill="#252526"/>
        </svg>
        <svg v-if="useIsMobile().value" class="qa__container__item__line" width="329" height="5" viewBox="0 0 329 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="325" height="1" fill="#252526"/>
          <circle cx="2.5" cy="2.5" r="2.5" fill="#252526"/>
          <circle cx="326.5" cy="2.5" r="2.5" fill="#252526"/>
        </svg>
      </div>

    </div>
    <div class="qa__bg__wrapper1" style="z-index: 1;">
      <div class="qa__bg__wrapper__contents1">
        <img loading="lazy" src="/img/qa/qa-pt1.svg" alt="qa_bg" class="qa__container__pt1" v-observe="'inview'">
      </div>
    </div>
    <div class="qa__bg__wrapper2" style="z-index: 1;">
      <div class="qa__bg__wrapper__contents2">
        <img loading="lazy" src="/img/qa/qa-pt2.svg" alt="qa_bg" class="qa__container__pt2" v-observe="'inview'">
      </div>
    </div>
    <div class="qa__bg__wrapper3" style="z-index: 1;">
      <div class="qa__bg__wrapper__contents3">
        <img loading="lazy" src="/img/qa/qa-pt3.svg" alt="qa_bg" class="qa__container__pt3" v-observe="'inview'">
      </div>
    </div>
  </section>
</template>

<script>
import scrollParallaxMixin from '@/mixins/scrollParallaxMixin';
export default {
  name: 'Qa',
  mixins: [scrollParallaxMixin],
}
</script>

<style lang="scss" scoped>
.qa {
  padding-top: min(3.47vw, 50px);
  padding-bottom: min(5.55vw, 80px);
  position: relative;
  //overflow: hidden;
  background-color: #F2F2F2;
  @include mixins.max-screen(768px) {
    padding-top: 20vw;
  }
  p, h4 {
    color: #252526;
  }
  &__title {
    font-size: min(5.55vw, 80px);
    text-align: center;
    //letter-spacing: 0.01em;
    letter-spacing: 0.001em;
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 600;
    font-style: normal;
    transform: translateY(100%);
    transition: transform 0.8s ease-in-out;
    color: #252526;
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
    color: #252526;
    margin-bottom: min(2.77vw, 40px);
    &.inview {
      transform: translateY(0);
    }
    @include mixins.max-screen(768px) {
      font-size: 4.26vw;
    }
  }
  &__container {
    background-color: #fff;
    width: min(88.88vw, 1280px);
    margin: 0 auto;
    padding: min(4.16vw, 60px);
    padding-bottom: min(6.25vw, 90px);
    border-radius: min(8.33vw, 120px);
    position: relative;
    z-index: 10;
    @include mixins.max-screen(768px) {
      width: 92vw;
      padding: 7vw 2vw 12vw;
    }
    &__item {
      opacity: 0;
      transform: translateY(50%);
      transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
      position: relative;
      z-index: 10;
      @include mixins.max-screen(768px) {
        transform: translateY(10vw);
      }
      &.inview {
        opacity: 1;
        transform: translateY(0);
      }
      &__line {
        width: 100%;
        height: 100%;
      }
      &__question {
        display: flex;
        align-items: center;
        gap: min(1.25vw, 18px);
        padding: 0 min(5.55vw, 80px);
        margin-top: min(1.59vw, 23px);
        @include mixins.max-screen(768px) {
          padding: 0 0 0 3vw;
        }
        &__title {
          font-size: min(1.94vw, 28px);
          @include mixins.max-screen(768px) {
            font-size: 4.26vw;
            line-height: 1.5;
            letter-spacing: 0.03em;
            width: 74.93vw;
          }
        }
        &__icon {
          width: min(2.08vw, 30px);
          @include mixins.max-screen(768px) {
            width: 5.33vw;
            height: 5.33vw;
            margin-top: 0.5vw;
            margin-bottom: auto;
          }
        }
      }
      &__answer {
        padding: 0 min(7.63vw, 110px) 0 min(9.02vw, 130px);
        margin: min(1.59vw, 23px) 0;
        @include mixins.max-screen(768px) {
          padding: 0 3vw 0 9.5vw;
        }
        &__text {
          font-size: min(1.25vw, 18px);
          letter-spacing: 0.05em;
          font-weight: 500;
          @include mixins.max-screen(768px) {
            font-size: 3.73vw;
            line-height: 1.5;
          }
        }
      }
    }
  }
  .qa__bg__wrapper1 {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    .qa__bg__wrapper__contents1 {
      margin-top: min(2.08vw, 30px);
      margin-left: min(2.77vw, 40px);
      transform: translate3d(0, var(--scroll-offset, 0px), 0);
      transition: transform 0.8s ease-out;
      will-change: transform;
      @include mixins.max-screen(768px) {
        margin-top: -40vw;
        margin-left: -10vw;
      }
      .qa__container__pt1 {
        width: min(10.97vw, 158px);
        transform: scale(0);
        transition: transform 0.5s ease-in-out;
        @include mixins.max-screen(768px) {
          width: 36.26vw;
        }
        &.inview {
          transform: scale(1);
        }
      }
    }
  }
  .qa__bg__wrapper2 {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    .qa__bg__wrapper__contents2 {
      transform: translate3d(0, var(--scroll-offset, 0px), 0);
      transition: transform 0.8s ease-out;
      will-change: transform;
      @include mixins.max-screen(768px) {

        margin-right: -17.4vw;
      }
      .qa__container__pt2 {
        width: min(15.90vw, 229px);
        transform: scale(0) translateX(50%);
        transition: transform 0.5s ease-in-out;
        &.inview {
          transform: scale(1) translateX(50%);
          @include mixins.max-screen(768px) {
            transform: scale(1) translateX(0);
          }
        }
        @include mixins.max-screen(768px) {
          width: 34.93vw;
        }
      }
    }
  }
  .qa__bg__wrapper3 {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    .qa__bg__wrapper__contents3 {
      margin-top: min(69.44vw, 1000px);
      transform: translate3d(0, var(--scroll-offset, 0px), 0);
      transition: transform 0.8s ease-out;
      will-change: transform;
      @include mixins.max-screen(768px) {
        margin-top: 270vw;
        margin-right: -0vw;
      }
      .qa__container__pt3 {
        width: min(43.05vw, 620px);
        transform: scale(0);
        transition: transform 0.5s ease-in-out;
        &.inview {
          transform: scale(1);
        }
        @include mixins.max-screen(768px) {
          width: 100vw;
        }
      }
    }
  }
}
</style>
