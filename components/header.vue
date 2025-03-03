<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__logo">
        <a href="/">
          <img src="/img/header-logo.png" alt="logo">
        </a>
      </div>
      <div class="hamberger" @click="isOpen = !isOpen" :class="{ 'is-open': isOpen }">
        <div class="hamberger__line top"></div>
        <div class="hamberger__line middle"></div>
        <div class="hamberger__line bottom"></div>
      </div>
      <div class="menu" :class="{ 'is-open': isOpen }">
        <div class="menu__inner">
          <ul class="menu__item">
            <li>
              <nuxt-link to="#top" href="#top" v-smooth-scroll>
                /&nbsp;&nbsp;TOP
              </nuxt-link>
              <div class="menu__item__line short"></div>
            </li>
            <li>
              <nuxt-link to="#about" href="#about" v-smooth-scroll>
                /&nbsp;&nbsp;About Us
              </nuxt-link>
              <div class="menu__item__line Medium"></div>
            </li>
            <li>
              <nuxt-link to="#service" href="#service" v-smooth-scroll>
                /&nbsp;&nbsp;Service
              </nuxt-link>
              <div class="menu__item__line Medium"></div>
            </li>
            <li>
              <nuxt-link to="#qa" href="#qa" v-smooth-scroll>
                /&nbsp;&nbsp;Q&A
              </nuxt-link>
              <div class="menu__item__line short"></div>
            </li>
            <li>
              <nuxt-link to="#corporate-info" href="#corporate-info" v-smooth-scroll>
                /&nbsp;&nbsp;Corporate Info
              </nuxt-link>
              <div class="menu__item__line"></div>
            </li>
            <li>
              <nuxt-link to="#footer" href="#footer" v-smooth-scroll>
                /&nbsp;&nbsp;Contact
              </nuxt-link>
              <div class="menu__item__line Medium"></div>
            </li>
          </ul>
        </div>
        <div class="sns__inner">
          <a href="/">
            <img src="/img/insta.png" alt="instagram">
          </a>
          <a href="/">
            <img src="/img/x.png" alt="x">
          </a>
        </div>
        <div class="copyright">
          <p>©2025 MIRAICONIC</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 100;
  padding: 2.5% 5% 0 5%;
  .header__inner {
    display: flex;
    justify-content: space-between;
    height: 100%;
    .header__logo {
      img {
        width: 181px;
      }
    }
    .hamberger {
      position: relative;
      display: block;
      width: 40px;
      height: 25px;
      cursor: pointer;
      z-index: 1000;
      .hamberger__line {
        width: 40px;
        height: 2px;
        background-color: #252526;
        transition: transform 0.3s ease-in-out;
        position: relative;
        &.top {
          margin-top: 0px;
        }
        &.middle {
          margin-top: 11px;
          transition: width 0.3s ease-in-out, opacity 0.3s ease-in-out;
        }
        &.bottom {
          margin-top: 11px;
        }
      }
      &.is-open {
        .hamberger__line {
          &.top {
            transform: rotate(45deg) translateY(11px) translateX(7px);
          }
          &.middle {
            width: 0;
            opacity: 0;
          }
          &.bottom {
            transform: rotate(-45deg) translateY(-11px) translateX(7px);
          }
        }

      }
    }
    .menu {
      position: fixed;
      top: -2px;
      right: 0;
      width: 66.31vh;
      height: 100vh;
      background-color: #F2F2F2;
      z-index: 100;
      border-top: 2px solid #252526;
      border-left: 2px solid #252526;
      border-top-left-radius: 13.26vh;
      transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
      transform: translateX(100%);
      opacity: 0;
      &.is-open {
        transform: translateX(0);
        opacity: 1;
      }
      .menu__inner {
        padding: 12.59vh 5% 3.97vh;
        .menu__item {
          list-style: none;
          margin: 5% auto;
          width: fit-content;
          display: block;
          li {
            margin-bottom: 3%;
            position: relative;
            width: fit-content;
            padding: 0 10px;
            a {
              font-family: 'DinCondensedBold', sans-serif;
              font-size: 7.42vh;
              font-weight: bold;
              color: #252526;
              text-decoration: none;
              transition: color 0.2s ease-in-out;
              position: relative;
              z-index: 1;
              letter-spacing: 0.02em;
              white-space: pre-wrap;
              line-height: 1.2;
            }
            .menu__item__line {
              position: absolute;
              top: 0;
              left: 0;
              width: 0;
              height: 100%;
              background-color: #252526;
              background-color: yellow;
              transition: width 0.4s ease-in-out;
              &.short {
                transition: width 0.2s ease-in-out;
              }
              &.Medium {
                transition: width 0.3s ease-in-out;
              }
            }
            &:hover {
              .menu__item__line {
                width: 100%;
              }
            }
          }
        }
      }
      .sns__inner {
        display: flex;
        justify-content: flex-start;
        margin-left: min(19.62vh, 158px);
        gap: 2vh;
        a {
          img {
            height: 6.10vh;
          }
        }
      }
      .copyright {
        font-size: 2.65vh;
        font-weight: bold;
        color: #252526;
        text-align: right;
        margin-top: 5vh;
        margin-right: 3vh;
        p {
          letter-spacing: 0.01em;
          font-family: 'DinCondensedBold', sans-serif;
        }
      }
    }
  }
}
</style>
