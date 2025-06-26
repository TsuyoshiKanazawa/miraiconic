<template>
  <div class="news">
    <div class="news-list">
      <h2 class="news-header">
        News
        <svg v-if="!useIsMobile().value" width="90" height="10" viewBox="0 0 90 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="3" width="80" height="4" fill="#252526"/>
          <circle cx="85" cy="5" r="5" fill="#252526"/>
          <circle cx="5" cy="5" r="5" fill="#252526"/>
        </svg>
        <img loading="lazy" v-if="useIsMobile().value" class="news-line-bottom" src="/img/top/titleLineSp.svg" alt="" />
      </h2>
      <p class="news-header-sub">最新情報</p>
      <div
        v-for="item in paginatedItems"
        :key="item.id"
        class="news-item"
      >
        <svg v-if="!useIsMobile().value" class="news-line-top" width="1120" height="6" viewBox="0 0 1120 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="2" width="1114" height="2" fill="#252526"/>
          <circle cx="3" cy="3" r="3" fill="#252526"/>
          <circle cx="1117" cy="3" r="3" fill="#252526"/>
        </svg>
        <img loading="lazy" v-if="useIsMobile().value" class="news-line-top" src="/img/news/newsLine.svg" alt="" />
        <p class="news-date">{{ item.date }}</p>
        <h3 class="news-title">{{ item.title }}</h3>
        <NuxtLink
          class="news-link"
          :to="`/news/${item.id}`"
          v-if="item.mainText"
        >
          GO
        </NuxtLink>
        <a
          class="news-link"
          :href="item.url"
          target="_blank"
          v-if="item.url && !item.mainText"
        >
          GO
        </a>
      </div>
      <svg v-if="!useIsMobile().value" class="news-line-bottom" width="1120" height="6" viewBox="0 0 1120 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="2" width="1114" height="2" fill="#252526"/>
        <circle cx="3" cy="3" r="3" fill="#252526"/>
        <circle cx="1117" cy="3" r="3" fill="#252526"/>
      </svg>
      <img loading="lazy" v-if="useIsMobile().value" class="news-line-bottom" src="/img/news/newsLine.svg" alt="" />
      <FormsButton class="news-button" name="News List" link="/news" />
    </div>
    <div class="news-bg__wrapper top" :style="{ transform: 'translateY(' + parallaxOffset + 'px)' }">
      <div class="news-bg__wrapper__contents1" v-observe="'inview'">
        <img loading="lazy" src="/img/news/news-pt1.svg" alt="newsBg1" class="news_pt1">
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'
import scrollParallaxMixin from '@/mixins/scrollParallaxMixin';

import { useFetchNewsItem, useIsMobile } from '@/composables/states'

export default defineComponent({
  name: 'News',
  mixins: [scrollParallaxMixin],
  async setup() {
    const newsItems = await useFetchNewsItem();
    //console.log(newsItems)

    const pageSize = ref(3)
    const currentPage = ref(1)
    const totalPages = computed(() => Math.ceil(newsItems.length / pageSize.value))

    const paginatedItems = computed(() => {
      const start = (currentPage.value - 1) * pageSize.value
      return newsItems.slice(start, start + pageSize.value)
    })

    function generatePageNumbers() {
      const delta = 2
      const pages = []
      const left = currentPage.value - delta
      const right = currentPage.value + delta
      for (let i = 1; i <= totalPages.value; i++) {
        if (i === 1 || i === totalPages.value || (i >= left && i <= right)) {
          pages.push(i)
        } else if (i === left - 1 || i === right + 1) {
          pages.push('...')
        }
      }
      // 重複を排除
      return [...new Set(pages)]
    }

    const pagesToShow = computed(() => generatePageNumbers())

    function pageKey(page) {
      return typeof page === 'number' ? `page-${page}` : `ellipsis-${Math.random()}`
    }

    function goToPage(page) {
      if (typeof page === 'number') currentPage.value = page
    }

    //console.log(useNewsItem().value)
    return {
      paginatedItems,
      currentPage,
      totalPages,
      pagesToShow,
      goToPage,
      pageKey,
    }
  },
  methods: {
    goToNews(id) {
      console.log(id)
      this.$router.push(`/news/${id}`)
    }
  }
})
</script>

