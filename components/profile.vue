<template>
  <section class="profile">
    <div class="profile__container">
      <div class="mask">
        <h3 class="profile__title" v-observe="'inview'">Profile</h3>
      </div>
      <img src="/img/titleLine.png" alt="line" class="title_line">
      <div class="mask">
        <h3 class="profile__title__sub" v-observe="'inview'">会社情報</h3>
      </div>
      <div class="profile__container__item" v-observe="'inview'">
        <svg class="profile__container__item__line" width="1120" height="6" viewBox="0 0 1120 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="2" width="1114" height="2" fill="#252526"/>
          <circle cx="3" cy="3" r="3" fill="#252526"/>
          <circle cx="1117" cy="3" r="3" fill="#252526"/>
        </svg>
        <div class="profile__container__item__text">
          <h4>会社名</h4>
          <p>株式会社ミライコニック</p>
        </div>
      </div>
      <div class="profile__container__item" v-observe="'inview'">
        <svg class="profile__container__item__line" width="1120" height="6" viewBox="0 0 1120 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="2" width="1114" height="2" fill="#252526"/>
          <circle cx="3" cy="3" r="3" fill="#252526"/>
          <circle cx="1117" cy="3" r="3" fill="#252526"/>
        </svg>
        <div class="profile__container__item__text">
          <h4>設立年月日</h4>
          <p>2023年6月5日</p>
        </div>
      </div>
      <div class="profile__container__item" v-observe="'inview'">
        <svg class="profile__container__item__line" width="1120" height="6" viewBox="0 0 1120 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="2" width="1114" height="2" fill="#252526"/>
          <circle cx="3" cy="3" r="3" fill="#252526"/>
          <circle cx="1117" cy="3" r="3" fill="#252526"/>
        </svg>
        <div class="profile__container__item__text">
          <h4>資本金</h4>
          <p>300万</p>
        </div>
      </div>
      <div class="profile__container__item" v-observe="'inview'">
        <svg class="profile__container__item__line" width="1120" height="6" viewBox="0 0 1120 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="2" width="1114" height="2" fill="#252526"/>
          <circle cx="3" cy="3" r="3" fill="#252526"/>
          <circle cx="1117" cy="3" r="3" fill="#252526"/>
        </svg>
        <div class="profile__container__item__text">
          <h4>所在地</h4>
          <p>〒108-0075 東京都港区港南2-17-1 京王品川ビル2階06号室</p>
        </div>
      </div>
      <div class="profile__container__item" v-observe="'inview'">
        <svg class="profile__container__item__line" width="1120" height="6" viewBox="0 0 1120 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="2" width="1114" height="2" fill="#252526"/>
          <circle cx="3" cy="3" r="3" fill="#252526"/>
          <circle cx="1117" cy="3" r="3" fill="#252526"/>
        </svg>
        <div class="profile__container__item__text">
          <h4>代表者</h4>
          <p>代表取締役　山口 晃</p>
        </div>
        <svg class="profile__container__item__line" width="1120" height="6" viewBox="0 0 1120 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="2" width="1114" height="2" fill="#252526"/>
          <circle cx="3" cy="3" r="3" fill="#252526"/>
          <circle cx="1117" cy="3" r="3" fill="#252526"/>
        </svg>
      </div>
    </div>
    <div class="profile__bg__wrapper1" style="z-index: 1;">
      <div class="profile__bg__wrapper__contents1">
        <img src="/img/profile/profile-pt1.png" alt="profile_bg" class="profile__container__pt1" v-observe="'inview'">
      </div>
    </div>
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

  &__title {
    font-size: min(5.55vw, 80px);
    text-align: center;
    letter-spacing: 0.01em;
    font-family: 'DinCondensedBold', sans-serif;
    transform: translateY(100%);
    transition: transform 0.8s ease-in-out;
    color: #252526;
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
    &__item {
      opacity: 0;
      transform: translateY(50%);
      transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
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
        h4 {
          font-size: min(1.38vw, 20px);
          line-height: min(2.70vw, 39px);
          text-align: end;
          width: min(7.63vw, 110px);
          font-weight: 600;
          color: #252526;
          letter-spacing: 0.05em;
        }
        p {
          font-size: min(1.80vw, 26px);
          line-height: min(2.70vw, 39px);
          font-weight: 700;
          color: #252526;
          letter-spacing: 0.03em;
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
      transform: translateY(var(--scroll-offset, 0px));
      transition: transform 0.8s ease-in-out;
      .profile__container__pt1 {
        width: min(10.55vw, 152px);
        transform: scale(0) rotate(30.32deg);
        transition: transform 0.5s ease-in-out;
        &.inview {
          transform: scale(1) rotate(30.32deg);
        }
      }
    }
  }

}
</style>
