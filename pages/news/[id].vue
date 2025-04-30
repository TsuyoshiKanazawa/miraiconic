<!-- pages/news/[id].vue -->
<template>
  <div class="news-detail">
    <FormsTop title="NEWS" subTitle="お知らせ" />

    <div class="news-detail-content">
      <div v-if="newsItem">
        <div class="detail-header">
          <p class="detail-date">{{ newsItem.date }}</p>
          <h1 class="detail-title">{{ newsItem.title }}</h1>
        </div>
        <svg v-if="!useIsMobile().value" class="detail-line" width="1120" height="6" viewBox="0 0 1120 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="2" width="1114" height="2" fill="#252526"/>
          <circle cx="3" cy="3" r="3" fill="#252526"/>
          <circle cx="1117" cy="3" r="3" fill="#252526"/>
        </svg>
        <img v-if="useIsMobile().value" class="detail-line" src="/img/news/newsLine.svg" alt="" />

        <div class="detail-content" v-html="newsItem.mainText"></div>
      </div>
      <div v-else class="loading">読み込み中…</div>
    </div>
    <div class="news-detail-buttons">
      <button class="back-button back" @click="back" :disabled="!prevItem">
        <svg class="back-button-svg" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.4855 10.9087C23.152 10.5088 24 10.9889 24 11.7662V26.2338C24 27.0111 23.152 27.4912 22.4855 27.0913L10.4292 19.8575C9.78182 19.4691 9.78182 18.5309 10.4292 18.1425L22.4855 10.9087Z" fill="white"/>
          <circle cx="18" cy="18" r="17.5" transform="matrix(-1 0 0 1 36 0)" stroke="white"/>
        </svg>
        前の記事
      </button>
      <NuxtLink class="back-button ichiran" to="/news">一覧へ戻る</NuxtLink>
      <button class="back-button" @click="next" :disabled="!nextItem">
        次の記事
        <svg class="next-button-svg next" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5145 10.9087C12.848 10.5088 12 10.9889 12 11.7662V26.2338C12 27.0111 12.848 27.4912 13.5145 27.0913L25.5708 19.8575C26.2182 19.4691 26.2182 18.5309 25.5708 18.1425L13.5145 10.9087Z" fill="white"/>
          <circle cx="18" cy="18" r="17.5" stroke="white"/>
        </svg>
      </button>
    </div>
    <div class="news-bg__wrapper top" :style="{ transform: 'translateY(' + parallaxOffset + 'px)' }">
      <div class="news-bg__wrapper__contents1" v-observe="'inview'">
        <img src="/img/news/news-pt1.svg" alt="newsBg1" class="news_pt1">
      </div>
    </div>
    <div class="news-bg__wrapper bottom" :style="{ transform: 'translateY(' + parallaxOffset + 'px)' }">
      <div class="news-bg__wrapper__contents2" v-observe="'inview'">
        <img src="/img/news/news-pt2.svg" alt="newsBg2" class="news_pt2">
      </div>
    </div>
  </div>
</template>

