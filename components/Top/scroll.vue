<template>
  <div class="scroll-wrap">
    <!-- ここだけを画面にピン固定 -->
    <div class="sections" ref="sections">
      <section ref="sec1" class="section section--1">
        <div class="abouts-mask left" ref="leftMask"></div>
        <div class="abouts-mask right" ref="rightMask"></div>
        <div class="abouts" ref="abouts">
          <h2>About</h2>
          <p class="about-text-en">We support the use of <br>
            Building Information Modeling.</p>
          <p class="about-text-ja">私たちは、BIMによる建設プロジェクトの革新をトータルにサポートいたします。</p>
          <FormsButton name="About" link="/about" />
        </div>
      </section>
      <section ref="sec2" class="section section--2">
        <div class="service-container">
          <div class="service-wrap">
            <div class="service-title">
              <h2>Service</h2>
              <p>BIM活用の制作受託から<br>
                推進・教育支援までを<br>
                トータルサポート​</p>
            </div>
            <div class="service-list">
              <div class="service-item service-item--1" ref="serviceItem1">
                <h3>01</h3>
                <h4>制作受託サービス</h4>
                <p>意匠・構造・設備（MEP）の各分野における、企画から施工・維持管理までの<br>
                  あらゆるフェーズに対応したBIMモデルの受託制作を行っています。</p>
              </div>
              <svg class="service-cross" ref="serviceCross" width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.41406" width="120" height="2" rx="1" transform="rotate(45 1.41406 0)" fill="white"/>
                <rect y="84.8535" width="120" height="2" rx="1" transform="rotate(-45 0 84.8535)" fill="white"/>
              </svg>
              <div class="service-item service-item--2" ref="serviceItem2">
                <h3>02</h3>
                <h4>推進・教育支援サービス​</h4>
                <p>企業や個人のお客様に向けて、<br>
                  BIM活用の推進(導入·定着)および教育サービスをご提供しています。</p>
              </div>
            </div>
          </div>
          <FormsButtonWhite name="Service" link="/service" />
        </div>
      </section>
      <section ref="sec3" class="section section--3">
        <img src="/img/top/scrollConnection.jpg" alt="">
        <div class="features-wrap">
          <div class="features-wrap-container">
            <div class="features-item">
              <h2 class="features-title">Features</h2>
              <p class="features-item-text1">ミライコニックは、<br>本気で制作する人が、本気で教えるチームです。</p>
              <p class="features-item-text2">私たちが目指すのは、<br>“実務に根づくBIM”。</p>
              <p class="features-item-text3">技術力と伝える力、その両輪で現場に向き合い、<br>お客様に寄り添います。</p>
              <p class="features-item-text4">ただ新しいだけのDXではなく、<br>変革の足元を照らし続けます。</p>
            </div>
            <FormsButtonWhite class="features-button" name="More" link="/about" />
          </div>
          <img src="/img/top/topFeatures-pt1.svg" alt="background" class="features-pt1">
          <img src="/img/top/topFeatures-pt2.svg" alt="background" class="features-pt2">
        </div>
      </section>
    </div>

    <!-- ここの高さ分だけスクロールが生まれる（セクション数−1）×100vh -->
    <div class="spacer"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

