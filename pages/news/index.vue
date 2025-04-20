<template>
  <div class="news">
    <FormsTop title="NEWS" subTitle="お知らせ" />
    <div class="news-list">
      <div
        v-for="item in paginatedItems"
        :key="item._id"
        class="news-item"
      >
        <svg class="news-line-top" width="1120" height="6" viewBox="0 0 1120 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="2" width="1114" height="2" fill="#252526"/>
          <circle cx="3" cy="3" r="3" fill="#252526"/>
          <circle cx="1117" cy="3" r="3" fill="#252526"/>
        </svg>
        <p class="news-date">{{ item.date }}</p>
        <h3 class="news-title">{{ item.title }}</h3>
        <NuxtLink
          class="news-link"
          :to="`/news/${item.id}`"
          v-if="item.id"
        >
          GO
        </NuxtLink>
        <svg class="news-line-bottom" width="1120" height="6" viewBox="0 0 1120 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="2" width="1114" height="2" fill="#252526"/>
          <circle cx="3" cy="3" r="3" fill="#252526"/>
          <circle cx="1117" cy="3" r="3" fill="#252526"/>
        </svg>
      </div>
      <!-- ページネーション -->
      <div class="pagination">
        <button class="pagination-button" @click="prevPage" :disabled="currentPage === 1">
          <!-- 前へ -->
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.4855 10.9087C23.152 10.5088 24 10.9889 24 11.7662V26.2338C24 27.0111 23.152 27.4912 22.4855 27.0913L10.4292 19.8575C9.78182 19.4691 9.78182 18.5309 10.4292 18.1425L22.4855 10.9087Z" fill="#252526"/>
            <circle cx="18" cy="18" r="17.5" transform="matrix(-1 0 0 1 36 0)" stroke="#252526"/>
          </svg>
        </button>
        <button
          v-for="page in pagesToShow"
          :key="pageKey(page)"
          @click="goToPage(page)"
          :class="{
            active: page === currentPage,
            inactive: page !== currentPage && page !== '...',
            ellipsis: page === '...'
          }"
          :disabled="page === '...'"
        >
          {{ page }}
        </button>
        <button class="pagination-button" @click="nextPage" :disabled="currentPage === totalPages">
          <!-- 次へ -->
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5145 10.9087C12.848 10.5088 12 10.9889 12 11.7662V26.2338C12 27.0111 12.848 27.4912 13.5145 27.0913L25.5708 19.8575C26.2182 19.4691 26.2182 18.5309 25.5708 18.1425L13.5145 10.9087Z" fill="#252526"/>
            <circle cx="18" cy="18" r="17.5" stroke="#252526"/>
          </svg>
        </button>
      </div>
    </div>

  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'
import { useNuxtApp } from '#imports'

export default defineComponent({
  name: 'News',
  async setup() {
    const newsItems = await useFetchNewsItem();

    const pageSize = ref(10)
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

    function prevPage() {
      if (currentPage.value > 1) currentPage.value--
    }

    function nextPage() {
      if (currentPage.value < totalPages.value) currentPage.value++
    }

    function goToNews(id) {
      // ニュース詳細への遷移処理
      // 例: router.push({ name: 'news-id', params: { id } })
    }
    console.log(useNewsItem().value)
    return {
      paginatedItems,
      currentPage,
      totalPages,
      pagesToShow,
      goToPage,
      prevPage,
      nextPage,
      pageKey,
      goToNews
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
  padding-bottom: min(60px, 4.16vw);
  .news-list {
    width: min(1280px, 88.88vw);
    background-color: #fff;
    margin: 0 auto;
    border-radius: min(120px, 8.33vw);
    padding: min(100px, 6.94vw) min(80px, 5.55vw);
    margin-top: min(90px, 6.25vw);
    
    .news-item {
      position: relative;
      display: flex;
      gap: 1.5rem;
      padding: min(20px, 1.38vw) min(43px, 2.98vw);
      .news-title {
        font-size: min(20px, 1.38vw);
        font-weight: 500;
        color: #252526;
        width: min(798px, 55.41vw);
      }
      .news-date {
        display: block;
        font-family: 'DinCondensedBold', sans-serif;
        font-weight: normal;
        font-size: min(30px, 2.08vw);
        letter-spacing: 0.01em;
      }
      .news-link {
        background-color: #3676B6;
        color: #fff;
        border-radius: min(60px, 4.16vw);
        width: min(120px, 8.33vw);
        height: min(40px, 2.77vw);
        font-family: 'DinCondensedBold', sans-serif;
        font-weight: normal;
        font-size: min(32px, 2.22vw);
        letter-spacing: 0.01em;
        text-align: center;
      }
      .news-line-top {
        position: absolute;
        top: 0;
        left: 0;
        width: min(1120px, 76.38vw);
      }
      .news-line-bottom {
        display: none;
        position: absolute;
        bottom: 0;
        left: 0;
      }
      &:last-child {
        .news-line-bottom {
          display: block;
          width: min(1120px, 76.38vw);
        }
      }
    }
    .pagination {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin-top: min(40px, 2.77vw);
      button {
        font-family: 'DinCondensedBold', sans-serif;
        font-weight: normal;
        font-size: min(34px, 2.36vw);
        letter-spacing: 0.01em;
        background-color: transparent;
        &:disabled {
          color: #ABABAB;
        }
        &.active {
          color: #252526;
        }
        &.inactive {
          color: #ABABAB;
        }
        &.ellipsis {
          color: #ABABAB;
        }
      }
      .pagination-button {
        &:disabled {
          svg {
            opacity: 0.5;
          }
        }
      }
    }
  }

}

</style>
