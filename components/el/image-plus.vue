<script setup lang="ts">
// ElImagePlus 等比縮放
// -- 引入 --------------------------------------------------------------------------------------------
// import { Picture as IconPicture } from '@element-plus/icons-vue';

// -- 資料 --------------------------------------------------------------------------------------------
type Props = {
  width?: number // 寬，100~0 為 %
  height?: number // 高，100~0 為 %, useHeightScale = true 時為寬的比例
  useScale?: boolean
  showBorder?: boolean
  borderRedius?: string
}

const props = withDefaults(defineProps<Props>(), {
  width: 100,
  height: 100,
  useScale: false,
  showBorder: false,
  borderRedius: '4px'
});

// 圖片限制樣式
const imgBoxStyle = computed(() => {
  const _style: any = {};
  _style.width = `${props.width}${props.width <= 100 ? '%' : 'px'} !important`;

  if (props.useScale) {
    _style['padding-top'] = `${props.height}% !important`;
  } else {
    _style.height = `${props.height}${Number(props.height) <= 100 ? '%' : 'px'} !important`;
  }
  return _style;
});

</script>

<template lang="pug">
.ElImagePlus(:style="imgBoxStyle" :class="{ 'border': props.showBorder }")
  ElImage.img(
    lazy
    alt="我是圖片"
    fit="cover"
    :zoom-rate="1.2"
    :max-scale="4"
    :min-scale="0.2"
    preview-teleported
    v-bind="$attrs"
  )
    template(#error)
      .err-slot
        NuxtIcon(name="ph:image-duotone" size="45px")
</template>

<style lang="scss" scoped>
// 佈局 ----
.ElImagePlus {
  position: relative;
  overflow: hidden;
}
// 組件 ----
.img {
  @include wh;
  @include absolute;
  display: block;
  -webkit-user-drag: none; // 不可拖曳圖片
  -webkit-touch-callout: none; // ios禁用菜單
}
.err-slot {
  @include wh;
  @include center;
  @include fs(30px);
  color: var(--el-text-color-secondary);
  // background: var(--el-fill-color-light);
  background-color: #fff;
}
.border {
  border: 1px solid var(--el-border-color);
  border-radius: v-bind('props.borderRedius');
}
</style>
