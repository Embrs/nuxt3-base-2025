<script setup lang="ts">
// OpenDialogSelfChangePasswordForm 自己-修改密碼 表單
// -- 引入 --------------------------------------------------------------------------------------------
const { t } = useI18n();

// -- 資料 --------------------------------------------------------------------------------------------
const params = ref({
  oldPassword: '',
  newPassword: '',
  confirmPassword: ''
});

const elForm = useTemplateRef('elForm');

const rules = computed(() => {
  return {
    oldPassword: [
      { required: true, message: '請輸入舊密碼', trigger: 'change' }
    ],
    newPassword: [
      { required: true, validator: ValidateNewPwd, trigger: 'change' }
    ],
    confirmPassword: [
      { required: true, validator: ValidateCheckNewPwd, trigger: 'change' }
    ]
  };
});

// -- 接收事件 -----------------------------------------------------------------------------------------

// -- 流程 --------------------------------------------------------------------------------------------
// 送出修改流程
const SendChangeFlow = async () => {
  // 1. 驗證
  const isPass = await FormValidate();
  if (!isPass) return;
  // 2. API
  if (!await ApiChangSelfPwd()) return;
  // 3. message
  ElMessage.success(t('dialog.modifyComplete'));
  // 4. event
  EmitClose();
};

// -- 函式 --------------------------------------------------------------------------------------------
// 驗證
const FormValidate = async () => {
  let pass = true;
  await elForm.value?.validate((_pass) => { pass = _pass; });
  return pass;
};

// 驗證 新密碼
const ValidateNewPwd = (_rule: any, value: any, callback: any) => {
  // 請輸入新密碼
  if (value === '') {
    callback(new Error('請輸入新密碼'));
    return;
  }
  // 密碼長度需至少8位
  const lengthCheck = value.length >= 8;
  if (!lengthCheck) {
    callback(new Error('密碼長度需至少8位'));
    return;
  }
  // 密碼需包含英文字母和數字
  const isValid = /[a-zA-Z]/.test(value) && /\d/.test(value);
  if (!isValid) {
    callback(new Error('密碼需包含英文字母和數字'));
    return;
  }

  if (params.value.confirmPassword !== '') {
    if (!elForm.value) return;
    elForm.value?.validateField('confirmPassword');
  }

  callback();
};

//  驗證 確認新密碼
const ValidateCheckNewPwd = (_rule: any, value: any, callback: any) => {
  // 請再次輸入新密碼
  if (value === '') return callback(new Error('請再次輸入新密碼'));
  // 密碼不一致
  if (value !== params.value.newPassword) {
    callback(new Error('密碼不一致'));
    return;
  }

  callback();
};

// -- Api ---------------------------------------------------------------------------------------------
/** 修改自己密碼 */
const ApiChangSelfPwd = async () => {
  const _params = {
    old_password: params.value.oldPassword,
    new_password: params.value.newPassword
  };
  const { status } = await $api.ChangSelfPwd(_params);
  if (status.code === 0) return true;
  return false;
};

// -- 生命週期 -----------------------------------------------------------------------------------------
// onMounted(()=>{});

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
defineExpose({ SendChangeFlow });
</script>

<template lang="pug">
.OpenDialogSelfChangePasswordForm
  ElForm(
    ref="elForm"
    :model="params"
    :rules="rules"
    label-position="top"
    size="large"
    require-asterisk-position="right"
    @submit.prevent
  )
    ElFormItem(label="舊密碼" prop="oldPassword")
      ElInput(
        v-model.trim="params.oldPassword"
        placeholder="請輸入舊密碼"
        type="password"
        show-password
        maxlength="200"
        @change="EmitChange"
      )
    ElFormItem(label="新密碼" prop="newPassword")
      ElInput(
        v-model.trim="params.newPassword"
        placeholder="請輸入新密碼"
        type="password"
        show-password
        maxlength="200"
        @change="EmitChange"
      )
    ElFormItem(label="確認新密碼" prop="confirmPassword")
      ElInput(
        v-model.trim="params.confirmPassword"
        placeholder="請輸入確認新密碼"
        type="password"
        show-password
        maxlength="200"
        @keyup.enter="SendChangeFlow"
        @change="EmitChange"
      )
</template>
