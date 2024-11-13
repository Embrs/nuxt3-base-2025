<script setup lang="ts">
// PageDemoColor 主題色
const colorMode = useColorMode();
const ChangeTheme = (theme: ThemeType) => {
  colorMode.preference = theme;
};
</script>

<template lang="pug">
.PageDemoColor
  p PageDemoColor
  .row-item
    button(@click="ChangeTheme('light')") light
    button(@click="ChangeTheme('dark')") dark
    button(@click="ChangeTheme('system')") system
  .color-box
</template>

<style lang="scss" scoped>
// 佈局 ----
.PageDemoColor {
  // TODO
}

// 組件 ----
.row-item {
  @include row(10px);
}

.color-box {
  @include wh(100px);
  background-color: $demo;
}
</style>
