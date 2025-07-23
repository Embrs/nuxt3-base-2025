<script setup lang="ts">
// SignIn 登入頁
// -- 引入 --------------------------------------------------------------------------------------------
const $bgmSign = UseBgmSign();
const storeSelf = StoreSelf();

definePageMeta({ layout: 'sign-in' });
// -- 資料 --------------------------------------------------------------------------------------------
// 登入參數
const signInParams = ref<SignInParams>({
  account: '',
  password: ''
});

const rules = computed(() => {
  return {
    account: [{ required: true, message: ' ', trigger: 'change' }],
    password: [{ required: true, message: ' ', trigger: 'change' }]
  };
});

const isSendLock = ref(false);
const elForm = useTemplateRef('elForm');

// -- 接收事件 -----------------------------------------------------------------------------------------
const ClickSignIn = async () => {
  if (isSendLock.value) return;
  isSendLock.value = true;
  await $bgmSign.SignInFlow(signInParams.value, FormValidate);
  setTimeout(() => {
    isSendLock.value = false;
  }, 1000);
};

// -- 函式 --------------------------------------------------------------------------------------------
// 驗證參數
const FormValidate = async () => {
  let pass = true;
  await elForm.value?.validate((_pass) => { pass = _pass; });
  return pass;
};

// -- Api ---------------------------------------------------------------------------------------------

// -- 生命週期 -----------------------------------------------------------------------------------------
onMounted(() => {
  storeSelf.SelfClear();
});

</script>

<template lang="pug">
.SignIn
  .bg-img
    SvgSignin
  .card-box
    .logo-area
      p //TODO Logo img
      //- ElImage.logo-img(:src="logo" lazy)
    .title {{ '後台管理系統' }}
    .form-area
      ElForm.form-sign-in(
        ref="elForm"
        :model="signInParams"
        :rules="rules"
        label-position="top"
        require-asterisk-position="right"
        @submit.prevent
      )

        ElFormItem(label="" prop="account")
          ElInput(
            v-model.trim="signInParams.account"
            style="width:100%"
            placeholder="帳號"
            maxlength="200"
          )
            template(#prepend)
              NuxtIcon(name="material-symbols:person")
        ElFormItem(label="" prop="password")
          ElInput(
            v-model.trim="signInParams.password"
            placeholder="密碼"
            type="password"
            show-password
            maxlength="200"
            @keyup.enter="ClickSignIn"
          )
            template(#prepend)
              NuxtIcon(name="material-symbols:lock")
        .btn-gap
        ElFormItem
          ElButton(
            type="primary"
            size="large"
            :loading="isSendLock"
            style="width:100%"
            @click="ClickSignIn") 登入
</template>

<style lang="scss" scoped>
// 佈局 ----
.SignIn {
  @include wh;
  @include center;
  position: relative;
  overflow: hidden;
  padding: 20px;
  .bg-img {
    @include wh;
    position: fixed;
    top: 0;
    left: 0;
  }
  .card-box {
    @include col(20px, center);
    max-width: 310px;
    width: 100%;
    z-index: 1;
    .form-area {
      width: 100%;
    }
  }
  .logo-area {
    background-color: #00000022;
    color: #fff
  }
}

// 組件 ----
.bg-img {
  @include wh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.logo-img {
  max-width: 250px;
  width: 100%;
}
.title {
  @include fs(30px, 400);
  padding: 10px;
  color: $secondary;
}

.form-sign-in {
  $signin-error: #d88aa5;
  .btn-gap {
    padding-top: 20px;
  }
  // input
  :deep(.el-input__wrapper) {
    height: 40px;
    background-color: #00000024;
    border-radius: 0;
    box-shadow: unset;
    border-bottom: 1px solid $secondary;
    .el-input__inner {
      color: #fff;
      &::placeholder {
        font-weight: 200;
        color: $secondary;
      }
    }
  }

  // left icon
  :deep(.el-input-group__prepend) {
    // height: 40px;
    padding: 0 0 0 10px;
    color: $secondary;
    background-color: #00000024;
    border-radius: 0;
    box-shadow: unset;
    border-bottom: 1px solid $secondary;
  }

  // right icon
  :deep(.el-input__suffix-inner .el-icon) {
    color: $secondary;
  }

  // error
  :deep(.el-form-item.is-error .el-input__wrapper) {
    box-shadow: unset !important;
  }

  :deep(.el-form-item.is-error) {
    .el-input__wrapper, .el-input-group__prepend {
      border-bottom: 1px solid $signin-error;
    }
  }
}

</style>
