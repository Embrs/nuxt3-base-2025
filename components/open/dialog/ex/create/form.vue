<script setup lang="ts">
// OpenDialogExCreateForm // TODO
// -- 引入 --------------------------------------------------------------------------------------------
const $mitt = UseMitt();

// -- 資料 --------------------------------------------------------------------------------------------
// 準備就緒
const isReady = defineModel<boolean>('isReady', { default: false });

type Props = {
  type: 'edit' | 'create'
  id?: number; // ID
}
const props = defineProps<Props>();

const elForm = useTemplateRef('elForm');

// 加載中
const isLoading = ref(true);

// 是新增
const isCreate = computed(() => props.type === 'create');

const rules = computed(() => {
  return {
    '//TODO': [
      { required: true, message: '請輸入', trigger: 'change' }
    ]
  };
});

// -- 接收事件 -----------------------------------------------------------------------------------------

// -- 流程 --------------------------------------------------------------------------------------------
/** 初始化 */
const InitFlow = (): boolean => {
  isLoading.value = true;
  isReady.value = false;
  try {
    // TODO
    isReady.value = true;
    return true;
  } catch (err) {
    return false;
  } finally {
    isLoading.value = false;
  }
};

/** 新增流程 */
const CreateFlow = async (): Promise<boolean> => {
  isLoading.value = true;
  try {
    // 驗證
    if (!await FormValidate()) return false;
    // 建立
    // if (!await Api()) return false;
    // 重加載
    $mitt.EmitReload();
    // 關閉
    EmitClose();
    return true;
  } catch (err) {
    return false;
  } finally {
    isLoading.value = false;
  }
};

/** 編輯流程 */
const EditFlow = async (): Promise<boolean> => {
  isLoading.value = true;
  try {
    // 驗證
    if (!await FormValidate()) return false;
    // 更新
    // if (!await Api()) return false;
    // 刷新
    $mitt.EmitRefresh();
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
// 驗證
const FormValidate = async () => {
  let pass = true;
  await elForm.value?.validate((_pass) => { pass = _pass; });
  return pass;
};

// -- Api ---------------------------------------------------------------------------------------------

// -- 生命週期 -----------------------------------------------------------------------------------------
onMounted(async () => {
  if (!await InitFlow()) EmitClose();
});

// -- 發送事件 -----------------------------------------------------------------------------------------
type Emit = { 'on-change': [], 'on-close': [] }
const emit = defineEmits<Emit>();

const EmitChange = () => {
  emit('on-change');
};

const EmitClose = () => {
  emit('on-close');
};

// -- 對外暴露 ----------------------------------------------------------------------------------------
defineExpose({
  CreateFlow,
  EditFlow
});
</script>

<template lang="pug">
.OpenDialogExCreateForm(v-loading="isLoading")
  ElForm(
    v-if="isReady"
    ref="elForm"
    :rules="rules"
    label-position="top"
    size="large"
    require-asterisk-position="right"
    @submit.prevent
  )
    //- 基本資料區 ----------------------------------------------
    .g-form-title {{ '基本資料' }}
    .g-form-two-col
</template>

<style lang="scss" scoped>
// 佈局 ----
.OpenDialogExCreateForm {
  min-height: 300px;
}

// 組件 ----
</style>
