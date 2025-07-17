// 複製文字
// <button v-copy="text">Copy</button>

const CopyHandler = (event: any) => {
  $tool.CopyText(event.target._copyText || '');
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('copy', {
    mounted (el, binding) {
      el._copyText = binding.value;
      el.addEventListener('click', CopyHandler);
    },
    unmounted (el) {
      el.removeEventListener('click', CopyHandler);
    },
    updated (el, binding) {
      el._copyText = binding.value;
    }
  });
});
