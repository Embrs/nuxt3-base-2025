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
  <v-text-field v-model="token" :style="{maxWidth: '200px'}" />
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
