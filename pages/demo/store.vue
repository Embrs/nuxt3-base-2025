<script setup lang="ts">
// PageDemoStore 請填寫功能描述👈
const storeDemo = StoreDemo();
</script>

<template lang="pug">
.PageDemoStore
  button(@click="storeDemo.Add") Add
  p {{ storeDemo.count }}
  p {{ storeDemo.doubleCount }}
  UiDemoStore
</template>

<style lang="scss" scoped>
// 佈局 ----
.PageDemoStore {
  // TODO
}

// 組件 ----
</style>
