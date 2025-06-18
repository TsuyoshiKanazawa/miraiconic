<template>
  <div class="faq" v-observe="inview">
    <div class="faq-background" />
    <div class="faq-content">
      <h2 class="faq-title">
        FAQ
      </h2>
      <img src="/img/top/titleLineSpWhite.svg" alt="faq" class="faq-line">
      <a href="/about" class="faq-wrap">
        <p>よくあるご質問はこちら</p>
        <img src="/img/top/faqArrow.svg" alt="faq" class="faq-arrow">
      </a>   
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.faq {
  background-color: #F2F2F2;
  padding: 7vw 4vw;
  color: #fff;
  position: relative;
  .faq-content {
    position: relative;
    z-index: 1;
    padding: 10vw 0;
    .faq-title {
      font-size: 16vw;
      text-align: center;
      font-family: 'DinCondensedBold', sans-serif;
      font-weight: normal;
      letter-spacing: 0.01em;
    }
    .faq-line {
      display: block;
      width: 23.46vw;
      margin: 0 auto;
    }
    .faq-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.33vw;
      margin-top: 5vw;
      color: #fff;
      p {
        font-size: 4.26vw;
        font-weight: 700;
        letter-spacing: 0.05em;
      }
      .faq-arrow {
        width: 9.6vw;
      }
    }
  }

  .faq-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #3676B6;
    transform: translateX(-100%);
    transition: transform 0.5s ease-in-out;
  }
  &.inview {
    .faq-background {
      transform: translateX(0);
    }
  }
}
</style>