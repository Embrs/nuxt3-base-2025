<script setup lang="ts">
// PageDemoStorage 存儲
definePageMeta({
  ssr: false
});
const token = UseStorage<string>('Demo_Token', '');
</script>

<template lang="pug">
.PageDemoStorage
  p PageDemoStorage
  input(v-model="token")
  p {{ token }}
</template>

<style lang="scss" scoped>
// 佈局 ----
.PageDemoStorage {
  input {
    border: 1px solid var(--primary);
  }
}

// 組件 ----
</style>
