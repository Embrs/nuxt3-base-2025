<script setup lang="ts">
// PageDemo 請填寫功能描述👈
const pageList = [
  'color',
  'env',
  'i18n',
  'icon',
  'storage',
  'store'
];
</script>

<template>
<div class="PageDemo">
  <p>PageDemo</p>
  <NuxtLinkLocale to="/">
    <button>to Home</button>
  </NuxtLinkLocale>
  <p>__</p>
  <div class="btn-list">
    <NuxtLinkLocale
      v-for="page of pageList" :key="page"
      :to="`/demo/${page}`"
    >
      <button>to {{ $tool.FirstUpper(page) }}</button>
    </NuxtLinkLocale>
  </div>
  <NuxtPage />
</div>
</template>

<style lang="scss" scoped>
.btn-list {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
