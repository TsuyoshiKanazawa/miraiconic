<template>
  <div class="casestudy">
    <div class="casestudy-title" v-observe="'inview'">
      <div class="mask">
        <h2 class="casestudy-title__text">
          Case Study
        </h2>
      </div>
    </div>
    <img loading="lazy" src="/img/top/titleLineSp.svg" alt="caseStudy" class="caseStudy-line">
    <Splide 
      class="casestudy-item-wrap"
      :options="splideOptions"
    >
      <SplideSlide class="casestudy-item">
        <div class="casestudy-item-title">
          <p>某大手空間デザイン企業様</p>
          <div class="casestudy-item-title__text">
            <h3>業務直結型<br>BIMカリキュラムで人材育成</h3>
          </div>
        </div>
        <div class="casestudy-item-tag">
          <p class="tag">制作</p>
          <p class="tag">推進</p>
          <p class="tag dark">教育</p>
        </div>
        <div class="casestudy-item-contents">
          <div class="casestudy-item-contents-text">
            <h4>課題：</h4>
            <p>社内でのBIM活用を推進するにあたり、実務と直結した教育体制の構築が求められていた。</p>
          </div>
          <div class="casestudy-item-contents-text">
            <h4>支援内容：</h4>
            <p>● お客様の業務フローに合わせ、設計用途別にカリキュラムをカスタマイズ<br>
              ● BIM教育講座の教材をゼロから制作<br>
              ● 講師として社内トレーニングも実施</p>
          </div>
          <div class="casestudy-item-contents-text">
            <h4>成果：</h4>
            <p>● 受講者の理解度が向上し、BIMの社内活用が加速<br>
              ● 教育の定着を見据えた運用体制の構築にも貢献</p>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide class="casestudy-item">
        <div class="casestudy-item-title">
          <p>某大手空間デザイン企業様</p>
          <div class="casestudy-item-title__text">
            <h3>多店舗展開に向けた<br>BIMテンプレート設計とモデル制作</h3>
          </div>
        </div>
        <div class="casestudy-item-tag">
          <p class="tag dark">制作</p>
          <p class="tag dark">推進</p>
          <p class="tag">教育</p>
        </div>
        <div class="casestudy-item-contents">
          <div class="casestudy-item-contents-text">
            <h4>課題　：</h4>
            <p>多店舗展開を見据えたBIM活用において、<br>
              設計の効率化と情報の一元化が課題となっていた。</p>
          </div>
          <div class="casestudy-item-contents-text">
            <h4>支援内容　：</h4>
            <p>● 複数店舗に共通する要素を抽出し、Revitテンプレートとファミリの標準化を支援<br>
              ● ブランドの意匠性を保ちながら、再利用可能なBIM環境を整備<br>
              ● 効率的なBIM運用に向けた員数集計表を整備し、運用管理をサポート</p>
          </div>
          <div class="casestudy-item-contents-text">
            <h4>成果　：</h4>
            <p>● CADからBIMへの移行基盤を構築し、新規出店時のモデル構築をスムーズに<br>
              ● 社内での設計ルール共有と品質の均一化を実現</p>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide class="casestudy-item">
        <div class="casestudy-item-title">
          <p>某大手不動産ディベロッパー様</p>
          <div class="casestudy-item-title__text">
            <h3>共同住宅の意匠・構造・設備(MEP)の<br>BIMモデリング</h3>
          </div>
        </div>
        <div class="casestudy-item-tag">
          <p class="tag dark">制作</p>
          <p class="tag">推進</p>
          <p class="tag">教育</p>
        </div>
        <div class="casestudy-item-contents">
          <div class="casestudy-item-contents-text">
            <h4>課題　：</h4>
            <p>複数の設計領域にわたる共同住宅のBIM化において、<br>
              意匠・構造・設備(MEP)を統合的に扱える制作が求められていた。</p>
          </div>
          <div class="casestudy-item-contents-text">
            <h4>支援内容　：</h4>
            <p>● 意匠・構造・設備の設計情報をもとに、Revitを使用して統合BIMモデルを構築<br>
              ● 各設計フェーズでの整合性確保と情報可視化をサポート<br>
              ● 複数設計領域を一貫して統合することで、設計の効率化を支援</p>
          </div>
          <div class="casestudy-item-contents-text">
            <h4>成果　：</h4>
            <p>● 分野をまたぐ設計の整合性を向上させ、プロジェクト全体の品質と効率化を実現<br>
              ● 以降の設計・施工フェーズでのBIM活用基盤を提供</p>
          </div>
        </div>
      </SplideSlide>
    </Splide>
    <div class="casestudy__bg__wrapper1" style="z-index: 1;">
      <div class="casestudy__bg__wrapper__contents1">
        <img loading="lazy" src="/img/top/caseStudy-pt1.svg" alt="feature_bg" class="casestudy__container__pt1" v-observe="'inview'">
      </div>
    </div>
    <div class="casestudy__bg__wrapper2" style="z-index: 1;">
      <div class="casestudy__bg__wrapper__contents2">
        <img loading="lazy" src="/img/top/caseStudy-pt2.svg" alt="feature_bg" class="casestudy__container__pt2" v-observe="'inview'">
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'

