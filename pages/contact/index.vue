<template>
  <div class="contact">
    <FormsTop title="CONTACT" subTitle="お問い合わせ" />
    <p class="contact__th">弊社ウェブサイトをご覧いただき、<br class="sp-only">誠にありがとうございます。</p>
    <p class="contact__text">下記お問い合わせフォームより、<br class="sp-only">必要事項をご記入ください。<br>
お問い合わせ内容によっては、返信にお時間を<br class="sp-only">いただく場合や、対応が難しい場合が<br class="sp-only">ございますので、予めご了承くださいませ。<br>
なお、よくあるご質問については、<br class="sp-only"><a href="/service#faq">FAQ</a> に掲載しておりますので、<br class="sp-only">こちらもご参照ください。</p>
    <div class="contact__background">
      <div class="contact__background__container">
        <div class="contact__background__container__required">※必須項目</div>
        <Form>
          <div class="contact__background__container__form">
            <label for="name">お名前<span >※</span></label>
            <input type="text" id="name" placeholder="未来 太郎" v-model="useContactItem().value.name">
          </div>
          <div class="contact__background__container__form">
            <label for="nameFurigana">お名前(フリガナ)<span >※</span></label>
            <input type="text" id="nameFurigana" placeholder="ミライ タロウ" v-model="useContactItem().value.nameFurigana">
          </div>
          <div class="contact__background__container__form">
            <label for="companyName">企業名</label>
            <input type="text" id="companyName" placeholder="株式会社ミライコニック" v-model="useContactItem().value.companyName">
          </div>
          <div class="contact__background__container__form">
            <label for="email">メールアドレス<span >※</span></label>
            <input type="email" id="email" placeholder="contact@miraconi.com" v-model="useContactItem().value.email">
          </div>
          <div class="contact__background__container__form">
            <label for="emailCheck">メールアドレス(再入力)<span >※</span></label>
            <input type="email" id="emailCheck" placeholder="contact@miraconi.com" v-model="useContactItem().value.emailCheck">
          </div>
          <div class="contact__background__container__form">
            <label for="phoneNumber">電話番号</label>
            <input type="tel" id="phoneNumber" placeholder="080-1234-5678" inputmode="numeric" pattern="[0-9\-]*" @input="onInputPhoneNumber" v-model="useContactItem().value.phoneNumber">
          </div>
          <div class="contact__background__container__form">
            <label for="message">お問い合わせ内容<span >※</span></label>
            <textarea id="message" placeholder="お問い合わせ内容をご記入ください。" v-model="useContactItem().value.message"></textarea>
          </div>
        </Form>
      </div>
      
      <div v-if="errorMessages.length" class="error-summary">
        <p v-for="(msg, idx) in errorMessages" :key="idx">{{ msg }}</p>
      </div>
      <button class="contact__background__button" @click="confirm">
        確認画面に進む
        <img src="/img/contact/contact-arrow.svg" alt="arrow" class="contact__background__button__arrow">
      </button>
    </div>
  </div>
</template>

<script>
import { ScrollSmoother } from 'gsap/ScrollSmoother'

