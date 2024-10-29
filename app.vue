<script setup lang="ts">
// app 請填寫功能描述👈
const app = useNuxtApp();
const ClickEmit = () => {
  console.log('aa');
  app.$emit('reload');
};
</script>

<template lang="pug">
//- NuxtRouteAnnouncer
div
  button(@click="ClickEmit") ClickEmit
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
