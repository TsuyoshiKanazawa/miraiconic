<template>
  <div class="casestudy-wrap" ref="wrap">
    <div class="casestudy">
      <div class="casestudy-title" v-observe="'inview'">
        <div class="mask">
          <h2 class="casestudy-title__text">
            Case Study
          </h2>
        </div>
        <svg width="90" height="10" viewBox="0 0 90 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="3" width="80" height="4" fill="#252526"/>
          <circle cx="85" cy="5" r="5" fill="#252526"/>
          <circle cx="5" cy="5" r="5" fill="#252526"/>
        </svg>
      </div>
      <Splide 
        class="casestudy-item-wrap"
        :options="splideOptions"
        ref="splideRef"
      >
        <SplideSlide class="casestudy-item section--1">
          <div class="casestudy-item-title">
            <p>某大手空間デザイン企業様</p>
            <div class="casestudy-item-title__text">
              <h3>業務直結型BIMカリキュラムで人材育成</h3>
            </div>
          </div>
          <div class="casestudy-item-tag">
            <p class="tag">制作</p>
            <p class="tag">推進</p>
            <p class="tag dark">教育</p>
          </div>
          <div class="casestudy-item-contents">
            <div class="casestudy-item-contents-text">
              <h4>課題　：</h4>
              <p>社内でのBIM活用を推進するにあたり、実務と直結した教育体制の構築が求められていた。</p>
            </div>
            <div class="casestudy-item-contents-text">
              <h4>支援内容　：</h4>
              <p>● お客様の業務フローに合わせ、設計用途別にカリキュラムをカスタマイズ<br>
              ● BIM教育講座の教材をゼロから制作<br>
              ● 講師として社内トレーニングも実施</p>
            </div>
            <div class="casestudy-item-contents-text">
              <h4>成果　：</h4>
              <p>● 受講者の理解度が向上し、BIMの社内活用が加速<br>
                ● 教育の定着を見据えた運用体制の構築にも貢献</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide class="casestudy-item section--2">
          <div class="casestudy-item-title">
            <p>某大手空間デザイン企業様</p>
            <div class="casestudy-item-title__text">
              <h3>多店舗展開に向けたBIMテンプレート設計とモデル制作</h3>
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
        <SplideSlide class="casestudy-item section--3">
          <div class="casestudy-item-title">
            <p>某大手不動産ディベロッパー様</p>
            <div class="casestudy-item-title__text">
              <h3>共同住宅の意匠・構造・設備(MEP)のBIMモデリング</h3>
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
      <div class="caseStudy-bg__wrapper top" :style="{ transform: 'translateY(' + parallaxOffset + 'px)' }">
        <div class="caseStudy-bg__wrapper__contents1" v-observe="'inview'">
          <img loading="lazy" src="/img/top/caseStudy-pt1.svg" alt="caseStudyBg1" class="caseStudy_pt1">
        </div>
      </div>
      <div class="caseStudy-bg__wrapper bottom" :style="{ transform: 'translateY(' + parallaxOffset + 'px)' }">
        <div class="caseStudy-bg__wrapper__contents2" v-observe="'inview'">
          <img loading="lazy" src="/img/top/caseStudy-pt2.svg" alt="caseStudyBg2" class="caseStudy_pt2">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css/core'

gsap.registerPlugin(ScrollTrigger)
const wrap = ref(null)
const splideRef = ref(null)
const slideCount = 3

// ロック中のスクロール位置を保持
let lockedScrollY = 0
let isLocking = false
// スクロール位置をロックするハンドラ
const lockWheel = (e) => {
  window.scrollTo(0, lockedScrollY)
  e.preventDefault()
  e.stopPropagation();
}

// ─── スクロールを固定し続けるループ関数 ───
const lockLoop = () => {
  if (!isLocking) return
  // 毎フレーム、強制的にスクロール位置を戻す
  window.scrollTo(0, lockedScrollY)
  // 次フレームも呼び出し
  requestAnimationFrame(lockLoop)
}

const splideOptions = {
  type: 'slide',
  speed: 750,
  easing: 'ease-in-out',
  perPage: 1,
  drag: false,
  //width: '100%',
  autoWidth: true,
  //fixedWidth: '1220px',
  arrows: false,
  pagination: true,
  gap: 'min(40px, 2.77vw)',
  //gap: '40px',
  direction: 'ltr',
  focus      : 'center',
  trimSpace  : false, 
  snap: true,
  wheel: false,
  classes: {
    pagination: 'pagination',
    page: 'page',
  },
}

