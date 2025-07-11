<template>
  <div class="button">
    <nuxt-link :to="link" class="button__inner">
      {{ name }}
    </nuxt-link>
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5145 10.9087C12.848 10.5088 12 10.9889 12 11.7662V26.2338C12 27.0111 12.848 27.4912 13.5145 27.0913L25.5708 19.8575C26.2182 19.4691 26.2182 18.5309 25.5708 18.1425L13.5145 10.9087Z" fill="white"/>
      <circle cx="18" cy="18" r="17.5" stroke="white"/>
    </svg>
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
  background-color: #fff;
  color: #85C1DE !important;
  border-radius: 5px;
  width: min(500px, 34.72vw);
  height: min(60px, 4.16vw);
  border-radius: min(60px, 4.16vw);
  //box-shadow: min(4px, 0.27vw) min(4px, 0.27vw) 0 0 #252526;
  filter: drop-shadow(min(4px, 0.27vw) min(4px,0.27vw) 0px #252526);
  position: relative;
  z-index: 10000;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.2s ease-in-out;
  border: 2px solid #fff;
  margin: 0 auto;
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
    color: #85C1DE !important;
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 600;
    font-style: normal;
    @include mixins.max-screen(768px) {
      font-size: 6.93vw;
      line-height: 1.3;
    }
  }
  svg {
    position: absolute;
    top: 50%;
    right: min(12px, 0.83vw);
    transform: translateY(-50%);
    width: min(36px, 2.4vw);
    height: min(36px, 2.4vw);
    path {
      fill: #85C1DE;
    }
    circle {
      stroke: #85C1DE;
    }
    @include mixins.max-screen(768px) {
      width: 7.46vw;
      height: 7.46vw;
      right: 1vw;
    }

  }
  @include mixins.min-screen(769px) {
    &:hover {
      background-color: #85C1DE;
      .button__inner {
        color: #fff !important;
      }
      svg {
        path {
          fill: #fff;
        }
        circle {
          stroke: #fff;
        }
      }
    }
  }

}
</style>
