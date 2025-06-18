<template>
  <div class="about">
    <div class="about-inner">
      <div class="about-inner-text">
        <p class="about-inner-text-title" v-observe="'inView'">
          About
        </p>
        <p class="about-inner-text-text" v-observe="'inView'">
          We support<br>
          the use of<br>
          Building<br>
          Information<br>
          Modeling.
        </p>
        <p class="about-inner-text-text2" v-observe="'inView'">
          私たちは、BIMによる建設プロジェクトの<br>
          革新をトータルにサポートいたします。
        </p>
      </div>
      <FormsButton class="about-inner-button" name="About Us" link="/about" />
    </div>
    <div class="abouts-mask left" ref="leftMask"></div>
    <div class="abouts-mask right" ref="rightMask"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(async () => {
  await nextTick()
  const left = document.querySelectorAll('.left')
  const right = document.querySelectorAll('.right')

  gsap.set(left, { xPercent: -130 })
  gsap.set(right, { xPercent: 130 })
  const tlLeft = gsap.timeline({
    scrollTrigger: {
      trigger: left,
      start: 'top bottom',
      end:   `bottom top`,
      scrub: true,
      markers: false,
    }
  })
  const tlRight = gsap.timeline({
    scrollTrigger: {
      trigger: left,
      start: 'top bottom',
      end:   `bottom top`,
      scrub: true,
      markers: false,
    }
  })

  tlRight.to(right, {
    xPercent: 0,
    duration: 1,
  })

  tlLeft.to(left, {
    xPercent: 0,
    duration: 1,
  })
})
</script>

<style lang="scss" scoped>
.about {
  background-image: url('/img/top/aboutBg-sp.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 146.66vw;
  position: relative;
  .about-inner {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
    .about-inner-text {
      padding: 7vw 8vw 0;
      .about-inner-text-title {
        font-size: 10.66vw;
        color: #3676B6;
        font-family: "Barlow Condensed", sans-serif;
        font-weight: 600;
        font-style: normal;
        //letter-spacing: 0.01em;
        letter-spacing: 0.001em;
        opacity: 0;
        transform: translateY(10vw);
        transition: transform 0.5s ease-in-out;
        &.inView {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .about-inner-text-text {
        font-size: 15.46vw;
        color: #252526;
        font-family: "Barlow Condensed", sans-serif;
        font-weight: 600;
        font-style: normal;
        //letter-spacing: 0.02em;
        letter-spacing: 0.001em;
        line-height: 1;
        margin-top: 1.5vw;
        opacity: 0;
        transform: translateY(10vw);
        transition: transform 0.5s ease-in-out;
        &.inView {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .about-inner-text-text2 {
        font-size: 4.26vw;
        color: #252526;
        letter-spacing: 0.03em;
        font-weight: 700;
        margin-top: 5vw;
        opacity: 0;
        transform: translateY(10vw);
        transition: transform 0.5s ease-in-out;
        &.inView {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
  }
  .abouts-mask {
    position: absolute;
    width: 100%;
    height: 50%;
    background-color: #ffffff80;
    z-index: 1;
    &.left {
      left: 0;
      top: 0;
    }
    &.right {
      right: 0;
      bottom: 0;
    }
  }
}
</style>