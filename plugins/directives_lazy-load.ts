// 圖片 lazy load
// <img v-lazy-load="'image.jpg'" />
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('lazy-load', {
    mounted (el, binding) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.src = binding.value;
            observer.unobserve(el);
          }
        });
      });
      observer.observe(el);
      el._observer = observer;
    },
    unmounted (el) {
      el._observer?.unobserve(el);
    }
  });
});
