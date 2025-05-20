<script setup lang="ts">
// TinymceView - 請填寫功能描述👈
const modelValue = defineModel({
  type: String,
  default: ''
});

</script>

<template lang="pug">
#TinymceView
  div(v-html="modelValue")
</template>

<style lang="scss" scoped>
// @import 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;600;700&display=swap';
// @import 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;600;700&family=Noto+Sans:ital,wght@0,400;0,700;1,600&display=swap';

// 佈局
#TinymceView{
  *{
    letter-spacing: .1em; font-family: "Noto Sans TC"; color: #413737;
  }
  :deep(img)  {
    max-width:100%; height:auto; display:block; object-fit:cover
  }
  :deep(a)     { text-decoration: none; }
  :deep(p)     {
    line-height:1.4; margin: 0; font-size: 16px;
  }
  :deep(table) {
    word-wrap:break-word; word-break:break-all; max-width:100%; border:none; border-color:#999;
  }
  :deep(.mce-object-iframe) {
    max-width: 600px;
    width: 100%;
    margin:0 auto;
    padding:0;
    box-sizing:border-box;

  }
  :deep(iframe) {
    max-width: 600px;
    width: 100%;
  }
  :deep(article) { white-space: normal !important; }
  :deep(ul), :deep(ol) {
    padding-inline-start: 26px;
    margin: 0;
  }
  :deep(td), :deep(pre) {
    margin: 0;
    font-size: 16px;
  }
  :deep(h1), :deep(h2), :deep(h3), :deep(h4), :deep(h5), :deep(h6) {
    margin: 0; font-weight: bold;
  }
}
</style>
