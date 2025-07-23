<script setup lang="ts">
// OpenDrawerExCreate // TODO
// -- 引入 --------------------------------------------------------------------------------------------
const $dialogBase = UseDialoBase();

// -- 資料 --------------------------------------------------------------------------------------------
const elForm = useTemplateRef('elForm');

// 標題
const title = computed(() => {
  return 'Ex 新增';
});

// 準備就緒
const isReady = ref(false);

// -- 接收事件 -----------------------------------------------------------------------------------------
const ClickAction = $lodash.debounce(async (active: string) => {
  if ($dialogBase.isSendLock.value) return;
  $dialogBase.isSendLock.value = true;
  switch (active) {
    case 'submit': {
      await elForm.value?.CreateFlow();
      break;
    }
  }
  $dialogBase.isSendLock.value = false;
}, 1000, { leading: true, trailing: false });

</script>

<template lang="pug">
ElDrawerPlus.OpenDrawerExCreate(
  v-model="$dialogBase.visible.value"
  type="edit"
  :title="title"
  :isChange="$dialogBase.isChange.value"
  width="600px"
)
  OpenDrawerExCreateForm(
    ref="elForm"
    v-model:isReady="isReady"
    type="create"
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
    ) 建立
</template>
