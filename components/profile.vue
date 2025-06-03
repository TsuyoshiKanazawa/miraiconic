<template>
  <section class="profile">
    <div class="profile__container">
      <div class="mask">
        <h3 class="profile__title" v-observe="'inview'">Profile</h3>
      </div>
      <img v-if="!useIsMobile().value" src="/img/titleLine.svg" alt="line" class="title_line">
      <img v-else src="/img/titleLine-sp.svg" alt="line" class="title_line">
      <div class="mask">
        <h3 class="profile__title__sub" v-observe="'inview'">会社情報</h3>
      </div>
      <div class="profile__container__item" v-observe="'inview'">
        <svg v-if="!useIsMobile().value" class="profile__container__item__line" width="1120" height="6" viewBox="0 0 1120 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="2" width="1114" height="2" fill="#252526"/>
          <circle cx="3" cy="3" r="3" fill="#252526"/>
          <circle cx="1117" cy="3" r="3" fill="#252526"/>
        </svg>
        <svg v-if="useIsMobile().value" class="profile__container__item__line" width="329" height="5" viewBox="0 0 329 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="325" height="1" fill="#252526"/>
          <circle cx="2.5" cy="2.5" r="2.5" fill="#252526"/>
          <circle cx="326.5" cy="2.5" r="2.5" fill="#252526"/>
        </svg>
        <div class="profile__container__item__text">
          <h4>会社名</h4>
          <p>株式会社ミライコニック</p>
        </div>
      </div>
      <div class="profile__container__item" v-observe="'inview'">
        <svg v-if="!useIsMobile().value" class="profile__container__item__line" width="1120" height="6" viewBox="0 0 1120 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="2" width="1114" height="2" fill="#252526"/>
          <circle cx="3" cy="3" r="3" fill="#252526"/>
          <circle cx="1117" cy="3" r="3" fill="#252526"/>
        </svg>
        <svg v-if="useIsMobile().value" class="profile__container__item__line" width="329" height="5" viewBox="0 0 329 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="325" height="1" fill="#252526"/>
          <circle cx="2.5" cy="2.5" r="2.5" fill="#252526"/>
          <circle cx="326.5" cy="2.5" r="2.5" fill="#252526"/>
        </svg>
        <div class="profile__container__item__text">
          <h4>設立年月日</h4>
          <p>2023年6月5日</p>
        </div>
      </div>
      <div class="profile__container__item" v-observe="'inview'">
        <svg v-if="!useIsMobile().value" class="profile__container__item__line" width="1120" height="6" viewBox="0 0 1120 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="2" width="1114" height="2" fill="#252526"/>
          <circle cx="3" cy="3" r="3" fill="#252526"/>
          <circle cx="1117" cy="3" r="3" fill="#252526"/>
        </svg>
        <svg v-if="useIsMobile().value" class="profile__container__item__line" width="329" height="5" viewBox="0 0 329 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="325" height="1" fill="#252526"/>
          <circle cx="2.5" cy="2.5" r="2.5" fill="#252526"/>
          <circle cx="326.5" cy="2.5" r="2.5" fill="#252526"/>
        </svg>
        <div class="profile__container__item__text">
          <h4>資本金</h4>
          <p>300万円</p>
        </div>
      </div>
      <div class="profile__container__item" v-observe="'inview'">
        <svg v-if="!useIsMobile().value" class="profile__container__item__line" width="1120" height="6" viewBox="0 0 1120 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="2" width="1114" height="2" fill="#252526"/>
          <circle cx="3" cy="3" r="3" fill="#252526"/>
          <circle cx="1117" cy="3" r="3" fill="#252526"/>
        </svg>
        <svg v-if="useIsMobile().value" class="profile__container__item__line" width="329" height="5" viewBox="0 0 329 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="325" height="1" fill="#252526"/>
          <circle cx="2.5" cy="2.5" r="2.5" fill="#252526"/>
          <circle cx="326.5" cy="2.5" r="2.5" fill="#252526"/>
        </svg>
        <div class="profile__container__item__text">
          <h4>所在地</h4>
          <a target="_blank" href="https://www.google.co.jp/maps/search/%E3%80%92108-0075+%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%AF%E5%8C%BA%E6%B8%AF%E5%8D%972-17-1+%E4%BA%AC%E7%8E%8B%E5%93%81%E5%B7%9D%E3%83%93%E3%83%AB2%E9%9A%8E06%E5%8F%B7%E5%AE%A4/@35.6274621,139.7391918,883m/data=!3m2!1e3!4b1?hl=ja&entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D">
            〒108-0075 東京都港区<br class="sp-only">港南2-17-1 京王品川ビル2階06号室
            <svg width="34" height="42" viewBox="0 0 34 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 0C7.62672 0 0.000173068 7.5369 0.000173068 16.7895C-0.0614513 30.324 16.354 41.5464 17 42C17 42 34.0615 30.324 33.9998 16.8C33.9998 7.5369 26.3733 0 17 0ZM17 25.2C12.3038 25.2 8.50009 21.441 8.50009 16.8C8.50009 12.159 12.3038 8.4 17 8.4C21.6962 8.4 25.4999 12.159 25.4999 16.8C25.4999 21.441 21.6962 25.2 17 25.2Z" fill="black"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="profile__container__item" v-observe="'inview'">
        <svg v-if="!useIsMobile().value" class="profile__container__item__line" width="1120" height="6" viewBox="0 0 1120 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="2" width="1114" height="2" fill="#252526"/>
          <circle cx="3" cy="3" r="3" fill="#252526"/>
          <circle cx="1117" cy="3" r="3" fill="#252526"/>
        </svg>
        <svg v-if="useIsMobile().value" class="profile__container__item__line" width="329" height="5" viewBox="0 0 329 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="325" height="1" fill="#252526"/>
          <circle cx="2.5" cy="2.5" r="2.5" fill="#252526"/>
          <circle cx="326.5" cy="2.5" r="2.5" fill="#252526"/>
        </svg>
        <div class="profile__container__item__text">
          <h4>代表者</h4>
          <p>代表取締役　山口 晃</p>
        </div>
        <svg v-if="!useIsMobile().value" class="profile__container__item__line" width="1120" height="6" viewBox="0 0 1120 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="2" width="1114" height="2" fill="#252526"/>
          <circle cx="3" cy="3" r="3" fill="#252526"/>
          <circle cx="1117" cy="3" r="3" fill="#252526"/>
        </svg>
        <svg v-if="useIsMobile().value" class="profile__container__item__line" width="329" height="5" viewBox="0 0 329 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="325" height="1" fill="#252526"/>
          <circle cx="2.5" cy="2.5" r="2.5" fill="#252526"/>
          <circle cx="326.5" cy="2.5" r="2.5" fill="#252526"/>
        </svg>
      </div>
    </div>
    <!--
    <div class="profile__bg__wrapper1" style="z-index: 1;">
      <div class="profile__bg__wrapper__contents1">
        <img src="/img/profile/profile-pt1.svg" alt="profile_bg" class="profile__container__pt1" v-observe="'inview'">
      </div>
    </div>-->
  </section>
