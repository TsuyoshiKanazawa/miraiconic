export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('observe', {
    mounted(el, binding) {
      let observerOptions = {
        root: null,
        threshold: [0, 0.1],
      };

      let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.add(binding.value || 'inview');
          }/* else {
            el.classList.remove(binding.value || 'inview');
          }*/
        });
      }, observerOptions);

      observer.observe(el);
      el._observer = observer;
    },
    unmounted(el) {
      if (el._observer) {
        el._observer.disconnect();
        delete el._observer;
      }
    },
  });
});
