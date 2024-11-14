<script setup lang="ts">
import { UseInitMeta } from './composables/use-init-meta';

const storeEnv = StoreEnv(); // 快取環境變數
const $defer = UseDefer(); // 延遲渲染
UseInitMeta(); // meta 資訊

storeEnv.Init();

</script>

<template lang="pug">
div
  NuxtLoadingIndicator(color="#86D4A187")
  NuxtLayout
    NuxtPage
  ClientOnly
    OpenGroup(v-if="$defer.IsDefer(100)")
</template>

<style lang="scss" scoped>
// 佈局 ----
html {
  // color: $text;
  // background-color: $bg;
}
</style>
