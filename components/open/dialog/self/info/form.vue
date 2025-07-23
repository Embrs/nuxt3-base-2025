<script setup lang="ts">
// OpenDialogSelfInfoForm 自己-資訊 表單
// -- 引入 --------------------------------------------------------------------------------------------
// -- 資料 --------------------------------------------------------------------------------------------
const isInit = ref(false);
const selfInfo = ref<SelfInfoRes>();
const isLoading = ref<boolean>(false);

// -- 接收事件 -----------------------------------------------------------------------------------------
// watch(()=>,()=>{},{deep: true, immediate: true})
// -- 流程 --------------------------------------------------------------------------------------------
const InitFlow = async () => {
  try {
    isInit.value = false;
    isLoading.value = true;
    if (!await ApiGetSelfInfo()) return false;
    isInit.value = true;
    return true;
  } catch (err) {
    return false;
  } finally {
    isLoading.value = false;
  }
};
// -- 函式 --------------------------------------------------------------------------------------------
// -- Api ---------------------------------------------------------------------------------------------
/** 取得個人資訊 */
const ApiGetSelfInfo = async () => {
  const { data, status } = await $api.GetSelfInfo();
  if (status.code === 0) {
    selfInfo.value = data;
    return true;
  }
  return false;
};

// -- 生命週期 -----------------------------------------------------------------------------------------
onMounted(() => {
  InitFlow();
});

// -- 發送事件 -----------------------------------------------------------------------------------------
// type Emit = { 'on-change': [id: number, value: any] }
// const emit = defineEmits<Emit>();
// -- 對外暴露 ----------------------------------------------------------------------------------------
// defineExpose({ ... });
</script>

<template lang="pug">
.OpenDialogSelfInfoForm(v-loading="isLoading")
  ElForm(
    v-if="isInit && selfInfo"
    ref="elForm"
    label-position="top"
    size="large"
    require-asterisk-position="right"
    @submit.prevent
  )
    .two-col
      ElFormItem(label="姓名")
        //- p {{ selfInfo.name }}
        p {{ 'TODO' }}
      ElFormItem(label="ID")
        //- p {{ selfInfo.id }}
        p {{ 'TODO' }}
    .two-col
      ElFormItem(label="角色")
        //- p {{ selfInfo.role.name }}
        p {{ 'TODO' }}
    .two-col
      ElFormItem(label="電話")
        //- p {{ selfInfo.phone }}
        p {{ 'TODO' }}
    ElFormItem(label="地址")
      //- p {{ selfInfo.address }}
      p {{ 'TODO' }}
    .two-col
      ElFormItem(label="建立時間")
        //- p {{ selfInfo.time.create }}
        p {{ 'TODO' }}
      ElFormItem(label="最後修改時間")
        //- p {{ selfInfo.time.update }}
        p {{ 'TODO' }}
</template>

<style lang="scss" scoped>
// 佈局 ----
.OpenDialogSelfInfoForm {
  min-height: 300px;
}

// 組件 ----
.two-col {
  display: grid;
  @include rwd-pc {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  @include rwd-mobile {
    grid-template-columns: 1fr;
  }
}
</style>
