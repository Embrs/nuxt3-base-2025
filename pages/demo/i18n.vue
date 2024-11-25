<script setup lang="ts">
// PageDemoI18n 請填寫功能描述👈
const { locales } = useI18n();

</script>

<template lang="pug">
.PageDemoI18n
  p PageDemoI18n
  NuxtLinkLocale(:to="'/'")
    button {{ $t('common.goHome') }}
  .row-item
    SwitchLocalePathLink(
      v-for="localeItem in locales" :key="localeItem.code" :locale="localeItem.code"
    )
      button {{ localeItem.name }}
  .row-item
    p {{ $t('about.title') }}
    a(href="https://clairechang.tw/2023/08/29/nuxt3/nuxt-v3-i18n/" target="_blank") 教學連結
</template>

<style lang="scss" scoped>
// 佈局 ----
.PageDemoI18n {
  // TODO
}

// 組件 ----
.row-item {
  @include row(10px);
}
</style>
