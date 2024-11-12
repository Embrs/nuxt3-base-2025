<script setup lang="ts">

const storeEnv = StoreEnv();

if (import.meta.server) {
  storeEnv.Init();
}

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
