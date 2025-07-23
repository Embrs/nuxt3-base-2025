<script setup lang="ts">
// UserCtrl 使用者控制項
// -- 引入 --------------------------------------------------------------------------------------------
const storeSelf = StoreSelf();
const storeTool = StoreTool();
const $bgmSign = UseBgmSign();

// -- 資料 --------------------------------------------------------------------------------------------

// -- 接收事件 -----------------------------------------------------------------------------------------
// 點擊登出
const ClickSignOut = $lodash.debounce(async () => {
  await $bgmSign.SignOutFlow();
}, 1000, { leading: true, trailing: false });

// 開啟自己-資訊
const ClickOpenDrawerSelfInfo = $lodash.debounce(() => {
  // $open.OpenDialogSelfInfo();
}, 1000, { leading: true, trailing: false });

// 開啟修改個人密碼
const ClickOpenDrawerChangeSelfPassword = $lodash.debounce(() => {
  // $open.OpenDialogSelfChangePassword();
}, 1000, { leading: true, trailing: false });

</script>

<template lang="pug">
.UserCtrl
  ElDropdown
    ElButton(
      type="primary"
      size="large"
      :circle="storeTool.isMobile"
      :link="storeTool.isPc"
    )
      NuxtIcon(name="material-symbols:account-circle")
      .ctrl-mid {{ storeSelf?.selfInfo?.name || '' }}
    template(#dropdown)
      ElDropdownMenu
        ElDropdownItem(@click="ClickOpenDrawerSelfInfo") {{ '個人資訊' }}
        ElDropdownItem(@click="ClickOpenDrawerChangeSelfPassword") {{ '修改密碼' }}
        //- ElDropdownItem(@click="ClickOpenDrawerLang") {{ '語系' }}
        ElDropdownItem(@click="ClickSignOut") {{ '登出' }}
</template>

<style lang="scss" scoped>
// 佈局 ----
.UserCtrl {
  @include row(10px);
  .iconify {
    @include fs(26px);
  }
}

// 組件 ----
.ctrl-mid {
  @include fs(16px, 700);
  @include text-line;
  max-width: 200px;
  overflow: hidden;
  padding-left: 6px;
  @include rwd-mobile {
    display: none !important;
  }
}
</style>
