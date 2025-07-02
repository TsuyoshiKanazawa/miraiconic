<template>
  <div class="scroll-wrap">
    <div class="faq">
      <h2 class="faq-title">
        FAQ
        <svg width="90" height="10" viewBox="0 0 90 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="3" width="80" height="4" fill="#252526"/>
          <circle cx="85" cy="5" r="5" fill="#252526"/>
          <circle cx="5" cy="5" r="5" fill="#252526"/>
        </svg>
      </h2>
      <nuxt-link to="/service#faq" class="faq-text">
        よくあるご質問はこちら
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5145 10.9087C12.848 10.5088 12 10.9889 12 11.7662V26.2338C12 27.0111 12.848 27.4912 13.5145 27.0913L25.5708 19.8575C26.2182 19.4691 26.2182 18.5309 25.5708 18.1425L13.5145 10.9087Z" fill="white"/>
          <circle cx="18" cy="18" r="17.5" stroke="white"/>
        </svg>
      </nuxt-link>
      <div class="faq-background" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(async () => {
  await nextTick()
  const items = document.querySelectorAll('.faq-background')

  gsap.set(items, { xPercent: -100 })
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: items,
      start: 'top bottom',
      end:   `bottom top`,
      scrub: true,
      markers: false,
    }
  })

  tl.to(items, {
    xPercent: 0,
    duration: 2,
  })
})
</script>

<style lang="scss" scoped>
.scroll-wrap {
  padding: min(60px, 4.16vw) 0;
  background-color: #F2F2F2;
  .faq {
    width: 100vw;
    height: min(200px, 13.88vw);
    color: #fff;
    position: relative;
    padding: min(20px, 1.38vw) 0;
    .faq-title {
      position: relative;
      border-radius: min(120px, 37.01vw);
      text-align: center;
      font-family: "Barlow Condensed", sans-serif;
      font-weight: 600;
      font-style: normal;
      //letter-spacing: 0.01em;
      letter-spacing: 0.001em;
      font-size: min(80px, 5.55vw);
      width: fit-content;
      margin: 0 auto;
      z-index: 2;
      svg {
        position: absolute;
        bottom: -5%;
        left: 50%;
        transform: translateX(-50%);
        rect {
          fill: #fff;
        }
        circle {
          fill: #fff;
        }
      }
    }
    .faq-text {
      font-size: min(28px, 1.94vw);
      font-weight: 700;
      width: fit-content;
      margin: min(20px, 1.38vw) auto;
      position: relative;
      z-index: 2;
      display: block;
      transition: color 0.3s ease-in-out;
      color: #fff;
      svg {
        position: absolute;
        top: 50%;
        right: -15%;
        transform: translateY(-50%);
        transition: transform 0.3s ease-in-out;
      }
      &:hover {
        color: yellow;
        svg {
          path {
            fill: yellow;
          }
          circle {
            stroke: yellow;
          }
        }
      }
    }
    .faq-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: min(200px, 13.88vw);
      background-color: #3676B6;
      z-index: 1;
    }
  }
}
</style>


