<script setup lang="ts">
// UserCtrl 使用者控制項
// -- 引入 --------------------------------------------------------------------------------------------
const storeSelf = StoreSelf();

// -- 資料 --------------------------------------------------------------------------------------------
const $bgmSign = UseBgmSign();

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

// 開啟語系
const ClickOpenDrawerLang = $lodash.debounce(() => {
  // $open.OpenDialogLang();
}, 1000, { leading: true, trailing: false });
</script>

<template lang="pug">
.UserCtrl
  //- 電腦模式
  .web-btn
    .ctrl-left
      NuxtIcon(name="mdi:user")
    ElDropdown
      .ctrl-mid {{ storeSelf?.selfInfo?.name || '' }}
      template(#dropdown)
        ElDropdownMenu
          ElDropdownItem(@click="ClickOpenDrawerSelfInfo") {{ '個人資訊' }}
          ElDropdownItem(@click="ClickOpenDrawerChangeSelfPassword") {{ '修改密碼' }}
          ElDropdownItem(@click="ClickOpenDrawerLang") {{ '語系' }}
    ElTooltip(
      :content="'登出'"
      :auto-close="1000"
      :enterable="false"
    )
      .ctrl-right(@click="ClickSignOut")
        NuxtIcon.icon(name="mi:log-out")
  //- 手機模式
  .mobile-btn
    ElDropdown
      ElButton(type="primary" circle plain)
        NuxtIcon(name="mdi:user")
      template(#dropdown)
        ElDropdownMenu
          ElDropdownItem(@click="ClickOpenDrawerSelfInfo") {{ '個人資訊' }}
          ElDropdownItem(@click="ClickOpenDrawerChangeSelfPassword") {{ '修改密碼' }}
          ElDropdownItem(@click="ClickOpenDrawerLang") {{ '語系' }}
          ElDropdownItem(@click="ClickSignOut") {{ '登出' }}
</template>

<style lang="scss" scoped>
// 佈局 ----
.UserCtrl {
  @include row(10px);
}

// 組件 ----
.mobile-btn {
  @include rwd-pc {
    display: none;
  }
  span {
    @include wh(26px);
  }
}
.web-btn {
  @include fs(16px);
  @include row(4px);
  height: 36px;
  cursor: pointer;
  user-select: none;
  color: $primary;
  background-color: $white;
  border: 1px solid $primary;
  border-radius: 5px;
  @include rwd-mobile {
    display: none !important;
  }
  .ctrl-left {
    @include fs(24px);
    @include center;
    padding: 0 4px 0 12px;
  }
  .ctrl-mid {
    @include fs(16px);
    @include text-line;
    max-width: 200px;
    overflow: hidden;
    padding: 6px 12px 6px 0;
    color: $primary;
    &:is(last-child) {
      padding-right: 12px;
    }
  }

  .ctrl-right {
    @include fs(24px);
    @include center;
    height: 100%;
    padding: 0 8px;
    color: $white;
    background-color: $primary;
    transition: background-color .4s ease;
    &:hover {
      background-color: $primary;
    }
    &:active {
      background-color: $primary;
    }
  }

}
</style>
