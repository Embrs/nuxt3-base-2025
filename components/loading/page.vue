<script setup lang="ts">
// .LoadingPage
const nuxtApp = useNuxtApp();
const isFinish = ref(false);
const isHide = ref(false);

nuxtApp.hooks.hookOnce('page:finish', () => {
  isHide.value = true;
  setTimeout(() => {
    isFinish.value = true;
  }, 600);
});

nuxtApp.hooks.hookOnce('app:rendered', (e) => {
  if (e.ssrContext?.error) {
    isHide.value = true;
    isFinish.value = true;
  }
});
</script>

<template>
<div
  v-if="!isFinish"
  :class="{'is-hide': isHide}"
  class="LoadingPage"
>
  <NuxtIcon name="svg-spinners:blocks-wave" />
</div>
</template>

<style lang="scss" scoped>

.LoadingPage {
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  background-color: white;
  opacity: 1;
  z-index: 9999;
  transition: opacity .4s ease;
}

// 組件 ----
.is-hide {
  opacity: 0 !important;
}
</style>
