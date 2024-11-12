<script setup lang="ts">
// PageDemoIcon 圖標
</script>

<template lang="pug">
.PageDemoIcon
  p PageDemoIcon
  a(href="https://icones.js.org/" target="_blank") Nuxt Icon Link
  Icon(name="my-icon:demo")
  Icon(name="material-symbols:10k-outline-sharp")
</template>

<style lang="scss" scoped>
// 佈局 ----
.PageDemoIcon {
  @include col(10px);
  // TODO
}

// 組件 ----
</style>
