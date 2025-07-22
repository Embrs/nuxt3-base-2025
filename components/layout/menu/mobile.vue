<script setup lang="ts">
// LayoutMenuMobile 選單列表
// -- 引入 --------------------------------------------------------------------------------------------
// import logo from '@/assets/img/logo.svg';

// -- 資料 --------------------------------------------------------------------------------------------
const $route = useRoute();
const storeMenu = StoreMenu();
const storeRouteCurrent = StoreRouteCurrent();
const storeTool = StoreTool();

const topGap = ref('50px');

watch(
  () => storeRouteCurrent.pageKey,
  () => {
    OpenToCurrentPath();
  }
);

const currentPage = computed(() => {
  return $route.path.replace('/', '').split('/').pop();
});

const layoutHeight = computed(() => (storeTool.bgmLayoutHeight ? `${storeTool.bgmLayoutHeight}px` : '100vh'));

const openHeight = computed(() => `${storeTool.bgmLayoutHeight - 50}px`);

// -- 接收事件 -----------------------------------------------------------------------------------------
// 關閉 menu
const ClickCloseMenu = () => {
  storeTool.isMenuOpen = false;
};
// -- 流程 --------------------------------------------------------------------------------------------

// -- 函式 --------------------------------------------------------------------------------------------
const OpenToCurrentPath = () => {
  const points = storeRouteCurrent.pathPoints;
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
  OpenToCurrentPath();
  // ClickCloseMenu();
});

storeMenu.InitMenuList();
</script>

<template lang="pug">
#LayoutMenuMobile
  Transition(name="page" mode="out-in")
    .menu-mask(v-show="storeTool.isMenuOpen" @click="ClickCloseMenu")
  .menu-bar(:class="{'open-menu': storeTool.isMenuOpen}")
    .logo-area
      .logo-img
        //- ElImagePlus(:src="logo" fit="contain")
    .menu-list(v-scroll-more)
      LayoutMenuList(
        :isOpen="true"
        :currentPage="currentPage"
        paddingLeft="0"
        :menuList="storeMenu.menuList"
      )
      .bottom-gap
        //- pre.copyright {{ "Copyright © 2024 瀧洋康健 版權所有." }}
</template>

<style lang="scss" scoped>
// 佈局 ----
#LayoutMenuMobile {
  width: calc(100vw);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.menu-mask {
  width: 100vw;
  height: v-bind(layoutHeight);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}
.menu-bar {
  width: 100%;
  height: 0;
  position: absolute;
  top: v-bind(topGap);
  left: 0;
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;
  background-color: $primary;
  backdrop-filter: blur(2px);
  z-index: 1;
  transition: height .4s ease;
  .logo-area {
    @include col(4px, center);
    @include fs(20px);
    position: relative;
    padding: 10px;
  }
}

// 組件 ----
.logo-img {
  width: 100%;
  height: 86px;
  padding: 12px 0;
  background-color: $white;
  border-radius: 4px;
}

.menu-list {
  @include max-w-padding(450px);
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  .bottom-gap{
    height: 30px;
  }
}

.open-menu {
  height: (v-bind(openHeight)) !important;
}

</style>
