<script setup lang="ts">
// PageDemoFont 字體字型
</script>

<template lang="pug">
.PageDemoFont
  p PageDemoFont

  .title Noto Sans
  .sans ABCDEFG 你好

  .title Noto Sans TC
  .sans-tc ABCDEFG 你好

  .title Sour Gummy
  .sour-gummy ABCDEFG 你好

</template>

<style lang="scss" scoped>
// 佈局 ----
.PageDemoFont {
  // TODO
}

// 組件 ----
.title {
  @include fs(30px);
  border-top: 1px solid black;
}
.sans {
  @include fs(40px, 900);
  font-family: 'Noto Sans';
}
.sans-tc {
  @include fs(40px, 900);
  font-family: 'Noto Sans TC';
}
.sour-gummy {
  @include fs(40px, 900);
  font-family: 'Sour Gummy';
}
</style>
