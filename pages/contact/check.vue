<template>
  <div class="contact">
    <FormsTop title="CONTACT" subTitle="お問い合わせ" />
    <p class="contact__text">以下のお問い合わせ内容をご確認のうえ<br class="sp-only">「送信」よりお問い合わせください。</p>
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
      <div class="contact__background__checkbox">
        <input type="checkbox" id="checkbox" v-model="checkbox">
        <label for="checkbox">
          <a href="/privacy" target="_blank">プライバシーポリシー</a> に同意のうえ、<br class="sp-only">送信してください。
        </label>
      </div>
      <button class="contact__background__button back" @click="back">
        戻る
        <img src="/img/contact/contact-arrow-left.svg" alt="back">
      </button>
      <button class="contact__background__button" @click="send" :disabled="!checkbox">
        送信
        <img src="/img/contact/contact-arrow.svg" alt="back">
      </button>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

export default {
  mounted() {
    const contactItem = useContactItem().value;
    console.log(contactItem);
  },
  data() {
    return {
      checkbox: false,
    }
  },
  methods: {
    async send() {
      useLoading().value = true;
      const config = useRuntimeConfig();
      const serviceID = config.public.emailjs.serviceID;
      const templateID = config.public.emailjs.templateID;
      const publicKey  = config.public.emailjs.publicKey;

      const contactItem = {
        name: useContactItem().value.name,
        nameFurigana: useContactItem().value.nameFurigana,
        companyName: useContactItem().value.companyName,
        email: useContactItem().value.email,
        emailCheck: useContactItem().value.emailCheck,
        phoneNumber: useContactItem().value.phoneNumber,
        message: useContactItem().value.message,
      };

      await emailjs.send(serviceID, templateID, contactItem, publicKey)
        .then(() => {
          this.$router.push('/contact/thanks')
          useContactItem().value = {
            name: '',
            nameFurigana: '',
            companyName: '',
            email: '',
            emailCheck: '',
            phoneNumber: '',
            message: '',
          }
        })
        .catch((error) => {
          console.error('送信エラー:', error);
          alert('送信に失敗しました');
          useLoading().value = false;
        })
        .finally(() => {
          useLoading().value = false;
        })
    },
    back() {
      this.$router.push('/contact');
      const smoother = ScrollSmoother.get()
      if (smoother) {
        smoother.kill()   // これで慣性スクロールを即オフにする
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  background-color: #F2F2F2;
  padding: 0 0 min(60px, 5.55vw);
  .contact__th {
    font-size: min(22px, 1.52vw);
    text-align: center;
    font-weight: 500;
    margin-top: min(70px, 4.86vw);
    color: #252526;
    @include mixins.max-screen(768px) {
      font-size: min(19px, 5.06vw);
      margin-top: min(50px, 13.33vw);
    }
  }
  .contact__text {
    font-size: min(16px, 1.11vw);
    text-align: center;
    margin: min(70px, 4.86vw) 0;
    font-weight: 500;
    color: #252526;
    @include mixins.max-screen(768px) {
      font-size: min(14px, 3.73vw);
      line-height: 1.8;
      margin: 10vw 0;
    }
  }
  .contact__background {
    background-color: #fff;
    width: min(1280px, 88.88vw);
    border-radius: min(120px, 8.33vw);
    margin: min(43px, 2.98vw) auto;
    padding: min(80px, 5.55vw);
    @include mixins.max-screen(768px) {
      width: 92vw;
      border-radius: 10.66vw;
      padding: 8vw 5vw 20vw;
      margin-top: 10vw;
    }
    &__container {
      &__required {
        font-size: min(16px, 1.11vw);
        font-weight: 500;
        color: #FF0066;
        font-weight: 700;
        text-align: center;
      }
      &__form {
        margin-top: min(20px, 1.38vw);
        @include mixins.max-screen(768px) {
          margin-top: 5.33vw;
        }
        label {
          font-size: min(22px, 1.52vw);
          font-weight: 700;
          line-height: 2;
          color: #252526;
          @include mixins.max-screen(768px) {
            font-size: 5.33vw;
            line-height: 2.5;
          }
          span {
            color: #FF0066;
            font-weight: 700;
          }
        }
        input {
          width: 100%;
          height: min(60px, 4.16vw);
          padding: min(30px, 2.08vw);
          border-radius: min(12px, 0.83vw);
          background-color: #F2F2F2;
          font-size: min(18px, 1.25vw);
          font-weight: 700;
          color: #252526;
          &::placeholder {
            font-weight: 500;
          }
          @include mixins.max-screen(768px) {
            font-size: 4.26vw;
            height: 13.33vw;
            border-radius: 1.33vw;
          }
          &:disabled {
            color: #252526;
            -webkit-text-fill-color: #252526;
            opacity: 1;
          }
        }
        textarea {
          width: 100%;
          height: min(367px, 25.48vw);
          padding: min(30px, 2.08vw);
          border-radius: min(12px, 0.83vw);
          background-color: #F2F2F2;
          resize: none;
          font-size: min(18px, 1.25vw);
          font-weight: 700;
          color: #252526;
          &::placeholder {
            font-weight: 500;
          }
          &:disabled {
            color: #252526;
            -webkit-text-fill-color: #252526;
            opacity: 1;
          }
          @include mixins.max-screen(768px) {
            font-size: 4.26vw;
            height: 80vw;
            border-radius: 1.33vw;
          }
        }
      }
    }
    &__checkbox {
      margin: min(50px, 3.47vw) 0;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      @include mixins.max-screen(768px) {
        position: relative;
      }
      input {
        margin-right: min(10px, 0.69vw);
        width: min(22px, 1.52vw);
        height: min(22px, 1.52vw);
        align-self: center;
        @include mixins.max-screen(768px) {
          width: 4.26vw;
          height: 4.26vw;
          position: absolute;
          top: 25%;
          left: 0;
          transform: translateY(-50%);
        }
      }
      label {
        font-size: min(22px, 1.52vw);
        font-weight: 500;
        color: #252526;
        line-height: 1;
        @include mixins.max-screen(768px) {
          font-size: 4vw;
          line-height: 1.8;
          margin-left: 5.5vw;
        }
        a {
          color: #1900FF !important;
          text-decoration: underline;
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
      margin: 2vw auto 1vw;
      display: block;
      transition: background-color 0.3s ease-in-out, color 0.2s ease-in-out;
      border: 2px solid #3676B6;
      position: relative;
      font-weight: 500;
      @include mixins.max-screen(768px) {
        width: 100%;
        height: 10.66vw;
        border-radius: 16vw;
        font-size: 5.33vw;
        margin: 5vw auto 2vw;
        border: 0.53vw solid #3676B6;
        box-shadow: 1.06vw 1.06vw 0 0 #252526;
      }
      img {
        position: absolute;
        top: 20%;
        right: min(12px, 0.83vw);
        width: min(36px, 2.4vw);
        height: min(36px, 2.4vw);
        @include mixins.max-screen(768px) {
          width: 7.46vw;
          height: 7.46vw;
          right: 1vw;
          top: 15%;
        }
      }
      &:hover {
        background-color: #fff;
        color: #3676B6;
        img {
          filter: brightness(0) saturate(100%) invert(42%) sepia(54%) saturate(576%) hue-rotate(168deg) brightness(92%) contrast(95%);
        }
      }
      &.back {
        background-color: #A0A0A0;
        color: #fff;
        border: 2px solid #A0A0A0;
        @include mixins.max-screen(768px) {
          border: 0.53vw solid #A0A0A0;
        }
        img {
          left: min(12px, 0.83vw);
          @include mixins.max-screen(768px) {
            left: 1vw;
          }
        }
        &:hover {
          background-color: #fff;
          color: #A0A0A0;
          img {
            filter: brightness(0) saturate(100%) invert(69%) sepia(0%) saturate(0%) hue-rotate(197deg) brightness(95%) contrast(85%);
          }
        }
      }
      &:disabled {
        background-color: #3676B6;
        color: #fff;
        opacity: 0.5;
        cursor: not-allowed;
        &:hover {
          background-color: #3676B6;
          color: #fff;
          img {
            filter: brightness(0) saturate(100%) invert(100%) sepia(84%) saturate(7%) hue-rotate(201deg) brightness(102%) contrast(99%);
          }
        }
      }
    }
    .error-summary {
      padding: 1rem;
      margin: 1rem 0;
      border-radius: 4px;
      p {
        list-style: none;
        color: #e53935 !important;
        font-size: min(18px, 1.25vw);
        line-height: 1.4;
        text-align: center;
      }
    }
  }
}
</style>