<script setup lang="ts">
// PageDemoOpen 開啟彈窗

const $re = UseRe();

const ClickOpenDemo = lodash.debounce(() => {
  const _params: OpenDialogDemo = {
    demo: 'test'
  };
  openCom('OpenDialogDemo', _params);
}, 400, { leading: true, trailing: false });

const OnRefresh = (val: any) => {
  console.log('demo refresh', val);
};

onMounted(() => {
  $re.RefreshBind(OnRefresh);
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
