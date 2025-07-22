<script setup lang="ts">
onMounted(() => {
  $tool.HiddenScrollbar(true);
  $tool.ScrollTop('html', false);
});
onBeforeUnmount(() => {
  $tool.HiddenScrollbar(false);
});
</script>

<template lang="pug">
.LayoutSignIn
  LoadingPage
  ClientOnly
    slot
</template>

<style lang="scss" scoped>

// 佈局
.LayoutSignIn {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  z-index: 0;
  @supports (height: 100dvh) {
    height: 100dvh;
  }
}
</style>
