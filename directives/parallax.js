// ~/directives/parallax.js
export default {
  mounted(el, binding) {
    const speed = binding.value?.speed ?? 0.5;

    // ラッパー要素を作成（レイアウトに合わせて display や width の調整が必要な場合は変更してください）
    const wrapper = document.createElement('div');
    // ブロック要素としてレイアウト崩れを防止（必要に応じて調整）
    wrapper.style.display = 'block';
    wrapper.style.width = '100%';
    
    // 対象要素をラッパーで囲む
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
    // 後で解除するために wrapper を保存
    el._parallax_wrapper = wrapper;

    const onScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // ラッパーの中央位置と画面中央との差分を元にオフセットを計算
      const factor = (rect.top + rect.height / 2 - windowHeight / 2) / windowHeight;
      const additionalTranslateY = factor * speed * -100;
      // ラッパーにのみ translateY を適用（内部の transform には影響しない）
      wrapper.style.transform = `translateY(${additionalTranslateY}px)`;
    };

    window.addEventListener("scroll", onScroll);
    // 初期状態の計算
    onScroll();
    el._parallax_onScroll = onScroll;
  },
  unmounted(el) {
    window.removeEventListener("scroll", el._parallax_onScroll);
    // ラッパーを解除して元のDOM構造に戻す
    if (el._parallax_wrapper) {
      const wrapper = el._parallax_wrapper;
      wrapper.parentNode.insertBefore(el, wrapper);
      wrapper.parentNode.removeChild(wrapper);
    }
    delete el._parallax_onScroll;
    delete el._parallax_wrapper;
  }
};
