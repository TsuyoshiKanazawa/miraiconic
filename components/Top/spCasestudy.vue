<template>
  <div class="casestudy">
    <h2 class="casestudy-title">
      Case Study
    </h2>
    <img src="/img/top/titleLineSp.svg" alt="caseStudy" class="caseStudy-line">
    <Splide 
      class="casestudy-item-wrap"
      :options="splideOptions"
    >
      <SplideSlide class="casestudy-item">
        <div class="casestudy-item-title">
          <p>某大手空間デザイン企業様</p>
          <h3>業務直結型<br>BIMカリキュラムで人材育成</h3>
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
            <h4>提供支援内容：</h4>
            <p>お客様の業務フローに合わせ、設計用途別にカリキュラムをカスタマイズ<br>
              BIM教育講座の教材をゼロから制作<br>
              講師として社内トレーニングも実施</p>
          </div>
          <div class="casestudy-item-contents-text">
            <h4>成果：</h4>
            <p>受講者の理解度が向上し、BIMの社内活用が加速<br>
              教育の定着を見据えた運用体制の構築にも貢献</p>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide class="casestudy-item">
        <div class="casestudy-item-title">
          <p>某大手空間デザイン企業様</p>
          <h3>業務直結型BIMカリキュラムで人材育成</h3>
        </div>
        <div class="casestudy-item-tag">
          <p class="tag">制作</p>
          <p class="tag dark">推進</p>
          <p class="tag">教育</p>
        </div>
        <div class="casestudy-item-contents">
          <div class="casestudy-item-contents-text">
            <h4>課題　：</h4>
            <p>社内でのBIM活用を推進するにあたり、実務と直結した教育体制の構築が求められていた。</p>
          </div>
          <div class="casestudy-item-contents-text">
            <h4>提供支援内容　：</h4>
            <p>お客様の業務フローに合わせ、設計用途別にカリキュラムをカスタマイズ<br>
              BIM教育講座の教材をゼロから制作<br>
              講師として社内トレーニングも実施</p>
          </div>
          <div class="casestudy-item-contents-text">
            <h4>成果　：</h4>
            <p>受講者の理解度が向上し、BIMの社内活用が加速<br>
              教育の定着を見据えた運用体制の構築にも貢献</p>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide class="casestudy-item">
        <div class="casestudy-item-title">
          <p>某大手空間デザイン企業様</p>
          <h3>業務直結型BIMカリキュラムで人材育成</h3>
        </div>
        <div class="casestudy-item-tag">
          <p class="tag dark">制作</p>
          <p class="tag">推進</p>
          <p class="tag">教育</p>
        </div>
        <div class="casestudy-item-contents">
          <div class="casestudy-item-contents-text">
            <h4>課題　：</h4>
            <p>社内でのBIM活用を推進するにあたり、実務と直結した教育体制の構築が求められていた。</p>
          </div>
          <div class="casestudy-item-contents-text">
            <h4>提供支援内容　：</h4>
            <p>お客様の業務フローに合わせ、設計用途別にカリキュラムをカスタマイズ<br>
              BIM教育講座の教材をゼロから制作<br>
              講師として社内トレーニングも実施</p>
          </div>
          <div class="casestudy-item-contents-text">
            <h4>成果　：</h4>
            <p>受講者の理解度が向上し、BIMの社内活用が加速<br>
              教育の定着を見据えた運用体制の構築にも貢献</p>
          </div>
        </div>
      </SplideSlide>
    </Splide>
    <div class="casestudy__bg__wrapper1" style="z-index: 1;">
      <div class="casestudy__bg__wrapper__contents1">
        <img src="/img/top/caseStudy-pt1.svg" alt="feature_bg" class="casestudy__container__pt1" v-observe="'inview'">
      </div>
    </div>
    <div class="casestudy__bg__wrapper2" style="z-index: 1;">
      <div class="casestudy__bg__wrapper__contents2">
        <img src="/img/top/caseStudy-pt2.svg" alt="feature_bg" class="casestudy__container__pt2" v-observe="'inview'">
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'

const splideOptions = {
  type: 'loop',
  speed: 750,
  perPage: 1,
  drag: 'free',
  autoplay: true,
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
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 16vw;
    //letter-spacing: 0.01em;
    letter-spacing: 0.001em;
    text-align: center;
    position: relative;
    z-index: 2;
    color: #252526;
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
        padding: 7vw 0;
        p {
          font-size: 4.8vw;
          letter-spacing: 0.05em;
          font-weight: 400;
        }
        h3 {
          font-size: 6.4vw;
          letter-spacing: 0.03em;
          margin-top: 1.5vw;
          font-weight: 700;
        }
      }
      &-tag {
        display: flex;
        justify-content: center;
        gap: 1.33vw;
        padding: 0 4vw;
        .tag {
          font-size: 4.26vw;
          font-weight: 500;
          width: 24vw;
          height: 6.93vw;
          background-color: #DCF4FF;
          text-align: center;
          line-height: 6.93vw;
          border-radius: 40vw;
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
        margin-top: 10vw;
        &-text {
          padding: 3vw 0vw;
          h4 {
            font-size: 4.8vw;
            font-weight: 700;
            letter-spacing: 0.03em;
          }
          p {
            font-size: 4.26vw;
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