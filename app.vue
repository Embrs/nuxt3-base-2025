<script setup lang="ts">
import { UseInitMeta } from './composables/use-init-meta';

const storeEnv = StoreEnv();
UseInitMeta();

storeEnv.Init();

</script>

<template lang="pug">

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
