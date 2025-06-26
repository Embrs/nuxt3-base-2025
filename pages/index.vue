<script setup lang="ts">
// Home 請填寫功能描述👈

</script>

<template>
<div>
  <p>首頁</p>
  <NuxtLinkLocale to="/demo">
    <v-btn> Demo 頁面</v-btn>
  </NuxtLinkLocale>
  <nuxt-link to="/page1">
    <v-btn>page1</v-btn>
  </nuxt-link>
  <nuxt-link to="/page2">
    <v-btn>page2</v-btn>
  </nuxt-link>
</div>
</template>
