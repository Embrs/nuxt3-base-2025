<script setup lang="ts">

const storeEnv = StoreEnv();

useAsyncData('init', async () => {
  await storeEnv.Init();
  return true;
});

</script>

<template lang="pug">
.dev
  NuxtLayout
    NuxtPage
</template>

<style lang="scss" scoped>
// 佈局 ----
html {
  // color: $text;
  // background-color: $bg;
}
</style>
