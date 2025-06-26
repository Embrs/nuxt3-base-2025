<script setup lang="ts">
// PageDemoStorage 存儲
definePageMeta({
  ssr: false
});
const token = UseStorage<string>('Demo_Token', '');
</script>

<template>
<div>
  <p>Storage 存儲</p>
  <input v-model="token" />
  <p>{{ token }}</p>
</div>
</template>

<style lang="scss" scoped>
.PageDemoStorage {
  input {
    border: 1px solid var(--primary);
  }
}
</style>
