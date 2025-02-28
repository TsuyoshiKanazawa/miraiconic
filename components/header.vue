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
              <a href="/">
                / TOP
              </a>
            </li>
            <li>
              <a href="/">
                / About Us
              </a>
            </li>
            <li>
              <a href="/">
                / Service
              </a>
            </li>
            <li>
              <a href="/">
                / Q&A
              </a>
            </li>
            <li>
              <a href="/">
                / Corporate Info
              </a>
            </li>
            <li>
              <a href="/">
                / Contact
              </a>
            </li>
          </ul>
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
      z-index: 101;
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
      width: 500px;
      height: 100vh;
      background-color: #F2F2F2;
      z-index: 100;
      border-top: 2px solid #252526;
      border-left: 2px solid #252526;
      border-top-left-radius: 100px;
      transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
      transform: translateX(100%) translateY(50%);
      opacity: 0;
      &.is-open {
        transform: translateX(0) translateY(0);
        opacity: 1;
      }
      .menu__inner {
        padding: 100px 5%;
        .menu__item {
          list-style: none;
          margin: 5% auto;
          width: fit-content;
          display: block;
          li {
            margin-bottom: 3%;
            a {
              font-family: 'DinCondensedBold', sans-serif;
              font-size: 56px;
              font-weight: bold;
              color: #252526;
              text-decoration: none;
              transition: color 0.2s ease-in-out;
              &:hover {
                color: #3676B6;
              }
            }
          }
        }
      }
    }
  }
}
</style>
