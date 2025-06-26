<script setup lang="ts">
// PageDemoStore 全域狀態
const storeDemo = StoreDemo();
</script>

<template>
<div>
  <p>Pinia store</p>
  <VBtn @click="storeDemo.Add"> Add </VBtn>
  <p> {{ storeDemo.count }} </p>
  <p> {{ storeDemo.doubleCount }} </p>
  <DemoStore />
</div>
</template>
