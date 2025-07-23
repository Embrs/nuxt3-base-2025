<script setup lang="ts">
// BgmDashboard 儀表板
const storeMenu = StoreMenu();
const storeSelf = StoreSelf();
</script>

<template lang="pug">
.BgmDashboard
  p BgmDashboard
  NuxtLink(to="/bgm/customer") Customer
  NuxtLink(to="/bgm/staff") Staff

  ElButton(@click="$open.OpenDialogExCreate") OpenDialogExCreate
  ElButton(@click="$open.OpenDialogExInfo") OpenDialogExInfo
  ElButton(@click="$open.OpenDialogExEdit") OpenDialogExEdit
  ElButton(@click="$open.OpenDrawerExCreate") OpenDrawerExCreate
  ElButton(@click="$open.OpenDrawerExInfo") OpenDrawerExInfo
  ElButton(@click="$open.OpenDrawerExEdit") OpenDrawerExEdit
</template>

<style lang="scss" scoped>
// 佈局 ----
.BgmDashboard {
  // TODO
}

// 組件 ----
</style>