<style scoped lang="scss">
.news {
  background-color: #F2F2F2;
  padding: min(80px, 5.55vw) 0;
  position: relative;
  @include mixins.max-screen(768px) {
    padding: 1vw 0 20vw;
  }

  .news-list {
    width: min(1280px, 88.88vw);
    background-color: #fff;
    margin: 0 auto;
    border-radius: min(120px, 8.33vw);
    padding: min(50px, 3.47vw) min(80px, 5.55vw) min(100px, 6.94vw);
    position: relative;
    z-index: 12;
    @include mixins.max-screen(768px) {
      width: 92vw;
      border-radius: 10.66vw;
      padding: 15vw 0 12vw;
      margin-top: 15vw;
    }
    .news-header {
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
      @include mixins.max-screen(768px) {
        font-size: 16vw;
      }
      svg {
        position: absolute;
        bottom: -5%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .news-header-sub {
      font-size: min(18px, 1.25vw);
      text-align: center;
      font-weight: 700;
      color: #252526;
      margin: min(20px, 1.38vw) 0 min(40px, 2.77vw);
      @include mixins.max-screen(768px) {
        font-size: 4.26vw;
      }
    }
    .news-item {
      position: relative;
      display: flex;
      gap: 1.5rem;
      padding: min(20px, 1.38vw) min(43px, 2.98vw) min(18px, 1.25vw);
      @include mixins.max-screen(768px) {
        display: block;
        padding: 3.13vw 5.13vw;
      }
      .news-title {
        font-size: min(20px, 1.38vw);
        font-weight: 500;
        color: #252526;
        width: min(798px, 55.41vw);
        line-height: 2;
        text-align: left;
        @include mixins.max-screen(768px) {
          font-size: 3.73vw;
          line-height: 1.5;
          width: 61.06vw;
        }
      }
      .news-date {
        display: block;
        font-family: "Barlow Condensed", sans-serif;
        font-weight: 600;
        font-style: normal;
        font-size: min(30px, 2.08vw);
        //letter-spacing: 0.01em;
        letter-spacing: 0.001em;
        line-height: 1.5;
        @include mixins.max-screen(768px) {
          font-size: 3.73vw;
        }
      }
      .news-link {
        background-color: #3676B6;
        color: #fff;
        border-radius: min(60px, 4.16vw);
        width: min(120px, 8.33vw);
        height: min(40px, 2.77vw);
        font-family: "Barlow Condensed", sans-serif;
        font-weight: 600;
        font-style: normal;
        font-size: min(32px, 2.22vw);
        //letter-spacing: 0.01em;
        letter-spacing: 0.001em;
        text-align: center;
        line-height: min(36px, 2.5vw);
        border: 2px solid #3676B6;
        transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
        @include mixins.max-screen(768px) {
          position: absolute;
          top: 50%;
          right: 5%;
          transform: translateY(-50%);
          width: 18.66vw;
          height: 6.66vw;
          border-radius: 16vw;
          font-size: 5.86vw;
          line-height: 6.66vw;
          border: none;
        }
        &:hover {
          background-color: #fff;
          color: #3676B6;
        }
      }
      .news-line-top {
        position: absolute;
        top: 0;
        left: 0;
        width: min(1120px, 76.38vw);
        @include mixins.max-screen(768px) {
          width: 95%;
          left: 2.5%;
        }
      }
      .news-line-bottom {
        display: none;
        position: absolute;
        bottom: 0;
        left: 0;
        width: min(1120px, 76.38vw);
        @include mixins.max-screen(768px) {
          width: 95%;
          left: 2.5%;
        }
      }
      &:last-child {
        .news-line-bottom {
          display: block;
        }
      }
    }
    .news-line-bottom {
      display: block;
      width: min(1120px, 76.38vw);
      margin: 0 auto;
      @include mixins.max-screen(768px) {
        width: 95%;
      }
    }
    .news-button {
      margin-top: min(60px, 4.16vw);
    }
  }
  .news-bg__wrapper {
    position: absolute;
    width: 1px;
    height: 1%;
    transform: translate3d(0, var(--scroll-offset), 0);
    transition: transform 0.8s ease-out;
    z-index: 13;
    &__contents1 {
      width: fit-content;
      transform: scale(0.1);
      margin-right: auto;
      margin-left: 0;
      transition: transform 0.8s ease-in-out;
      position: relative;
      @include mixins.max-screen(768px) {
        margin-top: 100vw;
      }
      .news_pt1 {
        width: min(157px, 10.90vw);
        display: block;
        transition: transform 0.8s ease-in-out;
        margin-right: 0;
        margin-left: auto;
        @include mixins.max-screen(768px) {
          width: 18.13vw;
          max-width: auto;
        }
      }
      &.inview {
        transform: scale(1);
      }
    }
    &.top {
      top: 40%;
      left: 3%;
      @include mixins.max-screen(768px) {
        top: 15%;
        right: 14%;
      }
    }
  }
}

</style>
