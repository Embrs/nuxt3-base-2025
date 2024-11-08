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
  .row
    p 1
    p 2
  .col
    p a
    p b
</template>

<style lang="scss" scoped>
// 佈局 ----
html {
  // color: $text;
  // background-color: $bg;
}
.row {
  @include row(10px);
}
.col {
  @include col(10px);
}
</style>
