<template>
  <div class="service">
    <div class="service-title">
      <h2 class="service-title-text" v-observe="'inView'">
        Service
      </h2>
      <p class="service-title-jp" v-observe="'inView'">
        BIM活用の制作受託から<br>
        推進・教育支援までを<br>
        トータルサポート​
      </p>
    </div>
    <div class="service-list">
      <div class="service-item">
        <h3 v-observe="'inView'">01</h3>
        <h4 v-observe="'inView'">制作受託サービス</h4>
        <p v-observe="'inView'">意匠・構造・設備（MEP）の各分野における、企画から施工・維持管理までの<br>
          あらゆるフェーズに対応したBIMモデルの受託制作を行っています。</p>
      </div>
      <img loading="lazy" class="service-cross" src="/img/top/servicecross.svg" alt="service-cross" v-observe="'inView'">
      <div class="service-item">
        <h3 v-observe="'inView'">02</h3>
        <h4 v-observe="'inView'">推進・教育支援サービス​</h4>
        <p v-observe="'inView'">企業や個人のお客様に向けて、<br>
          BIM活用の推進(導入·定着)および教育サービスをご提供しています。</p>
      </div>
    </div>
    <FormsButtonWhite name="Service" link="/service" />
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.service {
  background-color: #3676B6;
  color: #fff;
  padding: 10vw 0 15vw;
  .service-title {
    padding: 0 8vw;
    .service-title-text {
      font-size: 26.66vw;
      font-family: "Barlow Condensed", sans-serif;
      font-weight: 600;
      font-style: normal;
      //letter-spacing: 0.03em;
      letter-spacing: 0.001em;
      opacity: 0;
      transform: translateY(10vw);
      transition: all 0.5s ease-in-out;
      &.inView {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .service-title-jp {
      font-size: 4.8vw;
      letter-spacing: 0.05em;
      line-height: 1.6;
      opacity: 0;
      transform: translateY(10vw);
      transition: all 0.5s ease-in-out;
      &.inView {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
  .service-list {
    padding: 0 7vw;
    .service-item {
      text-align: center;
      h3 {
        font-size: 21.33vw;
        font-family: "Barlow Condensed", sans-serif;
        font-weight: 600;
        font-style: normal;
        //letter-spacing: 0.03em;
        letter-spacing: 0.001em;
        opacity: 0;
        transform: translateY(10vw);
        transition: all 0.5s ease-in-out;
        &.inView {
          opacity: 1;
          transform: translateY(0);
        }
      }
      h4 {
        font-size: 7.46vw;
        font-weight: 700;
        letter-spacing: 0.03em;
        opacity: 0;
        transform: translateY(10vw);
        transition: all 0.5s ease-in-out;
        &.inView {
          opacity: 1;
          transform: translateY(0);
        }
      }
      p {
        font-size: 3.73vw;
        font-weight: 400;
        letter-spacing: 0.05em;
        line-height: 1.6;
        margin-top: 2vw;
        opacity: 0;
        transform: translateY(10vw);
        transition: all 0.5s ease-in-out;
        &.inView {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
    .service-cross {
      display: block;
      margin: 5vw auto;
      width: 19.2vw;
      opacity: 0;
      transform: translateY(10vw);
      transition: all 0.5s ease-in-out;
      &.inView {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
}
</style>