let trigger
onMounted(() => {
  nextTick(() => {
    let prevIdx = 0;
    const splideInst = splideRef.value.splide;
    lockedScrollY = wrap.value.offsetTop

    trigger = ScrollTrigger.create({
      trigger: wrap.value,
      start:  'top top',
      end:    () => `+=${window.innerHeight * (slideCount - 2)}`,
      pin:    true,
      scrub:  true,
      snap: {
        snapTo:   1 / (slideCount - 1),
        duration: 0.75,
        inertia:  false,
      },
      invalidateOnRefresh: true,
      markers: false,
      onUpdate: self => {
        const idx = Math.round(self.progress * (slideCount - 1));
        if (idx !== prevIdx) {
          prevIdx = idx;
          splideInst.go(idx);  // インデックスが変化したときのみ go()
        }
      },
    })

    // ─── move/moved でスクロール位置を固定 ───
    splideInst.on('move', () => {
      // 1. 現在のスクロール位置をキャプチャ
      lockedScrollY = window.scrollY;
      // 2. フラグを立てて lockLoop を開始
      isLocking = true;
      requestAnimationFrame(lockLoop);
      // 3. wheel/touchmove もキャプチャフェーズでキャンセル
      window.addEventListener('wheel', lockWheel, { passive: false, capture: true });
      window.addEventListener('touchmove', lockWheel, { passive: false, capture: true });
    })

    splideInst.on('moved', () => {
      // 1. 少し待ってからループを止める
      setTimeout(() => {
        isLocking = false;
        requestAnimationFrame(lockLoop);
      }, 100)
      // 2. wheel/touchmove の監視を解除
      window.removeEventListener('wheel', lockWheel, { capture: true });
      window.removeEventListener('touchmove', lockWheel, { capture: true });
    })
    // ────────────────────────────────
  })
})

onBeforeUnmount(() => {
  trigger && trigger.kill()
})
</script>

<script>
import scrollParallaxMixin from '@/mixins/scrollParallaxMixin';
export default {
  mixins: [scrollParallaxMixin],
}
</script>

<style lang="scss" scoped>
.casestudy-wrap {
  position: relative;
  height: 100vh;
  //overflow: hidden;
}