onMounted(() => {
  if (!process.client) return
  gsap.registerPlugin(ScrollTrigger)

  const sections = document.querySelector('.sections')
  const about    = document.querySelector('.abouts')
  const leftMask = document.querySelector('.abouts-mask.left')
  const rightMask = document.querySelector('.abouts-mask.right')

  const sec2     = document.querySelector('.section--2')
  const serviceItem1 = document.querySelector('.service-item.service-item--1')
  const serviceItem2 = document.querySelector('.service-item.service-item--2')
  const serviceCross = document.querySelector('.service-cross')

  const sec3     = document.querySelector('.section--3')
  const featuresItemText1 = document.querySelector('.features-item-text1')
  const featuresItemText2 = document.querySelector('.features-item-text2')
  const featuresItemText3 = document.querySelector('.features-item-text3')
  const featuresItemText4 = document.querySelector('.features-item-text4')
  const featuresButton = document.querySelector('.features-button')
  const featuresPt1 = document.querySelector('.features-pt1')
  const featuresPt2 = document.querySelector('.features-pt2')

  const sectionCount  = 3
  const scrollAmount  = (sectionCount - 1) * 100   // =200
  const mappedAmount  = scrollAmount * 7           // =1400

  // 初期状態をセット
  gsap.set(about, { yPercent: 300 })
  gsap.set(leftMask, { left: '-100%' })
  gsap.set(rightMask, { right: '-100%' })

  gsap.set(sec2, { yPercent: 100 })
  gsap.set(serviceItem1, { yPercent: 400 })
  gsap.set(serviceCross, { opacity: 0 })
  gsap.set(serviceItem2, { yPercent: 300 })

  gsap.set(sec3, { yPercent: 175 })
  gsap.set(featuresItemText1, { yPercent: 50, opacity: 0 })
  gsap.set(featuresItemText2, { yPercent: 50, opacity: 0 })
  gsap.set(featuresItemText3, { yPercent: 50, opacity: 0 })
  gsap.set(featuresItemText4, { yPercent: 50, opacity: 0 })
  gsap.set(featuresButton, { yPercent: 50, opacity: 0 })
  gsap.set(featuresPt1, { yPercent: 500 })
  gsap.set(featuresPt2, { yPercent: 500 })


  // タイムライン作成
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sections,
      start: 'top top',
      end: `+=${mappedAmount}%`,
      scrub: true,
      pin: true,
      pinSpacing: false,
      invalidateOnRefresh: true  
    }
  })

  // 1) Aboutテキストを下→中にスライドアップ
  tl .addLabel('aboutIn') // 同時進行用ラベル
    .to(about, { yPercent: 0, duration: 1 }, 'aboutIn')
    .to(leftMask, { left: 0, duration: 1 }, 'aboutIn')
    .to(rightMask, { right: 0, duration: 1 }, 'aboutIn')
    .to({}, { duration: 0.3 }) // マージン

  // 2) Service セクションを下→中にスライドイン
  tl .addLabel('serviceIn')
    .to(about, { yPercent: -180, duration: 1 }, 'serviceIn')
    .to(sec2, { yPercent: 0, duration: 1 }, 'serviceIn')
  
  // 3) Service セクションのアイテムを下→中にスライドイン
  tl .to(serviceItem1, { yPercent: 0, duration: 1, opacity: 1 })
  tl .to(serviceItem2, { yPercent: 0, duration: 1, opacity: 1 })
  tl .to(serviceCross, { duration: 0.5, opacity: 1 })
  tl .to({}, { duration: 0.2 })// マージン

  // 4) Features セクションを下→中にスライドイン
  tl .to(sec3, { yPercent: 0, duration: 1.7 })
    .addLabel('featuresStart')
    .to(featuresItemText1, { yPercent: 0, duration: 0.8, opacity: 1 }, 'featuresStart')
    .to(featuresItemText2, { yPercent: 0, duration: 0.8, opacity: 1 })
    .to(featuresItemText3, { yPercent: 0, duration: 0.8, opacity: 1 })
    .addLabel('featuresEnd')
    .to(featuresItemText4, { yPercent: 0, duration: 0.8, opacity: 1 }, 'featuresEnd')
    .to(featuresButton, { yPercent: 0, duration: 0.8, opacity: 1 }, 'featuresEnd')
    .to(featuresPt1, { yPercent: 0, duration: 1.8 }, 'featuresStart')
    .to(featuresPt2, { yPercent: 0, duration: 1.8 }, 'featuresStart')

})
</script>

<style lang="scss" scoped>
.scroll-wrap {
  position: relative;
  z-index: 1;
}

