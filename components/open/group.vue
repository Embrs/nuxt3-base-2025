<script setup lang="ts">
// OpenGroup
// import { OpenDialogDemo } from '@/.nuxt/components';

// 資料 --------------------------------------------------------------------------------------------
const openList = ref<OpenData[]>([]);

// Component ---------------------------------------------------------------------------------------
const openMap: { [key: string]: any } = {
  OpenDialogDemo: resolveComponent('OpenDialogDemo') // 測試用
  // DialogDemo
};

// 接收事件 -----------------------------------------------------------------------------------------
// 關閉銷毀
const OnClose = (uuid: string) => {
  const findIndex = openList.value.findIndex((item) => item.uuid === uuid);
  if (findIndex === -1) return;
  openList.value.splice(findIndex, 1);
};

// 生命週期 -----------------------------------------------------------------------------------------
onMounted(() => {
  mitt.on('open', (openData: OpenData) => {
    openList.value.push(openData);
  });
});

onBeforeUnmount(() => {
  mitt.off('open');
});
</script>

<template lang="pug">
#OpenGroup(v-if="openList.length > 0")
  component(
    :is="openMap[drawerItem.type]"
    v-for="(drawerItem, index) of openList" :key="drawerItem.uuid"
    :params="drawerItem.params"
    :resolve="drawerItem.resolve"
    :level="index"
    @on-close="OnClose(drawerItem.uuid)"
  )
</template>

<style lang="scss" scoped>
// 佈局 ----
#OpenGroup {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
