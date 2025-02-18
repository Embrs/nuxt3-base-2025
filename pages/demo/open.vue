<script setup lang="ts">
// PageDemoOpen 開啟彈窗

const $mitt = UseMitt();

const ClickOpenDemo = lodash.debounce(async () => {
  const _params: OpenDialogDemo = {
    demo: 'test'
  };
  await $mitt.EmitDialogOpen('OpenDialogDemo', _params);
  console.log('demo page');
}, 400, { leading: true, trailing: false });

const OnRefresh = (val: any) => {
  console.log('demo refresh page', val);
};

onMounted(() => {
  $mitt.OnRefresh(OnRefresh);
});
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
