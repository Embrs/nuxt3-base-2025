<script setup lang="ts">
// LayoutHeader
// -- 引入 --------------------------------------------------------------------------------------------
const storeMenu = StoreMenu();
const storeRouteCurrent = StoreRouteCurrent();
const storeTool = StoreTool();
// -- 資料 --------------------------------------------------------------------------------------------
// 麵包屑
const crumbsList = computed(() => {
  const points = storeRouteCurrent.pathPoints;
  const _list = [];
  if (!points.length) return [];
  for (const key of points) {
    if (storeMenu.menuMap[key]) {
      _list.push(storeMenu.menuMap[key]);
    }
  }
  return _list;
});

const menuIcon = computed(() => {
  if (storeTool.isMenuOpen) return 'mingcute:close-fill';
  return 'ph:list-bold';
});
// -- 接收事件 -----------------------------------------------------------------------------------------
const ClickMenuCtrl = () => {
  storeTool.isMenuOpen = !storeTool.isMenuOpen;
};
</script>

<template lang="pug">
.LayoutHeader
  .left-area
    NuxtIcon.menu-ctrl.web-hidden(:name="menuIcon" @click="ClickMenuCtrl")
    .bread-crumbs
      NuxtLinkLocale.bread-crumb-item(
        v-for="crumbsItem of crumbsList" :key="crumbsItem.key"
        :to="crumbsItem.path"
      )
        NuxtIcon(v-if="crumbsItem.icon" :name="crumbsItem.icon")
        p {{ crumbsItem.name }}
  .right-area
    LayoutUserCtrl.web-hidden
</template>

<style lang="scss" scoped>
// 佈局 ----
.LayoutHeader {
  @include row-between;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  border-bottom: 1px solid $primary;
  @include fs(18px);
  .left-area {
    @include row(10px);
  }
  .right-area {
    @include row(10px);
  }
}

// 組件 ----
.menu-ctrl {
  @include btn-click;
  @include wh(30px);
  color: $primary;
  // transform: rotate(-90deg);
}

.bread-crumbs {
  @include row;
  @include fs(16px, 400);
  color: $gray;
  :not(:last-child) {
    &::after {
      content: '/';
      padding: 0 4px;
    }
  }
  a:last-child {
    font-weight: 700;
    color: $primary;
    transform: scale(1.1);
    transform-origin: center left;
  }
  svg {
    transform: translateY(1px)
  }
}

.bread-crumb-item {
  @include row;
  line-height: 1em;
}
.web-hidden {
  @include rwd-pc {
    display: none;
  }
}
</style>