export default {
  data() {
    return {
      errors: {
        name: '',
        nameFurigana: '',
        email: '',
        emailCheck: '',
        phoneNumber: '',
        message: ''
      },
      contactItem: useContactItem().value,
    }
  },
  computed: {
    errorMessages() {
      return Object.values(this.errors).filter(msg => msg)
    },
  },
  mounted() {
    const smoother = ScrollSmoother.get()
    if (smoother) {
      smoother.kill()   // これで慣性スクロールを即オフにする
    }
  },
  methods: {
    confirm() {
      // エラー初期化
      Object.keys(this.errors).forEach(k => this.errors[k] = '')

      const item = this.contactItem
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      // 必須チェック
      if (!item.name)             this.errors.name           = 'お名前を入力してください'
      if (!item.nameFurigana)     this.errors.nameFurigana   = 'お名前(フリガナ)を入力してください'
      if (!item.email)            this.errors.email          = 'メールアドレスを入力してください'
      if (!item.emailCheck)       this.errors.emailCheck     = 'メールアドレス（再入力）を入力してください'
      if (!item.message)          this.errors.message        = 'お問い合わせ内容を入力してください'

      if (item.nameFurigana && !/^[\u30A0-\u30FFー\s]+$/.test(item.nameFurigana)) {
        this.errors.nameFurigana = 'お名前(フリガナ)はカタカナで入力してください'
      }

      // メール形式チェック
      if (item.email && !emailRegex.test(item.email)) {
        this.errors.email = '正しいメールアドレスを入力してください'
      }
      // メール一致チェック
      if (item.email && item.emailCheck && item.email !== item.emailCheck) {
        this.errors.emailCheck = 'メールアドレスが一致しません'
      }

      // 電話番号形式チェック
      //if (item.phoneNumber && /[^0-9\-]/.test(item.phoneNumber)) {
      //  this.errors.phoneNumber = '正しい電話番号を入力してください'
      //}

      // エラーがあれば一覧を表示したまま終了
      if (this.errorMessages.length) {
        return
      }

      // 問題なければ確認画面へ
      this.$router.push('/contact/check')
    },
    onInputPhoneNumber(e) {
      const raw = e.target.value
      const filtered = raw.replace(/[^0-9\-]/g, '')
      // DOM と v-model 双方に反映
      e.target.value = filtered
      this.contactItem.phoneNumber = filtered
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
    margin-top: min(12px, 0.83vw);
    font-weight: 500;
    color: #252526;
    @include mixins.max-screen(768px) {
      font-size: min(14px, 3.73vw);
      line-height: 1.8;
      margin-top: min(20px, 5.33vw);
    }
    a {
      color: #252526;
      text-decoration: underline;
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
        @include mixins.max-screen(768px) {
          font-size: 5.33vw;
        }
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
            color: #AEAEAE;
          }
          @include mixins.max-screen(768px) {
            font-size: 4.26vw;
            height: 13.33vw;
            border-radius: 1.33vw;
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
            color: #AEAEAE;
          }
          @include mixins.max-screen(768px) {
            font-size: 4.26vw;
            height: 80vw;
            border-radius: 1.33vw;
          }
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
      //box-shadow: min(4px, 0.27vw) min(4px, 0.27vw) 0 0 #252526;
      filter: drop-shadow(min(4px, 0.27vw) min(4px,0.27vw) 0px #252526);
      margin: 4vw auto 1vw;
      display: block;
      transition: background-color 0.3s ease-in-out, color 0.2s ease-in-out;
      border: 2px solid #3676B6;
      position: relative;
      font-weight: 500;
      @include mixins.max-screen(768px) {
        width: 99%;
        height: 10.66vw;
        border-radius: 16vw;
        font-size: 5.33vw;
        margin: 10vw auto 2vw;
        //box-shadow: 1.06vw 1.33vw 0 0 #252526;
        filter: drop-shadow(1.06vw 1.06vw 0px #252526);
      }
      img {
        position: absolute;
        top: 50%;
        right: min(12px, 0.83vw);
        transform: translateY(-50%);
        width: min(36px, 2.4vw);
        height: min(36px, 2.4vw);
        @include mixins.max-screen(768px) {
          width: 7.46vw;
          height: 7.46vw;
          right: 1vw;
        }
      }
      @include mixins.min-screen(769px) {
        &:hover {
          background-color: #fff;
          color: #3676B6;
          img {
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
    .error-summary {
      padding: 1rem;
      margin: 1rem 0;
      border-radius: 4px;
      p {
        list-style: none;
        color: #FF0066 !important;
        font-size: min(18px, 1.25vw);
        line-height: 1.4;
        text-align: center;
        @include mixins.max-screen(768px) {
          font-size: 4.26vw;
        }
      }
    }
  }
}
</style>