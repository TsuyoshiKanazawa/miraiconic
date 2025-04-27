<template>
  <div class="contact">
    <FormsTop title="CONTACT" subTitle="お問い合わせ" />
    <p class="contact__text">以下のお問い合わせ内容をご確認のうえ「送信」よりお問い合わせください。</p>
    <div class="contact__background">
      <div class="contact__background__container">
        <Form>
          <div class="contact__background__container__form">
            <label for="name">お名前<span >※</span></label>
            <input type="text" id="name" v-model="useContactItem().value.name" disabled>
          </div>
          <div class="contact__background__container__form">
            <label for="nameFurigana">お名前(フリガナ)<span >※</span></label>
            <input type="text" id="nameFurigana" v-model="useContactItem().value.nameFurigana" disabled>
          </div>
          <div class="contact__background__container__form">
            <label for="companyName">企業名</label>
            <input type="text" id="companyName" v-model="useContactItem().value.companyName" disabled>
          </div>
          <div class="contact__background__container__form">
            <label for="email">メールアドレス<span >※</span></label>
            <input type="email" id="email" v-model="useContactItem().value.email" disabled>
          </div>
          <div class="contact__background__container__form">
            <label for="emailCheck">メールアドレス(再入力)<span >※</span></label>
            <input type="email" id="emailCheck" v-model="useContactItem().value.emailCheck" disabled>
          </div>
          <div class="contact__background__container__form">
            <label for="phoneNumber">電話番号</label>
            <input type="tel" id="phoneNumber" v-model="useContactItem().value.phoneNumber" disabled>
          </div>
          <div class="contact__background__container__form">
            <label for="message">お問い合わせ内容<span >※</span></label>
            <textarea id="message" v-model="useContactItem().value.message" disabled></textarea>
          </div>
        </Form>
      </div>
      <button class="contact__background__button" @click="confirm">
        送信
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5145 10.9087C12.848 10.5088 12 10.9889 12 11.7662V26.2338C12 27.0111 12.848 27.4912 13.5145 27.0913L25.5708 19.8575C26.2182 19.4691 26.2182 18.5309 25.5708 18.1425L13.5145 10.9087Z" fill="white"/>
          <circle cx="18" cy="18" r="17.5" stroke="white"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const contactItem = useContactItem().value
    console.log(contactItem)
  },
  methods: {
    confirm() {
      this.$router.push('/contact/confirm')
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  background-color: #F2F2F2;
  padding: min(60px, 5.55vw) 0;
  .contact__th {
    font-size: min(22px, 1.52vw);
    text-align: center;
    font-weight: 500;
    margin-top: min(70px, 4.86vw);
  }
  .contact__text {
    font-size: min(16px, 1.11vw);
    text-align: center;
    margin-top: min(12px, 0.83vw);
    font-weight: 500;
  }
  .contact__background {
    background-color: #fff;
    width: min(1280px, 88.88vw);
    border-radius: min(120px, 8.33vw);
    margin: min(43px, 2.98vw) auto;
    padding: min(80px, 5.55vw);
    &__container {
      &__form {
        margin-top: min(20px, 1.38vw);
        label {
          font-size: min(26px, 1.80vw);
          font-weight: 700;
          line-height: 2;
          span {
            color: #FF0000;
            font-weight: 700;
          }
        }
        input {
          width: 100%;
          height: min(80px, 5.55vw);
          padding: min(30px, 2.08vw);
          border-radius: min(12px, 0.83vw);
          background-color: #F2F2F2;
          font-size: min(22px, 1.52vw);

        }
        textarea {
          width: 100%;
          height: min(367px, 25.48vw);
          padding: min(30px, 2.08vw);
          border-radius: min(12px, 0.83vw);
          background-color: #F2F2F2;
          resize: none;
          font-size: min(22px, 1.52vw);
        }
      }
    }
    &__button {
      width: min(500px, 34.72vw);
      height: min(60px, 4.16vw);
      background-color: #3676B6;
      color: #fff;
      font-size: min(22px, 1.52vw);
      border-radius: min(60px, 4.16vw);
      box-shadow: min(4px, 0.27vw) min(4px, 0.27vw) 0 0 #252526;
      margin: 4vw auto 1vw;
      display: block;
      transition: background-color 0.3s ease-in-out, color 0.2s ease-in-out;
      border: 2px solid #3676B6;
      position: relative;
      svg {
        position: absolute;
        top: 50%;
        right: min(12px, 0.83vw);
        transform: translateY(-50%);
        width: min(36px, 2.4vw);
        height: min(36px, 2.4vw);
      }
      &:hover {
        background-color: #fff;
        color: #3676B6;
        svg {
          path {
            fill: #3676B6;
          }
          circle {
            stroke: #3676B6;
          }
        }
      }
    }
  }
}
</style>