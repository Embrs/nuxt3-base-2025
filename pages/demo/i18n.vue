<script setup lang="ts">
// PageDemoI18n 請填寫功能描述👈
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
</script>

<template lang="pug">
.PageDemoI18n
  p PageDemoI18n
  NuxtLink(:to="localePath('/')") {{ $t('backHome') }}
  NuxtLink( :to="switchLocalePath('en')") English
  NuxtLink(:to="switchLocalePath('zh')") 繁體中文
</template>

<style lang="scss" scoped>
// 佈局 ----
.PageDemoI18n {
  // TODO
}

// 組件 ----
</style>
