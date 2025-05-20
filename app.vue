<script setup lang="ts">

const storeEnv = StoreEnv(); // 快取環境變數
UseInitMeta(); // meta 資訊
UseInitWindow();

storeEnv.Init();

</script>

<template lang="pug">
//- ElConfigProvider(:locale="$elementI18n.elLocale.value")
div
  NuxtLoadingIndicator(color="#86D4A187")
  LoadingPage
  NuxtLayout
    NuxtPage
  .group-area
    OpenGroup
</template>
