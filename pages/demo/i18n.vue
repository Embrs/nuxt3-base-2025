<script setup lang="ts">
// PageDemoI18n 多語系
const { locales } = useI18n();

</script>

<template>
<div>
  <p>PageDemoI18n</p>
  <NuxtLinkLocale :to="'/'">
    <button> {{ $t('common.goHome') }} </button>
  </NuxtLinkLocale>
  <div class="row-item">
    <SwitchLocalePathLink
      v-for="localeItem in locales" :key="localeItem.code" :locale="localeItem.code"
    >
      <button> {{ localeItem.name }} </button>
    </SwitchLocalePathLink>
  </div>
  <p> {{ $t('about.title') }} </p>
  <a href="https://clairechang.tw/2023/08/29/nuxt3/nuxt-v3-i18n/" target="_blank"> 教學連結 </a>
</div>
</template>

<style lang="scss" scoped>
.row-item {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
