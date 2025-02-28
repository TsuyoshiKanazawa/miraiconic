<template>
  <section class="service">
    <div class="service__container">
      <div class="mask">
        <h2 class="service__title" v-observe="'inview'">Service</h2>
      </div>
      <img src="/img/titleLine.png" alt="line" class="title_line">
      <div class="mask">
        <h3 class="service__title__sub" v-observe="'inview'">ミライコニックのサービス</h3>
      </div>
      <div class="service__container__contents">
        <div class="service__container__contents__item" v-observe="'inview'">
          <img src="/img/service/service1.jpg" alt="service1" class="service__container__contents__item__img">
          <div class="service__container__contents__item__text" v-observe="'inview'">
            <h4 class="service__container__contents__item__text__title">モデリング・ファミリ制作</h4>
            <p class="service__container__contents__item__text__text">
              高度な技術力を持つスペシャリストが、<br>
              プロジェクトにおけるBIM活用の目的に応じて最適なモデルや<br>
              ファミリを制作いたします。<br>
              統一された入力による整然としたモデリングや過不足のない<br>
              ファミリ設計で、実務でのベストプラクティスを実現します。
            </p>
          </div>
          <img src="/img/service/service-pt1.png" alt="service-pt1" class="service__container__contents__item__pt1">
        </div>
        <div class="service__container__contents__item" v-observe="'inview'">
          <div class="service__container__contents__item__text" v-observe="'inview'">
            <h4 class="service__container__contents__item__text__title">ビジュアライゼーション制作</h4>
            <p class="service__container__contents__item__text__text">
              BIMモデルと連携したスピーディーなビジュアライゼーションを<br>
              制作し、合意形成をスムーズにサポートいたします。<br>
              静止画、パノラマ、動画、VRに加え、<br>
              特別なソフトウェア環境がなくても利用できる<br>
              ウォークスルーデータの納品も可能です。
            </p>
          </div>
          <img src="/img/service/service2.jpg" alt="service2" class="service__container__contents__item__img">
        </div>
        <div class="service__container__contents__item" v-observe="'inview'">
          <img src="/img/service/service3.jpg" alt="service3" class="service__container__contents__item__img">
          <div class="service__container__contents__item__text" v-observe="'inview'">
            <h4 class="service__container__contents__item__text__title">コンサルティング</h4>
            <p class="service__container__contents__item__text__text">
              BIM導入・活用に関する豊富な知見と実績を基に、<br>
              お客様の課題解決をサポートいたします。<br>
              最適なBIM戦略の策定から実際のテンプレート制作まで、<br>
              包括的にも部分的にも対応可能です。<br>
              実践的なアドバイスで、現場で使えるノウハウを提供いたします。
            </p>
          </div>
          <img src="/img/service/service-pt2.png" alt="service-pt2" class="service__container__contents__item__pt2">
        </div>
        <div class="service__container__contents__item" v-observe="'inview'">
          <div class="service__container__contents__item__text" v-observe="'inview'">
            <h4 class="service__container__contents__item__text__title">教育支援</h4>
            <p class="service__container__contents__item__text__text">
              各社に合わせたBIM教育プログラムで人材育成を支援します。<br>
              基本から実践的なカリキュラム策定、教材制作、<br>
              リアルおよびオンラインによる講師対応をいたします。<br>
              さらに、プロジェクトに伴走する形でのマンツーマン講師も<br>
              承っております。
            </p>
          </div>
          <img src="/img/service/service4.jpg" alt="service4" class="service__container__contents__item__img">
        </div>
      </div>
      <img src="/img/service/service-pt3.png" alt="service-pt3" class="service__container__pt3">
    </div>
  </section>
</template>

<script>
export default {
  name: 'Service',
}
</script>

<style lang="scss" scoped>
.service {
  background-color: #F2F2F2;
  color: #252526;
  .service__container {
    padding-top: 5.55vw;
    padding-bottom: min(9.58vw, 138px);
    position: relative;
    overflow: hidden;
    .service__title {
      font-size: min(5.55vw, 80px);
      text-align: center;
      letter-spacing: 0.01em;
      font-family: 'DinCondensedBold', sans-serif;
      transform: translateY(100%);
      transition: transform 0.8s ease-in-out;
      &.inview {
        transform: translateY(0);
      }
    }
    .title_line {
      display: block;
      width: 6.25vw;
      max-width: 90px;
      margin: 0 auto;
    }
    .service__title__sub {
      font-size: min(1.25vw, 18px);
      text-align: center;
      letter-spacing: 0.03em;
      margin-top: min(1.25vw, 18px);
      transform: translateY(100%);
      transition: transform 0.8s ease-in-out;
      &.inview {
        transform: translateY(0);
      }
    }
    .service__container__contents {
      margin-top: min(2.56vw, 37px);
      .service__container__contents__item {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        
        &__img {
          max-width: 640px;
          width: 44.44vw;
          height: 100%;
          object-fit: cover;
          border-radius: min(8.33vw, 120px);
          position: relative;
          transition: box-shadow 0.3s ease-in-out;
          &:nth-child(odd) {
            z-index: 10;
            box-shadow: max(-0.34vw, -5px) max(-0.34vw, -5px) 0px 0px #85C1DE;
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
          h4 {
            font-size: min(2.5vw, 36px);
            letter-spacing: 0.03em;
            max-width: 510px;
            width: 35.41vw;
            transform: translateY(min(3.47vw, 50px));
            transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
            opacity: 0;
          }
          p {
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
            }
            &:nth-child(even) {
              box-shadow: min(0.69vw, 10px) max(-0.69vw, -10px) 0px 0px #3676B6;
            }
          }
        }
        &__pt1 {
          position: absolute;
          top: 90%;
          left: 0;
          max-width: 163px;
          width: 11.31vw;
          transform: translateX(max(-4.02vw, -58px)) rotate(-16.03deg);
        }
        &__pt2 {
          position: absolute;
          top: 0;
          right: 2%;
          max-width: 132px;
          width: 9.16vw;
          z-index: 8;
        }
      }
    }
    &__pt3 {
      position: absolute;
      bottom: max(-2.98vw, -43px);
      left: 0;
      max-width: 89px;
      width: 6.18vw;
      z-index: 8;
      transform: rotate(30.32deg);
    }
  }
}
</style>
