<script setup lang="ts">
// PageDemoColor 主題色
const colorMode = useColorMode();
const ChangeTheme = (theme: ThemeType) => {
  colorMode.preference = theme;
};
</script>

<template>
<div>
  <p>主題色</p>
  <div>
    <button @click="ChangeTheme('light')">light</button>
    <button @click="ChangeTheme('dark')">dark</button>
    <button @click="ChangeTheme('system')">system</button>
  </div>
  <div class="color-box"></div>
</div>
</template>

<style lang="scss" scoped>
.color-box {
  width: 100px;
  height: 100px;
  background-color: $demo;
}
</style>
