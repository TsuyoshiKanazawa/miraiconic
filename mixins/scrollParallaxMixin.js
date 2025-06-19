export default {
  data() {
    return {
      startScroll: null,
      factor: 0.1 // translateY にかける倍率
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleParallaxScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleParallaxScroll);
  },
  methods: {
    handleParallaxScroll() {
      const rect = this.$el.getBoundingClientRect();

      // 要素が画面内に入っているか判定
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // 初回表示時に基準値として scrollY を記録
        if (this.startScroll === null) {
          this.startScroll = window.scrollY;
        }
        // 現在の scrollY との差分で offset を計算
        const offset = (window.scrollY - this.startScroll) * this.factor;
        // CSS変数を更新（例：transform: translateY(var(--scroll-offset));）
        this.$el.style.setProperty('--scroll-offset', `${offset}px`);
      } else {
        // 要素が画面外なら基準値をリセット
        //this.startScroll = null;
        //this.$el.style.setProperty('--scroll-offset', `0px`);
      }
    }
  }
}
