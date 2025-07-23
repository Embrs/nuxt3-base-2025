<script setup lang="ts">
// LayoutMenu 選單列表
// -- 引入 --------------------------------------------------------------------------------------------
// import logo from '@/assets/img/logo.svg';

// -- 資料 --------------------------------------------------------------------------------------------
const storeMenu = StoreMenu();
const storeRouterCurrent = StoreRouteCurrent();

watch(
  () => storeRouterCurrent.pageKey,
  () => {
    OpenToCurrentPath();
  }
);

// -- 接收事件 -----------------------------------------------------------------------------------------

// -- 流程 --------------------------------------------------------------------------------------------

// -- 函式 --------------------------------------------------------------------------------------------
const OpenToCurrentPath = () => {
  const points = storeRouterCurrent.pathPoints;
  let currentList = storeMenu.menuList;
  for (const key of points) {
    const find = currentList.find((item) => item.key === key);
    if (find) {
      find.isOpen = true;
      currentList = find.children;
    }
  }
};
// -- Api ---------------------------------------------------------------------------------------------

// -- 生命週期 -----------------------------------------------------------------------------------------
onMounted(() => {
  storeMenu.InitMenuList();
  OpenToCurrentPath();
});

</script>

<template lang="pug">
#LayoutMenu
  .menu-bar
    .logo-area
      .logo-img
        p //TODO Logo img
        //- ElImagePlus(:src="logo" fit="contain")
    .menu-list(v-scroll-more)
      LayoutMenuList(
        :isOpen="true"
        :currentPage="storeRouterCurrent.pageKey"
        paddingLeft="0"
        :menuList="storeMenu.menuList"
      )
      .bottom-gap
    .info-area
      p Copy right
</template>

<style lang="scss" scoped>
// 佈局 ----
#LayoutMenu {
  height: 100%;
  position: relative;
}
.menu-bar {
  width: 250px;
  height: 100%;
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  background-color: $menu-bg;
  z-index: 1;
  transition: width .4s ease;

  .logo-area {
    @include col(4px, center);
    @include fs(20px);
    position: relative;
    padding: 20px;
  }
  .info-area {
    @include center(4px);
    @include fs(18px);
    height: 50px;
    padding: 0 20px;
    border-top: 1px solid rgb(255 255 255 / 50%);
    .num {
      @include fs(26px);
      transform: translateY(-2px)
    }
  }
}

// 組件 ----
.logo-img {
  @include center;
  width: 100%;
  height: 86px;
  padding: 12px 0;
  background-color: #00000022;
  border-radius: 4px;
}

.menu-list {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  // padding-bottom: 30px;
  .bottom-gap {
    height: 30px;
  }
}

.menu-ctrl {
  position: absolute;
  top: 10px;
  right: 14px;
  transform: rotate(-90deg);
  margin-left: 10px;
  @include rwd-pc {
    display: none;
  }
  @include btn-click;
  @include fs(24px);
}

</style>