<script>
import scrollParallaxMixin from '@/mixins/scrollParallaxMixin';
export default {
  mixins: [scrollParallaxMixin],
  data() {
    return {
      newsItems: [],    // 全記事リスト
      newsItem: null    // 現在表示中の記事
    }
  },
  computed: {
    // 有効なIDを持つ記事だけ
    validItems() {
      return this.newsItems.filter(item => item.id !== '-')
    },
    // 現在の記事が validItems の何番目か
    currentIndex() {
      return this.validItems.findIndex(item => item.id === this.newsItem?.id)
    },
    // ひとつ前のアイテム
    prevItem() {
      return this.currentIndex > 0
        ? this.validItems[this.currentIndex - 1]
        : null
    },
    // ひとつ次のアイテム
    nextItem() {
      return this.currentIndex < this.validItems.length - 1
        ? this.validItems[this.currentIndex + 1]
        : null
    }
  },
  async mounted() {
    // ストアにあれば使う、なければフェッチ
    this.newsItems = useNewsItem().value || await useFetchNewsItem()
    this.updateCurrent();
    console.log(this.validItems);
  },
  watch: {
    // ルートの id が変わったら再表示
    '$route.params.id': 'updateCurrent'
  },
  methods: {
    // currentIndex を更新
    updateCurrent() {
      const id = this.$route.params.id
      this.newsItem = this.newsItems.find(item => item.id === id) || null
    },
    // 「前の記事」ボタンクリック
    back() {
      if (this.prevItem) {
        this.$router.push(`/news/${this.prevItem.id}`)
      }
    },
    // 「次の記事」ボタンクリック
    next() {
      if (this.nextItem) {
        this.$router.push(`/news/${this.nextItem.id}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.news-detail {
  background-color: #F2F2F2;
  padding-bottom: min(60px, 4.16vw);
  position: relative;
  .news-detail-content {
    width: min(1280px, 88.88vw);
    background-color: #fff;
    margin: 0 auto;
    border-radius: min(120px, 8.33vw);
    padding: min(100px, 6.94vw) min(80px, 5.55vw);
    margin-top: min(90px, 6.25vw);
    position: relative;
    z-index: 12;
    @include mixins.max-screen(768px) {
      width: 92vw;
      border-radius: 10.66vw;
      padding: 15vw 0 12vw;
      margin-top: 15vw;
    }
    .detail-header {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      padding: 0 min(40px, 2.77vw);
      @include mixins.max-screen(768px) {
        display: block;
        padding: 0 4.8vw;
      }
      .detail-date {
        color: #252526;
        margin-right: min(20px, 1.38vw);
        font-family: 'DinCondensedBold', sans-serif;
        font-weight: normal;
        font-size: min(30px, 2.08vw);
        letter-spacing: 0.01em;
        @include mixins.max-screen(768px) {
          font-size: 5.33vw;
        }
      }
      .detail-title {
        font-size: min(38px, 2.63vw);
        color: #252526;
        font-weight: bold;
        @include mixins.max-screen(768px) {
          font-size: 4.53vw;
        }
      }
    }
    .detail-line {
      width: min(1120px, 78.47vw);
      @include mixins.max-screen(768px) {
        width: 95%;
        display: block;
        margin: 2vw auto;
      }
    }
    .detail-content {
      margin-top: min(20px, 1.38vw);
      padding: 0 min(40px, 2.77vw);
      @include mixins.max-screen(768px) {
        padding: 0 4.8vw;
      }
      p {
        img {
          display: block;
          margin: 0 auto;
          @include mixins.max-screen(768px) {
            width: 90%;
          }
        }
      }
    }
  }
  .news-detail-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 min(40px, 2.77vw);
    margin-top: min(20px, 1.38vw);
    margin: min(60px, 4.16vw) 0 0;
    gap: min(30px, 2.08vw);
    position: relative;
    z-index: 12;
    @include mixins.max-screen(768px) {
      display: flex;
      flex-direction: column;
      gap: 5vw;
      margin: 10vw 0;
    }
    button, a {
      background-color: #3676B6;
      color: #fff;
      width: min(300px, 20.83vw);
      height: min(56px, 3.88vw);
      text-align: center;
      line-height: min(52px, 3.61vw);
      border-radius: min(60px, 4.16vw);
      box-shadow: min(4px, 0.27vw) min(4px, 0.27vw) 0 0 #252526;
      font-size: min(26px, 1.80vw);
      cursor: pointer;
      font-weight: 600;
      transition: background-color 0.3s ease-in-out, color 0.2s ease-in-out;
      border: 2px solid #3676B6;
      position: relative;
      @include mixins.max-screen(768px) {
        width: 80vw;
        height: 10.66vw;
        line-height: 10.66vw;
        font-size: 5.33vw;
        display: block;
        margin: 0 auto;
        border-radius: 16vw;
        box-shadow: 1.06vw 1.06vw 0 0 #252526;
      }
      @include mixins.min-screen(769px) {
        &:hover {
          background-color: #fff;
          color: #3676B6;
          .back-button-svg {
            path {
              fill: #3676b6;
            }
            circle {
              stroke: #3676b6;
            }
          }
          .next-button-svg {
            path {
              fill: #3676b6;
            }
            circle {
              stroke: #3676b6;
            }
          }
        }
      }

      svg {
        position: absolute;
        transform: translateY(-50%);
        @include mixins.max-screen(768px) {
          width: 7.46vw;
        }
      }
      .back-button-svg {
        top: 50%;
        left: 4%;
        @include mixins.max-screen(768px) {
          left: 2%;
        }
      }
      .next-button-svg {
        top: 50%;
        right: 4%;
        @include mixins.max-screen(768px) {
          right: 2%;
        }
      }
      &:disabled {
        opacity: 0.5;
        cursor: auto;
        &:hover {
          background-color: #3676B6;
          color: #fff;
          .back-button-svg {
            path {
              fill: #fff;
            }
            circle {
              stroke: #fff;
            }
          }
          .next-button-svg {
            path {
              fill: #fff;
            }
            circle {
              stroke: #fff;
            }
          }
        }
      }
      &.ichiran {
        @include mixins.max-screen(768px) {
          order: 0;
        }
      }
      &.back {
        @include mixins.max-screen(768px) {
          order: 1;
        }
      }
      &.next {
        @include mixins.max-screen(768px) {
          order: 2;
        }
      }
    }
  }
  .loading {
    text-align: center;
    padding: 2rem;
  }
  .news-bg__wrapper {
    position: absolute;
    width: 1px;
    height: 1%;
    transform: translate3d(0, var(--scroll-offset), 0);
    transition: transform 0.8s ease-out;
    z-index: 2;
    &__contents1 {
      width: fit-content;
      transform: scale(0.1);
      margin-right: 0;
      margin-left: auto;
      margin-top: max(-250vw, -250px);
      transition: transform 0.8s ease-in-out;
      position: relative;
      @include mixins.max-screen(768px) {
        margin-top: -20vw;
      }
      .news_pt1 {
        width: min(139px, 37.06vw);
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
    &__contents2 {
      width: fit-content;
      margin-right: auto;
      margin-left: 0;
      transition: transform 0.8s ease-in-out;
      position: relative;
      .news_pt2 {
        width: min(217px, 57.86vw);
        transition: transform 0.8s ease-in-out;
        position: relative;
        transform: scale(0.1);

        @include mixins.max-screen(768px) {
          width: 21.33vw;
          max-width: auto;
        }
      }
      &.inview {
        .news_pt2 {
          transform: scale(1);
        }
      }
    }
    &.top {
      top: 50%;
      right: 10%;
      @include mixins.max-screen(768px) {
        top: 25%;
        right: 14%;
      }
    }
    &.bottom {
      bottom: 15%;
      left: -3%;
      @include mixins.max-screen(768px) {
        bottom: 10%;
      }
    }
  }
}

</style>

<style lang="scss">
.detail-content {
  margin-top: min(20px, 1.38vw);
  padding: 0 min(40px, 2.77vw);
  p {
    img {
      display: block;
      margin: 0 auto;
      @include mixins.max-screen(768px) {
        width: 90%;
      }
    }
  }
}
</style>