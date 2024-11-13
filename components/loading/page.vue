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

<template lang="pug">
.LoadingPage(v-if="!isFinish" :class="{'is-hide': isHide}")
  Icon(name="svg-spinners:blocks-wave")
</template>

<style lang="scss" scoped>

.LoadingPage {
  @include fs(50px);
  @include wh(100vw, 100vh);
  @include center;
  position: fixed;
  color: $primary;
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
