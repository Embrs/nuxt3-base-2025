// 初始聚焦
// <input v-focus />
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('focus', {
    mounted (el) {
      el.focus();
    }
  });
});
