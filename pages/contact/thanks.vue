<template>
  <div class="contact">
    <FormsTop title="CONTACT" subTitle="お問い合わせ" />
    <div class="contact__complete">
      <h2 class="contact__complete__title">お問い合わせが完了しました。</h2>
      <p class="contact__complete__text">この度はお問い合わせいただき、<br class="sp-only">誠にありがとうございます。</p>
      <p class="contact__complete__text">改めて担当者よりご入力いただいた<br class="sp-only">メールアドレスにご返信いたします。</p>
    </div>
    <FormsButtonJp name="TOPへ戻る" link="/" />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.contact {
  background-color: #F2F2F2;
  padding: 0 0 min(140px, 9.72vw);
  @include mixins.max-screen(768px) {
    padding: 0 0 25vw;
  }
  &__complete {
    text-align: center;
    padding: min(147px, 10.20vw) 0 min(90px, 6.25vw);
    @include mixins.max-screen(768px) {
      padding: 20vw 0 5vw;
    }
    .contact__complete__title {
      font-size: min(52px, 3.61vw);
      font-weight: 700;
      color: #252526;
      margin-bottom: min(33px, 2.29vw);
      @include mixins.max-screen(768px) {
        font-size: 5.06vw;
        margin-bottom: 5vw;
      }
    }
    .contact__complete__text {
      font-size: min(22px, 1.52vw);
      font-weight: 500;
      color: #252526;
      @include mixins.max-screen(768px) {
        font-size: 3.73vw;
        line-height: 1.8;
      }
    }
  }
}
</style>