<script setup lang="ts">
// PageDemoOpen 開啟彈窗

// const ClickOpenDemo = lodash.debounce(() => {
//   const openParams: OpenDialogDemo = {
//     demo: 'test'
//   };
//   openCom('OpenDialogDemo', openParams);
// }, 400, { leading: true, trailing: false });

// const OnRefresh = (val: any) => {
//   console.log('refresh', val);
// };

// onMounted(() => {
//   mitt.on('refresh', OnRefresh);
// });

// onBeforeUnmount(() => {
//   mitt.off('refresh', OnRefresh);
// });
</script>

<template lang="pug">
.PageDemoOpen
  p PageDemoOpen
  button(@click="ClickOpenDemo") Open demo
  p(v-for="i of 100" :key="i") {{ i }}
</template>

<style lang="scss" scoped>
// 佈局 ----
.PageDemoOpen {
  // TODO
}

// 組件 ----
</style>