.casestudy {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #F2F2F2;
  width: 100vw;
  height: 100%;
  color: #252526;
  //padding: min(80px, 5.55vw) 0;
  padding: 80px 0;
  .casestudy-title {
    position: relative;
    width: fit-content;
    margin: 0 auto;
    .casestudy-title__text {
      //font-size: min(80px, 5.55vw);
      font-size: 80px;
      text-align: center;
      letter-spacing: 0.001em;
      font-family: "Barlow Condensed", sans-serif;
      font-weight: 600;
      font-style: normal;
      transform: translateY(100%);
      transition: transform 0.8s ease-in-out;
    }
    &.inview {
      .casestudy-title__text {
        transform: translateY(0);
      }
    }
    svg {
      position: absolute;
      bottom: -5%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .casestudy-item-wrap {
    //margin: min(60px, 4.16vw) 0 0;
    margin: 60px 0 0;
    position: relative;
    z-index: 3;
    .casestudy-item {
      position: relative;
      background-color: #fff;
      width: min(1220px, 83.33vw) !important;
      //width: 1220px;
      //height: min(533px, 37.01vw);
      //height: 533px;
      //border-radius: min(120px, 8.33vw);
      border-radius:  min(60px, 4.17vw);
      padding: min(40px, 2.77vw);
      //padding: 40px;
      .casestudy-item-title {
        position: relative;
        text-align: center;
        p {
          font-size: min(14px, 0.97vw);
          //font-size: 14px;
          font-weight: 500;
        }
        .casestudy-item-title__text {
          margin-top: min(10px, 0.69vw);
          height: min(90px, 6.25vw);
          h3 {
            font-size: min(32px, 2.22vw);
            font-weight: 700;
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

      }
      .casestudy-item-tag {
        display: flex;
        justify-content: center;
        gap: min(10px, 0.69vw);
        //gap: 10px;
        padding: min(20px, 1.38vw) 0;
        //padding: 20px 0;
        .tag {
          //font-size: 20px;
          font-size: min(20px, 1.38vw);
          font-weight: 500;
          width: min(160px, 11.11vw);
          //width: min(160px, 11.11vw);
          height: min(32px, 2.22vw);
          //height: 32px;
          background-color: #DCF4FF;
          text-align: center;
          line-height: min(32px, 2.22vw);
          //line-height: 32px;
          border-radius: min(150px, 10.41vw);
          //border-radius: 150px;
          color: white;
          &.dark {
            color: #fff;
            background-color: #3676B6;
          }
        }
      }
      .casestudy-item-contents {
        background-color: #F2F2F2;
        width: min(1040px, 72.22vw);
        //width: 1040px;
        height: min(282px, 19.58vw);
        //height: 282px;
        border-radius: min(10px, 0.69vw);
        //border-radius: 10px;
        margin: min(10px, 0.69vw) auto 0;
        //margin: 10px auto 0;
        padding: min(40px, 2.77vw) 0;
        //padding: 40px 0;
        .casestudy-item-contents-text {
          display: flex;
          justify-content: center;
          gap: min(30px, 2.08vw);
          //gap: 30px;
          margin-bottom: min(20px, 1.38vw);
          //margin-bottom: 20px;
          h4 {
            //font-size: 16px;
            font-size: min(16px, 1.11vw);
            font-weight: 700;
            text-align: right;
            letter-spacing: 0.03em;
            width: min(165px, 11.45vw);
            //width: 165px;
          }
          p {
            //font-size: 14px;
            font-size: min(14px, 0.97vw);
            font-weight: 500;
            width: min(772px, 53.61vw);
            //width: 772px;
            letter-spacing: 0.05em;
          }
        }
      }
    }
  }
  .casestudy-progress {
    display: flex;
    justify-content: center;
    gap: min(10px, 0.69vw);
    margin: min(40px, 2.77vw) 0 0;
    .progress {
      width: min(100px, 6.94vw);
      height: min(5px, 0.34vw);
      background-color: #A0A0A0;
      border-radius: min(150px, 10.41vw);
      &.active {
        background-color: #3676B6;
      }
    }
  }
  .caseStudy-bg__wrapper {
    position: absolute;
    width: 1px;
    height: 1%;
    transform: translate3d(0, var(--scroll-offset), 0);
    transition: transform 0.8s ease-out;
    z-index: 2;
    &__contents1 {
      width: fit-content;
      transform: scale(0.1);
      margin-right: 0;
      margin-left: auto;
      transition: transform 0.8s ease-in-out;
      position: relative;
      @include mixins.max-screen(768px) {
        margin-top: 10vw;
      }
      .caseStudy_pt1 {
        width: min(139px, 37.06vw);
        display: block;
        transition: transform 0.8s ease-in-out;
        margin-right: 0;
        margin-left: auto;
        @include mixins.max-screen(768px) {
          width: 18.13vw;
          max-width: auto;
        }
      }
      &.inview {
        transform: scale(1);
      }
    }
    &__contents2 {
      width: fit-content;
      margin-right: auto;
      margin-left: 0;
      transition: transform 0.8s ease-in-out;
      position: relative;

      .caseStudy_pt2 {
        width: min(217px, 57.86vw);
        transition: transform 0.8s ease-in-out;
        position: relative;
        transform: scale(0.1);

        @include mixins.max-screen(768px) {
          width: 21.33vw;
          max-width: auto;
        }
      }
      &.inview {
        .caseStudy_pt2 {
          transform: scale(1);
        }
      }
    }
    &.top {
      top: 0%;
      right: 10%;
      @include mixins.max-screen(768px) {
        top: 15%;
        right: 14%;
      }
    }
    &.bottom {
      bottom: 35%;
      left: -3%;
      @include mixins.max-screen(768px) {
        bottom: 10%;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
:deep(.pagination) {
  display: flex;
  justify-content: center;
  gap: min(10px, 0.69vw);
  margin: min(40px, 2.77vw) 0 0;
  /* z-index を上げたいならここで */
  z-index: 10;
  list-style: none;
}

:deep(.page) {
  width: min(100px, 6.94vw);
  height: min(5px, 0.34vw);
  background-color: #A0A0A0;
  border-radius: min(150px, 10.41vw);
}

:deep(.page.is-active) {
  background-color: #3676B6;
}
</style>