</template>

<script>
import scrollParallaxMixin from '@/mixins/scrollParallaxMixin';
export default {
  name: 'Profile',
  mixins: [scrollParallaxMixin],
}
</script>

<style lang="scss" scoped>
.profile {
  padding-bottom: min(8.33vw, 120px);
  position: relative;
  overflow: hidden;
  background-color: #F2F2F2;
  @include mixins.max-screen(768px) {
    padding-top: 10vw;
    padding-bottom: 18vw;
  }
  &__title {
    font-size: min(5.55vw, 80px);
    text-align: center;
    letter-spacing: 0.01em;
    font-family: 'DinCondensedBold', sans-serif;
    font-weight: normal;
    transform: translateY(100%);
    transition: transform 0.8s ease-in-out;
    color: #252526;
    &.inview {
      transform: translateY(0);
    }
    @include mixins.max-screen(768px) {
      font-size: 16vw;
    }
  }
  .title_line {
    display: block;
    width: 6.25vw;
    max-width: 90px;
    margin: 0 auto;
    @include mixins.max-screen(768px) {
      width: 23.46vw;
      max-width: auto;
    }
  }
  &__title__sub {
    font-size: min(1.25vw, 18px);
    text-align: center;
    letter-spacing: 0.03em;
    margin-top: min(1.25vw, 18px);
    transform: translateY(100%);
    transition: transform 0.8s ease-in-out;
    color: #252526;
    margin-bottom: min(2.77vw, 40px);
    &.inview {
      transform: translateY(0);
    }
    @include mixins.max-screen(768px) {
      font-size: 4.26vw;
    }
  }
  &__container {
    background-color: #fff;
    width: min(88.88vw, 1280px);
    margin: 0 auto;
    padding: min(4.16vw, 60px);
    padding-bottom: min(6.25vw, 90px);
    border-radius: min(8.33vw, 120px);
    position: relative;
    z-index: 2;
    @include mixins.max-screen(768px) {
      width: 92vw;
      padding: 7vw 2vw 12vw;
    }
    &__item {
      opacity: 0;
      transform: translateY(50%);
      transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
      @include mixins.max-screen(768px) {
        transform: translateY(10vw);
      }
      &.inview {
        opacity: 1;
        transform: translateY(0);
      }
      &__line {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
      }
      &__text {
        display: flex;
        justify-content: flex-start;
        gap: min(3.47vw, 50px);
        padding: min(2.08vw, 30px) min(5.97vw, 86px) min(1.38vw, 20px);
        @include mixins.max-screen(768px) {
          gap: 5vw;
          padding: 2.66vw 3.33vw 1vw 2.66vw;
        }
        h4 {
          font-size: min(1.38vw, 20px);
          line-height: min(2.70vw, 39px);
          text-align: end;
          width: min(7.63vw, 110px);
          font-weight: 700;
          color: #252526;
          letter-spacing: 0.05em;
          @include mixins.max-screen(768px) {
            font-size: 3.2vw;
            line-height: 6.4vw;
            width: 16.8vw;
            font-weight: 700;
          }
        }
        p {
          font-size: min(1.80vw, 26px);
          line-height: min(2.70vw, 39px);
          font-weight: 700;
          color: #252526;
          letter-spacing: 0.03em;
          @include mixins.max-screen(768px) {
            font-size: 4.26vw;
            line-height: 6.4vw;
          }
        }
        a {
          font-size: min(1.80vw, 26px);
          line-height: min(2.70vw, 39px);
          font-weight: 700;
          color: #252526;
          letter-spacing: 0.03em;
          transition: opacity 0.1s ease-in-out;
          display: flex;
          gap: min(1.73vw, 25px);
          position: relative;
          @include mixins.max-screen(768px) {
            font-size: 4.26vw;
            line-height: 6.4vw;
            width: 57.33vw;
          }
          svg {
            display: block;
            width: min(2.36vw, 34px);
            height: min(2.91vw, 42px);
            @include mixins.max-screen(768px) {
              width: 3.73vw;
              height: auto;
              position: absolute;
              bottom: 0.5vw;
              right: 38vw;
            }
          }
          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
  }
  .profile__bg__wrapper1 {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    .profile__bg__wrapper__contents1 {
      margin-top: min(48.61vw, 700px);
      margin-left: min(2.77vw, 40px);
      transform: translate3d(0, var(--scroll-offset, 0px), 0);
      transition: transform 0.8s ease-out;
      will-change: transform;
      @include mixins.max-screen(768px) {
        margin-top: 90vw;
      }
      .profile__container__pt1 {
        width: min(10.55vw, 152px);
        transform: scale(0) rotate(30.32deg);
        transition: transform 0.5s ease-in-out;
        @include mixins.max-screen(768px) {
          width: 23.2vw;
        }
        &.inview {
          transform: scale(1) rotate(30.32deg);
        }
      }
    }
  }

}
</style>
