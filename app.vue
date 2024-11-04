<script setup lang="ts">
// app 請填寫功能描述👈
const storeEnv = StoreEnv();

useAsyncData('init', async () => {
  await storeEnv.Init();
  return true;
});

</script>

<template lang="pug">
//- NuxtRouteAnnouncer
NuxtLayout
  NuxtPage
</template>

<style lang="scss" scoped>
// 佈局 ----
.app {
  // TODO
  width: 1%;
}

// 組件 ----
</style>
