<script setup lang="ts">
// OpenGroup
import { ref, onBeforeUnmount } from 'vue';

// import DrawerDemo from './drawers/drawer-demo/index.vue';
// import DialogDemo from './dialogs/dialog-demo/index.vue';

// 資料 --------------------------------------------------------------------------------------------
const openList = ref<OpenItem[]>([]);

// Component ---------------------------------------------------------------------------------------
const openMap: { [key: string]: any } = {
  // DrawerDemo,
  // DialogDemo
};

// 接收事件 -----------------------------------------------------------------------------------------
// 關閉銷毀
const OnHide = (uuid: string) => {
  const findIndex = openList.value.findIndex((item) => item.uuid === uuid);
  if (findIndex === -1) return;
  openList.value.splice(findIndex, 1);
};

// 函式 --------------------------------------------------------------------------------------------

// 開啟
const Open = (openData: OpenData) => {
  const data: OpenItem = {
    // uuid: tool.CreateUUID(),
    uuid: `open-${useId()}`,
    type: openData.type,
    params: openData?.params || {}
  };
  openList.value.push(data);
};

// 生命週期 -----------------------------------------------------------------------------------------
onMounted(() => {
  mitt.on('open', (openData: OpenData) => {
    Open(openData);
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
    :params="drawerItem?.params"
    :index="index"
    @on-hide="OnHide(drawerItem.uuid)"
  )
</template>