const splideOptions = {
  type: 'slide',
  speed: 750,
  perPage: 1,
  drag: 'free',
  autoplay: false,
  interval: 3000,
  pauseOnHover: true,
  pauseOnFocus: true,
  autoWidth: true,
  arrows: false,
  pagination: true,
  gap: '2.77vw',
  direction: 'ltr',
  focus: 'center',
  snap: true,
  classes: {
    pagination: 'pagination',
    page: 'page',
  },
}
</script>

<script>
import scrollParallaxMixin from '@/mixins/scrollParallaxMixin';
export default {
  name: 'SpCasestudy',
  mixins: [scrollParallaxMixin],
}
</script>

<style lang="scss" scoped>
.casestudy {
  background-color: #F2F2F2;
  padding: 10vw 4vw;
  position: relative;
  overflow: hidden;
  .casestudy-title {
    text-align: center;
    position: relative;
    z-index: 2;
    color: #252526;
    .casestudy-title__text {
      font-family: "Barlow Condensed", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 16vw;
      //letter-spacing: 0.01em;
      letter-spacing: 0.001em;
      transform: translateY(100%);
      transition: transform 0.8s ease-in-out;
    }
    &.inview {
      .casestudy-title__text {
        transform: translateY(0);
      }
    }
  }
  .caseStudy-line {
    display: block;
    width: 23.46vw;
    margin: 0 auto;
  }
  .casestudy-item-wrap {
    position: relative;
    z-index: 2;
    .casestudy-item {
      background-color: #FFFFFF;
      border-radius: 10.66vw;
      width: 100%;
      padding: 0 3vw 8vw;
      margin-top: 10vw;
      &-title {
        font-size: 4.26vw;
        text-align: center;
        padding: 7vw 0 3vw;
        p {
          font-size: 2.66vw;
          letter-spacing: 0.05em;
          font-weight: 400;
        }
        &__text {
          height: 20.26vw;
          position: relative;
          h3 {
            font-size: 4.26vw;
            letter-spacing: 0.03em;
            margin-top: 1.5vw;
            font-weight: 700;
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
      &-tag {
        display: flex;
        justify-content: center;
        gap: 1.33vw;
        padding: 0 4vw;
        .tag {
          font-size:  3.26vw;
          font-weight: 500;
          width: 20vw;
          height: 5.93vw;
          background-color: #DCF4FF;
          text-align: center;
          line-height: 5.93vw;
          border-radius: 40vw;
          color: white;
          &.dark {
            color: #fff;
            background-color: #3676B6;
          }
        }
      }
      &-contents {
        padding: 4vw 4vw;
        background-color: #F2F2F2;
        border-radius: 2.66vw;
        margin-top: 5vw;
        height: 110vw;
        &-text {
          padding: 3vw 0vw;
          h4 {
            font-size: 3.8vw;
            font-weight: 700;
            letter-spacing: 0.03em;
          }
          p {
            font-size: 3.26vw;
            letter-spacing: 0.05em;
          }
        }
      }
    }
  }
  .casestudy__bg__wrapper1 {
    position: absolute;
    top: 10%;
    right: -5%;
    height: 100%;
    .casestudy__bg__wrapper__contents1 {
      margin-top: min(2.08vw, 30px);
      margin-left: min(2.77vw, 40px);
      transform: translate3d(0, var(--scroll-offset, 0px), 0);
      transition: transform 0.8s ease-out;
      will-change: transform;
      @include mixins.max-screen(768px) {
        margin-left: -3vw;
      }
      .casestudy__container__pt1 {
        width: min(14.65vw, 211px);
        transform: scale(0);
        transition: transform 0.5s ease-in-out;
        @include mixins.max-screen(768px) {
          width: 24vw;
        }
        &.inview {
          transform: scale(1);
        }
      }
    }
  }
  .casestudy__bg__wrapper2 {
    position: absolute;
    top: 70%;
    left: 0%;
    height: 100%;
    .casestudy__bg__wrapper__contents2 {
      margin-top: min(2.08vw, 30px);
      margin-left: min(2.77vw, 40px);
      transform: translate3d(0, var(--scroll-offset, 0px), 0);
      transition: transform 0.8s ease-out;
      will-change: transform;
      @include mixins.max-screen(768px) {
        margin-left: -3vw;
      }
      .casestudy__container__pt2 {
        width: min(14.65vw, 211px);
        transform: scale(0);
        transition: transform 0.5s ease-in-out;
        @include mixins.max-screen(768px) {
          width: 27.46vw;
        }
        &.inview {
          transform: scale(1);
        }
      }
    }
  }
}

</style>

<style lang="scss" scoped>
:deep(.pagination) {
  display: flex;
  justify-content: center;
  gap: 1.5vw;
  margin: min(40px, 2.77vw) 0 0;
  z-index: 10;
  list-style: none;
  margin-bottom: 10vw;
}

:deep(.page) {
  width: 16vw;
  height: 0.8vw;
  background-color: #A0A0A0;
  border-radius: 40vw;
}

:deep(.page.is-active) {
  background-color: #3676B6;
}
</style>