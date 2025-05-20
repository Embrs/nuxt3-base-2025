<script setup lang="ts">
// DemoStore 請填寫功能描述👈
const storeDemo = StoreDemo();
</script>

<template lang="pug">w
.DemoStore
  p DemoStore
  button(@click="storeDemo.Add") Add
  p {{ storeDemo.count }}
  p {{ storeDemo.doubleCount }}
</template>

<style lang="scss" scoped>
// 佈局 ----
.DemoStore {
  // TODO
  background-color: #aaa;
}

// 組件 ----
</style>
