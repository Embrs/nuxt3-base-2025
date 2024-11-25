<script setup lang="ts">
// Page2 請填寫功能描述👈
const storeDemo = StoreDemo();
</script>

<template lang="pug">
.Page2
  p Page2
  NuxtLinkLocale(to="/") home page
  PageStoreDemo
  p storeDemo2
  p {{ storeDemo.count }}
  p {{ storeDemo.doubleCount }}
</template>

<style lang="scss" scoped>
// 佈局 ----
.Page2 {
  // TODO
}

// 組件 ----
</style>
