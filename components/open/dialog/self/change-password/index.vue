<script setup lang="ts">
// OpenDialogSelfChangePassword 自己-修改密碼
// -- 引入 --------------------------------------------------------------------------------------------
const $dialogBase = UseDialoBase();

// -- 資料 --------------------------------------------------------------------------------------------
// type Props = {
//   params: OpenNone; // 參數
// }

// const props = defineProps<Props>();

const elForm = useTemplateRef('elForm');

// 標題
const title = computed(() => {
  return '修改個人密碼';
});

// -- 接收事件 -----------------------------------------------------------------------------------------
// 點擊按鈕
const ClickAction = $lodash.debounce(async (active: string) => {
  if ($dialogBase.isSendLock.value) return;
  $dialogBase.isSendLock.value = true;
  switch (active) {
    case 'submit': {
      await elForm.value?.SendChangeFlow();
      break;
    }
    default: break;
  }
  $dialogBase.isSendLock.value = false;
}, 1000, { leading: true, trailing: false });
</script>

<template lang="pug">
ElDialogPlus.OpenDialogSelfChangePassword(
  v-model="$dialogBase.visible.value"
  type="edit"
  :title="title"
  :isChange="$dialogBase.isChange.value"
  width="400px"
)
  OpenDialogSelfChangePasswordForm(
    ref="elForm"
    @on-change="$dialogBase.OnChange"
    @on-close="$dialogBase.OnClose"
  )
  template(#footer="{ AskClose }")
    ElButton(
      type="info"
      :disabled="$dialogBase.isSendLock.value"
      @click="AskClose"
    ) {{ '取消' }}
    ElButton(
      type="primary"
      :disabled="$dialogBase.isSendLock.value"
      @click="ClickAction('submit')"
    ) {{ '提交' }}
</template>

<style lang="scss" scoped>
// 佈局 ----
</style>
