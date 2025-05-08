<template>
  <div class="button">
    <a :href="link" class="button__inner">
      {{ name }}
    </a>
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
  background-color: #3676B6;
  color: #fff !important;
  border-radius: 5px;
  width: min(500px, 34.72vw);
  height: min(60px, 4.16vw);
  border-radius: min(60px, 4.16vw);
  box-shadow: min(4px, 0.27vw) min(4px, 0.27vw) 0 0 #252526;
  position: relative;
  z-index: 10000;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.2s ease-in-out;
  border: 2px solid #3676B6;
  margin: 0 auto;
  .button__inner {
    font-size: min(26px, 1.80vw);
    line-height: min(60px, 4.16vw);
    font-weight: 700;
    display: block;
    width: 100%;
    text-align: center;
    letter-spacing: 0.01em;
    position: relative;
    z-index: 10000;
    color: #fff !important;
  }
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
    .button__inner {
      color: #3676B6 !important;
    }
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
</style>
