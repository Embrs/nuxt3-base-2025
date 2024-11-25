<script setup lang="ts">
// PageDemo 請填寫功能描述👈

const pageList = [
  'store',
  'env',
  'icon',
  'safety',
  'i18n',
  'color',
  'font',
  'open'
];
</script>

<template lang="pug">
.PageDemo
  p PageDemo
  NuxtLinkLocale(to="/")
    button to Home
  .btn-list
    NuxtLinkLocale(
      v-for="page of pageList" :key="page"
      :to="`/demo/${page}`"
    )
      button to {{ tool.FirstUpper(page) }}
  NuxtPage
</template>

<style lang="scss" scoped>
// 佈局 ----
.PageDemo {
  // TODO
}

// 組件 ----
.btn-list {
  @include row(10px);
}
</style>
