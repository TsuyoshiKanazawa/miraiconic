<template>
  <div class="scroll-wrap" ref="wrap">
    <div class="casestudy">
      <h2 class="casestudy-title">
        Case Study
        <svg width="90" height="10" viewBox="0 0 90 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="3" width="80" height="4" fill="#252526"/>
          <circle cx="85" cy="5" r="5" fill="#252526"/>
          <circle cx="5" cy="5" r="5" fill="#252526"/>
        </svg>
      </h2>
      <div class="casestudy-item-wrap">
        <div class="casestudy-item section--1">
          <div class="casestudy-item-title">
            <p>某大手空間デザイン企業様</p>
            <h3>業務直結型BIMカリキュラムで人材育成</h3>
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
        </div>
        <div class="casestudy-item section--2">
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
        </div>
        <div class="casestudy-item section--3">
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
        </div>
      </div>
      <div class="casestudy-progress">
        <div class="progress" :class="{'active': progress === 1}"></div>
        <div class="progress" :class="{'active': progress === 2}"></div>
        <div class="progress" :class="{'active': progress === 3}"></div>
      </div>
      <div class="caseStudy-bg__wrapper top" :style="{ transform: 'translateY(' + parallaxOffset + 'px)' }">
        <div class="caseStudy-bg__wrapper__contents1" v-observe="'inview'">
          <img src="/img/top/caseStudy-pt1.svg" alt="caseStudyBg1" class="caseStudy_pt1">
        </div>
      </div>
      <div class="caseStudy-bg__wrapper bottom" :style="{ transform: 'translateY(' + parallaxOffset + 'px)' }">
        <div class="caseStudy-bg__wrapper__contents2" v-observe="'inview'">
          <img src="/img/top/caseStudy-pt2.svg" alt="caseStudyBg2" class="caseStudy_pt2">
        </div>
      </div>
    </div>
    
    <!-- ここの高さ分だけスクロールが生まれる（セクション数−1）×100vh -->
    <div class="spacer"></div>  
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const wrap     = ref(null)
const progress = ref(1)

onMounted(async () => {
  await nextTick()
  const el        = wrap.value
  const itemWrap  = el.querySelector('.casestudy-item-wrap')
  const items     = el.querySelectorAll('.casestudy-item')
  const count     = items.length
  if (!itemWrap || count === 0) return

  // ビューポート幅・アイテム幅・間隔
  const wrapWidth = el.clientWidth
  const itemWidth = items[0].getBoundingClientRect().width
  const gapValue  = parseFloat(getComputedStyle(itemWrap).gap) || 0

  // ステップ＆全スクロール距離
  const step     = itemWidth + gapValue
  const distance = step * (count - 1)

  // アイテム幅の半分だけ前倒ししたいオフセット
  const halfOffset = itemWidth / 2

  // 初期 x（１枚目中央）
  const startX = (wrapWidth - itemWidth) / 2
  // 最終 x（最後のアイテム中央）
  const endX   = startX - distance

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: 'top top',
      end:   `+=${distance}`,
      scrub: true,
      pin:   true,
      onUpdate(self) {
        // 今どれだけスクロールしたか（px）
        const curPx = self.progress * distance
        // 半アイテム分前倒し：次のアイテムになるタイミングを早める
        const shifted = curPx + halfOffset

        // 0〜(count-1) の範囲に丸めて、1ベースの index に
        let idx = Math.floor(shifted / step) + 1
        idx = Math.min(count, Math.max(1, idx))

        progress.value = idx
      }
    }
  })

  // 実際の横移動アニメーション
  tl.fromTo(
    itemWrap,
    { x: startX },
    { x: endX,   ease: 'none', duration: 1 },
    0
  )
})
</script>

<script>
import scrollParallaxMixin from '@/mixins/scrollParallaxMixin';
export default {
  mixins: [scrollParallaxMixin],
}
</script>

<style lang="scss" scoped>
.scroll-wrap {
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
  padding: min(80px, 5.55vw) 0;
  .casestudy-title {
    position: relative;
    border-radius: min(120px, 37.01vw);
    text-align: center;
    font-family: 'DinCondensedBold', sans-serif;
    font-weight: normal;
    letter-spacing: 0.01em;
    font-size: min(80px, 5.55vw);
    width: fit-content;
    margin: 0 auto;
    svg {
      position: absolute;
      bottom: -5%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .casestudy-item-wrap {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: min(40px, 2.77vw);
    margin: min(60px, 4.16vw) 0 0;
    position: relative;
    z-index: 3;
    .casestudy-item {
      position: relative;
      background-color: #fff;
      width: min(1220px, 83.33vw);
      height: min(533px, 37.01vw);
      border-radius: min(120px, 8.33vw);
      padding: min(40px, 2.77vw);
      .casestudy-item-title {
        position: relative;
        text-align: center;
        p {
          font-size: min(18px, 1.25vw);
          font-weight: 500;
        }
        h3 {
          font-size: min(36px, 2.5vw);
          font-weight: 700;
        }
      }
      .casestudy-item-tag {
        display: flex;
        justify-content: center;
        gap: min(10px, 0.69vw);
        padding: min(20px, 1.38vw) 0;
        .tag {
          font-size: min(20px, 1.38vw);
          font-weight: 500;
          width: min(160px, 11.11vw);
          height: min(32px, 2.22vw);
          background-color: #DCF4FF;
          text-align: center;
          line-height: min(32px, 2.22vw);
          border-radius: min(150px, 10.41vw);
          &.dark {
            color: #fff;
            background-color: #3676B6;
          }
        }
      }
      .casestudy-item-contents {
        background-color: #F2F2F2;
        width: min(1040px, 72.22vw);
        height: min(282px, 19.58vw);
        border-radius: min(10px, 0.69vw);
        margin: min(10px, 0.69vw) auto 0;
        padding: min(40px, 2.77vw) 0;
        .casestudy-item-contents-text {
          display: flex;
          justify-content: center;
          gap: min(30px, 2.08vw);
          margin-bottom: min(20px, 1.38vw);
          h4 {
            font-size: min(20px, 1.38vw);
            font-weight: 700;
            text-align: right;
            letter-spacing: 0.03em;
            width: min(165px, 11.45vw);
          }
          p {
            font-size: min(18px, 1.25vw);
            font-weight: 500;
            width: min(772px, 53.61vw);
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

/* spacer で (セクション数ー1)×100vh のスクロール領域を確保 */
.spacer {
  height: 400vh; /* SECTION2・3 のために 2*100vh */
}
</style>


