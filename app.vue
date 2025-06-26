<script setup lang="ts">

const storeEnv = StoreEnv(); // 快取環境變數
UseInitMeta(); // meta 資訊
UseInitWindow();

storeEnv.Init();

</script>

<template>
<div>
  <NuxtLoadingIndicator :color="'#86D4A187'" />
  <LoadingPage />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</div>
</template>
