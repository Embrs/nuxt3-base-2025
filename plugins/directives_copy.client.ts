// 複製文字
// <button v-copy="text">Copy</button>
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('copy', {
    mounted (el, binding) {
      el.addEventListener('click', $tool.CopyText(binding.value));
    },
    unmounted (el, binding) {
      el.removeEventListener('click', $tool.CopyText(binding.value));
    }
  });
});