/* ピン固定されるセクション群 */
.sections {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

/* 各セクションは絶対配置で重ねる */
.section {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  font-size: 2rem;
  color: white;
}

/* z-index順に前面へ */
.section--1 { 
  background-image: url('/img/top/aboutBg1.jpg');
  background-size: cover;
  background-position: center;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  .abouts-mask {
    position: absolute;
    height: 50%;
    background-color: #ffffff80;
    &.left {
      top: 0;
      left: 0;
      width: 100%;
    }
    &.right {
      top: 50%;
      right: 0;
      width: 100%;
    }
  }
  .abouts {

    h2 {
      color: #3676B6;
      font-size: min(5.55vw, 80px);
      font-family: 'DinCondensedBold', sans-serif;
      font-weight: normal;
      letter-spacing: 0.01em;
    }
    p {
      color: #252526;
    }
    .about-text-en {
      font-size: min(6.25vw, 90px);
      line-height: 1;
      font-weight: 700;
      font-family: 'DinCondensedBold', sans-serif;
      font-weight: normal;
      letter-spacing: 0.02em;
      margin-top: min(2.08vw, 30px);
    }
    .about-text-ja {
      font-size: min(1.66vw, 24px);
      font-weight: 500;
      letter-spacing: 0.03em;
      margin: min(3.47vw, 50px) 0;
    }
  }
}
.section--2 {
  background: #3676B6;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  .service-wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: min(10.41vw, 150px);
    margin: 0 0 min(3.47vw, 50px);
    .service-title {
      h2 {
        font-size: min(11.11vw, 160px);
        font-family: 'DinCondensedBold', sans-serif;
        font-weight: normal;
        letter-spacing: 0.03em;
      }
      p {
        font-size: min(1.94vw, 28px);
        font-weight: 500;
        letter-spacing: 0.03em;
        line-height: 1.8;
      }
    }
    .service-cross {
      display: block;
      margin: min(3.125vw, 45px) auto;
    }
    .service-list {
      .service-item {
        text-align: center;
        h3 {
          font-size: min(8.33vw, 120px);
          font-family: 'DinCondensedBold', sans-serif;
          font-weight: normal;
          letter-spacing: 0.03em;
        }
        h4 {
          font-size: min(2.91vw, 42px);
          font-weight: 700;
          letter-spacing: 0.03em;
        }
        p {
          font-size: min(1.11vw, 16px);
          font-weight: 400;
          letter-spacing: 0.03em;
        }
      }
    }
  }
}
.section--3 { 
  background: #85C1DE;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    position: absolute;
    top: 0%;
    left: 0;
    transform: translateY(-100%);
    width: 100%;
  }
  .features-wrap {
    position: relative;
    width: 100%;
    .features-wrap-container {
      margin-top: -3%;

      .features-item {
        position: relative;
        width: fit-content;
        margin: 0 auto;
        padding: min(3.47vw, 50px) 0;
        z-index: 1;
        p {
          font-size: min(1.94vw, 28px);
          font-weight: 400;
          letter-spacing: 0.03em;
          line-height: 2.8;
        }
        h2 {
          font-size: min(11.11vw, 160px);
          font-family: 'DinCondensedBold', sans-serif;
          font-weight: normal;
          letter-spacing: 0.03em;
          width: fit-content;
          position: absolute;
          top: 23%;
          left: -60%;
          transform: rotate(90deg);
        }
      }

    }
    .features-pt1 {
      position: absolute;
      top: 30%;
      left: -5%;
      width: min(14.86vw, 214px);
    }
    .features-pt2 {
      position: absolute;
      top: 125%;
      left: auto;
      right: -5%;
      width: min(15.97vw, 230px);
    }
  }
}

/* spacer で (セクション数ー1)×100vh のスクロール領域を確保 */
.spacer {
  height: 1400vh; /* SECTION2・3 のために 2*100vh */
}
</style>
