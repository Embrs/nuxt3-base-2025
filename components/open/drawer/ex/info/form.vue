<script setup lang="ts">
// OpenDrawerExInfoForm // TODO
// -- 引入 --------------------------------------------------------------------------------------------
const $mitt = UseMitt();
const $ask = UseAsk();

// -- 資料 --------------------------------------------------------------------------------------------
// 準備就緒
const isReady = defineModel<boolean>('isReady', { default: false });

type Props = {
  id: number; // ID
}
const props = defineProps<Props>();

// 加載中
const isLoading = ref(true);

// -- 接收事件 -----------------------------------------------------------------------------------------

// -- 流程 --------------------------------------------------------------------------------------------
/** 初始化 */
const InitFlow = (): boolean => {
  isLoading.value = true;
  isReady.value = false;
  try {
    // TODO
    // if (!await Api()) return false;
    isReady.value = true;
    return true;
  } catch (err) {
    return false;
  } finally {
    isLoading.value = false;
  }
};

/** 刪除流程 */
const DeleteFlow = async (): Promise<boolean> => {
  isLoading.value = true;
  try {
    // 詢問刪除
    if (!await $ask.Delete()) return false;
    // 刪除api
    // if (!await Api()) return false;
    // 刷新頁面
    $mitt.EmitReload();
    ElMessage.success('刪除成功');
    // 關閉
    EmitClose();
    return true;
  } catch (err) {
    return false;
  } finally {
    isLoading.value = false;
  }
};

// -- 函式 --------------------------------------------------------------------------------------------
/** 開啟編輯 */
const OpenEditDrawer = () => {
  // const _params: OpenDrawerExEdit = {
  //   id: 123
  // };
  // $open.OpenDrawerExEdit(_params);
};

// -- Api ---------------------------------------------------------------------------------------------

// -- 生命週期 -----------------------------------------------------------------------------------------
onMounted(async () => {
  if (!await InitFlow()) EmitClose();
  $mitt.OnRefresh(InitFlow);
  $mitt.OnReload(InitFlow);
});

// -- 發送事件 -----------------------------------------------------------------------------------------
type Emit = { 'on-close': [] }
const emit = defineEmits<Emit>();

const EmitClose = () => {
  emit('on-close');
};

// -- 對外暴露 ----------------------------------------------------------------------------------------
defineExpose({
  DeleteFlow,
  OpenEditDrawer
});
</script>

<template lang="pug">
.OpenDrawerExInfoForm(v-loading="isLoading")
  ElForm(
    v-if="isReady"
    label-position="top"
    size="large"
    require-asterisk-position="right"
  )
    //- 基本資料區 ----------------------------------------------
    .g-form-title 基本資料

</template>

<style lang="scss" scoped>
// 佈局 ----
.OpenDrawerExInfoForm {
  min-height: 300px;
}

// 組件 ----
</style>
