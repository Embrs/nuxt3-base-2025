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
    <VBtn @click="ChangeTheme('light')">light</VBtn>
    <VBtn @click="ChangeTheme('dark')">dark</VBtn>
    <VBtn @click="ChangeTheme('system')">system</VBtn>
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
