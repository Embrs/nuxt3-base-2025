<script setup lang="ts">
// DemoStore pinia store測試
const storeDemo = StoreDemo();
</script>

<template>
<div class="DemoStore">
  <p>DemoStore</p>
  <button @click="storeDemo.Add">Add</button>
  <p>{{ storeDemo.count }}</p>
  <p>{{ storeDemo.doubleCount }}</p>
</div>
</template>

<style lang="scss" scoped>
.DemoStore {
  background-color: #aaa;
}

</style>
