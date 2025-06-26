<script setup lang="ts">
// PageDemoEnv 環境變數
const storeEnv = StoreEnv();
</script>

<template>
<div>
  <p>環境變數</p>
  <pre>{{ storeEnv.env }}</pre>
</div>
</template>
