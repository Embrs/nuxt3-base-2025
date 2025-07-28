// 點擊外部
// <div v-click-outside="handleClickOutside"></div>
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', {
    mounted (el, binding) {
      el.clickOutsideEvent = (event: Event) => {
        if (!(el === event.target || el.contains(event.target))) {
          binding.value(event);
        }
      };
      document.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted (el) {
      document.removeEventListener('click', el.clickOutsideEvent);
    }
  });
});
