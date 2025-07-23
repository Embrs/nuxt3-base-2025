<script setup lang="ts">
// LayoutBgm

const storeTool = StoreTool();
onMounted(() => {
  $tool.HiddenScrollbar(true);
  $tool.ScrollTop('html', false);
  storeTool.SetBgmSize();
});
onBeforeUnmount(() => {
  $tool.HiddenScrollbar(false);
});
</script>

<template lang="pug">
//- .layout-limit
.LayoutBgm(v-resize="storeTool.SetBgmSize")
  ClientOnly
    .bgm-left-area
      .bgm-menu-area
        LayoutMenu(v-if="storeTool.isPc")
    .bgm-right-area
      .bgm-header-area
        LayoutHeader
        LayoutMenuMobile(v-if="storeTool.isMobile")
      .bgm-page-area
        slot
</template>

<style lang="scss">

// 佈局

.LayoutBgm {
  width: 100vw;
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  overflow: hidden;
  color: $gray;
  z-index: 0;
  @supports (height: 100dvh) {
    height: 100dvh;
  }
  .bgm-left-area {
    position: relative;
    overflow: hidden;
    @include wh;
    .bgm-menu-area {
      @include wh;
      position: relative;
      overflow: auto;
      color: $white;
      z-index: 1;
    }
  }

  .bgm-right-area {
    @include wh;
    position: relative;
    display: grid;
    grid-template-rows:  auto 1fr;
    grid-template-areas:
      'header'
      'page';
    overflow: hidden;
    background-color: $bgm-layout-bg;

    gap: 1px;

    @include rwd-pc {
      padding: 8px;
    }

    .bgm-header-area {
      grid-area: header;
      background-color: #eee;
    }
    .bgm-page-area  {
      @include wh;
      grid-area: page;
      position: relative;
      overflow: hidden;
      padding: 10px 12px;
      background-color: $white;
      z-index: 0;
    }
  }
}
</style>
