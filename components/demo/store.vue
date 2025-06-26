<script setup lang="ts">
// DemoStore pinia store測試
const storeDemo = StoreDemo();
</script>

<template>
<div class="DemoStore">
  <p>DemoStore</p>
  <VBtn @click="storeDemo.Add">Add</VBtn>
  <p>{{ storeDemo.count }}</p>
  <p>{{ storeDemo.doubleCount }}</p>
</div>
</template>

<style lang="scss" scoped>
.DemoStore {
  background-color: #aaa;
}

</style>
