<script setup lang="ts">
// OpenDrawerExInfo // TODO
// -- 引入 --------------------------------------------------------------------------------------------
const $dialogBase = UseDialoBase();

// -- 資料 --------------------------------------------------------------------------------------------
type Props = {
  params: any // OpenDrawerExInfo; // 參數
}

const props = defineProps<Props>();

const elForm = useTemplateRef('elForm');

// 標題
const title = computed(() => {
  return `Ex 資訊【ID：${props.params.id}】`;
});

// 準備就緒
const isReady = ref(false);

// -- 接收事件 -----------------------------------------------------------------------------------------
const ClickAction = $lodash.debounce(async (active: string) => {
  if ($dialogBase.isSendLock.value) return;
  $dialogBase.isSendLock.value = true;
  switch (active) {
    case 'delete': {
      await elForm.value?.DeleteFlow();
      break;
    }
    case 'edit': {
      await elForm.value?.OpenEditDrawer();
      break;
    }
  }
  $dialogBase.isSendLock.value = false;
}, 1000, { leading: true, trailing: false });

</script>

<template lang="pug">
ElDrawerPlus.OpenDrawerExInfo(
  v-model="$dialogBase.visible.value"
  :title="title"
  type="info"
  width="600px"
)
  OpenDrawerExInfoForm(
    :id="props.params.id"
    ref="elForm"
    v-model:isReady="isReady"
    @on-close="$dialogBase.OnClose"
  )
  template(v-if="isReady" #footer="{}")
    ElButton(
      :disabled="$dialogBase.isSendLock.value"
      type="danger"
      @click="ClickAction('delete')"
    ) 刪除
    ElButton(
      :disabled="$dialogBase.isSendLock.value"
      type="primary"
      @click="ClickAction('edit')"
    ) 編輯
</template>
