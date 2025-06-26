<script setup lang="ts">
// PageDemoStore 全域狀態
const storeDemo = StoreDemo();
</script>

<template>
<div>
  <p>Pinia store</p>
  <button @click="storeDemo.Add"> Add </button>
  <p> {{ storeDemo.count }} </p>
  <p> {{ storeDemo.doubleCount }} </p>
  <DemoStore />
</div>
</template>
