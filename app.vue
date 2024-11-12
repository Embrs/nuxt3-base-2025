<script setup lang="ts">
const storeEnv = StoreEnv();

storeEnv.Init();

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
