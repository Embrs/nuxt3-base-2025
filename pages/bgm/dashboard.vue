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

  ElButton(@click="$dialog.OpenDialogExCreate") OpenDialogExCreate
  ElButton(@click="$dialog.OpenDialogExInfo") OpenDialogExInfo
  ElButton(@click="$dialog.OpenDialogExEdit") OpenDialogExEdit
</template>

<style lang="scss" scoped>
// 佈局 ----
.BgmDashboard {
  // TODO
}

// 組件 ----
</style>
