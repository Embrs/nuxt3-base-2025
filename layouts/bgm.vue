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
      .bgm-top-area
        p {{ $t('common.bgm') }}
        LayoutUserCtrl
      .bgm-header-area
        LayoutHeader
        LayoutMenuMobile(v-if="storeTool.isMobile")
      .bgm-page-area
        slot
      .bgm-footer-area
        //- LayoutFooter(v-if="storeTool.isMobile")
</template>

<style lang="scss">

// 佈局
// .layout-limit {
//   width: 100vw;
//   height: 100vh;
//   position: relative;
//   overflow: hidden;
//   z-index: 0;
//   @supports (height: 100dvh) {
//     height: 100dvh;
//   }
// }
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
    grid-template-rows: auto auto 1fr auto;
    grid-template-areas:
      'top'
      'header'
      'page'
      'footer';
    overflow: hidden;
    background-color: $gray;

    @include rwd-pc {
      padding: 0 16px 16px;
    }

    @include rwd-mobile {
      padding:0;
    }

    .bgm-top-area {
      @include fs(24px, 500);
      @include row-between;
      grid-area: top;
      padding: 16px 0;
      @include rwd-mobile {
        display: none;
      }
    }
    .bgm-header-area {
      grid-area: header;
      background-color: $gray;
      border-radius: 5px 5px 0 0;
    }
    .bgm-page-area  {
      @include wh;
      grid-area: page;
      position: relative;
      overflow: hidden;
      padding: 10px 12px;
      background-color: $white;
      border-radius: 0 0 5px 5px;
      z-index: 0;
      // @include rwd-mobile {
      //   // footer
      //   padding-bottom: calc(60px + 6px);
      // }
    }
    .bgm-footer-area {
      grid-area: footer;
      width: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
    }
  }
}
</style>
