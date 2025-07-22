<script setup lang="ts">
// ElPaginationPlus 分頁
</script>

<template lang="pug">
ElPagination.page(
  v-bind="$attrs"
  :pager-count="5"
  background
  layout="prev, pager, next"
)
</template>

<style lang="scss" scoped>
// 佈局 ----

// 組件 ----
</style>
