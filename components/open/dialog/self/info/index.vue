<script setup lang="ts">
// OpenDialogSelfInfo 自己-資訊
// -- 引入 --------------------------------------------------------------------------------------------
const { t } = useI18n();
const $dialogBase = UseDialoBase();

// -- 資料 --------------------------------------------------------------------------------------------
const elForm = useTemplateRef('elForm');

// 標題
const title = computed(() => {
  return '個人資訊';
});

</script>

<template lang="pug">
ElDialogPlus.OpenDialogSelfInfo(
  v-model="$dialogBase.visible.value"
  type="info"
  :title="title"
  width="600px"
)
  OpenDialogSelfInfoForm(ref="elForm")
  template(#footer="{ AskClose }")
    ElButton(type="primary" @click="AskClose") {{ '關閉' }}
</template>
