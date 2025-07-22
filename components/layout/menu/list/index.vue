<script setup lang="ts">
// LayoutMenuList
// -- 引入 --------------------------------------------------------------------------------------------
// -- 資料 --------------------------------------------------------------------------------------------
type Props = {
  isOpen?: boolean // 是否展開
  currentPage?: string
  menuList?: MenuItem[] // 選單列表
  level?: number // 階層
}

const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
  currentPage: '',
  menuList: () => [],
  level: 1
});

const storeTool = StoreTool();

const elBox = useTemplateRef('elBox');

// 開闔樣式
const boxStyle = computed(() => {
  if (!props.isOpen) return { 'max-height': 0 };

  return { 'max-height': `${ChildrenCount(props.menuList, 0) * 35}px` };
});

const paddingLeft = computed(() => {
  return `${props.level * 20 + 8}px`;
});

// -- 接收事件 -----------------------------------------------------------------------------------------
const ClickMenuItem = (item: MenuItem) => {
  item.isOpen = !item.isOpen;
  // 有子項目，不關閉
  if (item.children.length > 0) return;
  // 是電腦版，不關閉
  if (storeTool.isPc) return;
  // 有路徑，關閉
  if (item.path) {
    storeTool.isMenuOpen = false;
  }
};

// -- 函式 --------------------------------------------------------------------------------------------
// 計算子項目數
const ChildrenCount = (list: MenuItem[], sum: number = 0): number => {
  if (list.length === 0) return sum;
  let count: number = sum + list.length;
  for (const item of list) {
    count += ChildrenCount(item.children, count);
  }
  return count;
};

</script>

<template lang="pug">
#LayoutMenuList(ref="elBox" :style="boxStyle")
  div(v-for="menuItem of props.menuList" :key="menuItem.key")
    NuxtLinkLocale.menu-link(
      :to="menuItem.path"
      :class="[`level-${props.level}`,{'current-page': currentPage === menuItem.key}]"
      @click="ClickMenuItem(menuItem)"
    )
      .menu-item(
        :class="{'current-group': menuItem.canOpen && menuItem.isOpen}"
      )
        NuxtIcon(v-if="menuItem.icon" :name="menuItem.icon")
        p {{ menuItem.name }}
      NuxtIcon.arrow-icon(
        v-if="menuItem.canOpen"
        name="ic:round-keyboard-arrow-left"
        :class="{'rotate-90': menuItem.isOpen}"
      )
    .list-area(v-if="menuItem.canOpen")
      LayoutMenuList(
        :isOpen="menuItem.isOpen"
        :currentPage="props.currentPage"
        :menuList="menuItem.children"
        :level="props.level + 1"
      )
</template>

<style lang="scss" scoped>
// 佈局 ----
#LayoutMenuList {
  overflow: hidden;
  transition: max-height .4s ease-in-out;
}

// 組件 ----
.menu-link {
  position: relative;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
  padding-right: 10px;
  color: $primary;
  z-index: 1;
  transition:  background-color .4s ease;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-color: $primary;
  }

  @include rwd-pc {
    @include fs(18px, 400);
  }
  @include rwd-mobile {
    @include fs(20px, 400);
  }
}

.level-1 {
  margin-top: 4px;
  color: $white;
}

.menu-item {
  @include row(10px);
  position: relative;
  padding: 6px 4px;
  padding-left: v-bind('paddingLeft');
  &::after {
    width: 0%;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0;
    content: '';
    transition: opacity .4s ease, width .4s ease;
  }
  svg {
    min-width: 24px !important;
    @include fs(24px);
  }
}

.current-group {
  &::after {
    width: 100%;
    opacity: 1;
  }
}

.current-page {
  color: $primary !important;
  background-color: $secondary !important;
}

.arrow-icon {
  @include fs(24px);
  position: relative;
  opacity: .3;
  transition: transform .2s ease;
}

.rotate-90 {
  transform: rotate(-90deg);
}
</style>
