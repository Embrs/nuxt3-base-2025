<script setup lang="ts">
// OpenDialogDemo 請填寫功能描述👈
</script>

<template lang="pug">
.OpenDialogDemo
  .mask
  .card-box
    p OpenDialogDemo
</template>

<style lang="scss" scoped>
// 佈局 ----
.OpenDialogDemo {
  @include fixed(fill);
  @include center;
  .mask {
    @include absolute(fill);
    background-color: rgb(0 0 0 / 60%);
  }
  .card-box {
    @include wh(400px, 200px);
    background-color: #fff;
  }
  // TODO
}

// 組件 ----
</style>
