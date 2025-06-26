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
    <v-btn>to Home</v-btn>
  </NuxtLinkLocale>
  <p>__</p>
  <div class="btn-list">
    <NuxtLinkLocale
      v-for="page of pageList" :key="page"
      :to="`/demo/${page}`"
    >
      <VBtn>to {{ $tool.FirstUpper(page) }}</VBtn>
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
