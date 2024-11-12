<script setup lang="ts">
// PageDemoEnv 環境變數
const storeEnv = StoreEnv();
</script>

<template lang="pug">
.PageDemoEnv
  pre {{ storeEnv.env }}
</template>

<style lang="scss" scoped>
// 佈局 ----
.PageDemoEnv {
  // TODO
}

// 組件 ----
</style>
