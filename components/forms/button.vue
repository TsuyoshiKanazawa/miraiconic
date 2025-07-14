<template>
  <div class="button">
    <a :href="link" class="button__inner">
      {{ name }}
    </a>
    <img src="/img/buttonIcon.svg" alt="arrow" class="button__icon">
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    name: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  will-change: filter;
  background-color: #3676B6;
  color: #fff !important;
  width: min(500px, 34.72vw);
  height: min(60px, 4.16vw);
  border-radius: min(60px, 4.16vw);
  //box-shadow: min(4px, 0.27vw) min(4px, 0.27vw) 0 0 #252526;
  filter: drop-shadow(min(4px, 0.27vw) min(4px,0.27vw) 0px #252526);
  position: relative;
  z-index: 10000;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.2s ease-in-out;
  border: 2px solid #3676B6;
  margin: 0 auto;
  transform: translateZ(0);
  will-change: box-shadow;
  @include mixins.max-screen(768px) {
    width: 69.33vw;
    height: 10.66vw;
    border-radius: 16vw;
    font-size: 6.93vw;
    margin: 10vw auto 2vw;
    //box-shadow: 1.06vw 1.33vw 0 0 #252526;
    filter: drop-shadow(1.06vw 1.06vw 0px #252526);
  }
  .button__inner {
    font-size: min(40px, 2.77vw);
    line-height: min(56px, 3.88vw);
    font-weight: 700;
    display: block;
    width: 100%;
    text-align: center;
    //letter-spacing: 0.01em;
    letter-spacing: 0.001em;
    position: relative;
    z-index: 10000;
    color: #fff !important;
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 600;
    font-style: normal;
    @include mixins.max-screen(768px) {
      font-size: 6.93vw;
      line-height: 1.3;
    }
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
      top: 12%;
    }

  }
  @include mixins.min-screen(769px) {
    &:hover {
      background-color: #fff;
      .button__inner {
        color: #3676B6 !important;
      }
      img {
        filter: brightness(0) saturate(100%) invert(46%) sepia(13%) saturate(2433%) hue-rotate(169deg) brightness(89%) contrast(88%);
      }
    }
  }

}
</style>
