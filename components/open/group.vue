<script setup lang="ts">
// OpenGroup
// 資料 --------------------------------------------------------------------------------------------
const $mitt = UseMitt();
const openList = ref<OpenData[]>([]);

// 接收事件 -----------------------------------------------------------------------------------------
// 關閉銷毀
const OnClose = (uuid: string) => {
  const findIndex = openList.value.findIndex((item) => item.uuid === uuid);
  if (findIndex === -1) return;
  if (openList.value[findIndex].resolve) {
    openList.value[findIndex].resolve();
  }
  openList.value.splice(findIndex, 1);
};

// 生命週期 -----------------------------------------------------------------------------------------
onMounted(() => {
  $mitt.OnDialogOpen((openData: OpenData) => {
    openList.value.push(openData);
  });

  $mitt.OnDialogCloseAll(() => {
    for (const item of openList.value) {
      if (item.resolve) {
        item.resolve();
      }
    }
    openList.value = [];
  });
});

</script>

<template lang="pug">
#OpenGroup(v-if="openList.length > 0")
  component(
    :is="drawerItem.type"
    v-for="(drawerItem, index) of openList"
    :key="drawerItem.uuid"
    :params="drawerItem?.params"
    :level="index"
    :resolve="drawerItem.resolve"
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
