<script setup lang="ts">
// Bgm
definePageMeta({ layout: 'bgm' });

</script>

<template lang="pug">
//- .BGM 節點不能刪，會造成 i18n 切換失敗
.Bgm
  NuxtPage
</template>

<style lang="scss" scoped>
.Bgm {
  @include wh;
}
// 佈局 ----
</style>
