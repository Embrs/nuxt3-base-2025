<script setup lang="ts">
// OpenDrawerExEdit // TODO
// -- 引入 --------------------------------------------------------------------------------------------
const $dialogBase = UseDialoBase();

// -- 資料 --------------------------------------------------------------------------------------------
type Props = {
  params: any // OpenDialogExEdit; // 參數
}

const props = defineProps<Props>();

const elForm = useTemplateRef('elForm');

// 標題
const title = computed(() => {
  return `Ex 修改【ID：${props.params.id}】`;
});

// 準備就緒
const isReady = ref(false);

// -- 接收事件 -----------------------------------------------------------------------------------------
const ClickAction = $lodash.debounce(async (active: string) => {
  if ($dialogBase.isSendLock.value) return;
  $dialogBase.isSendLock.value = true;
  switch (active) {
    case 'submit': {
      await elForm.value?.EditFlow();
      break;
    }
  }
  $dialogBase.isSendLock.value = false;
}, 1000, { leading: true, trailing: false });

</script>

<template lang="pug">
ElDrawerPlus.OpenDrawerExEdit(
  v-model="$dialogBase.visible.value"
  type="edit"
  :title="title"
  :isChange="$dialogBase.isChange.value"
  width="600px"
)
  OpenDrawerExCreateForm(
    :id="props.params.id"
    ref="elForm"
    v-model:isReady="isReady"
    type="edit"
    @on-change="$dialogBase.OnChange"
    @on-close="$dialogBase.OnClose"
  )
  template(v-if="isReady" #footer="{ AskClose }")
    ElButton(
      type="info"
      :disabled="$dialogBase.isSendLock.value"
      @click="AskClose"
    ) 取消
    ElButton(
      type="primary"
      :disabled="$dialogBase.isSendLock.value"
      @click="ClickAction('submit')"
    ) 送出
</template>
