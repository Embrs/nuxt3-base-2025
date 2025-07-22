<script setup lang="ts">
// ElDialogPlus 彈窗基底
// -- 引入 --------------------------------------------------------------------------------------------
const $ask = UseAsk();
const storeTool = StoreTool();

// -- 資料 --------------------------------------------------------------------------------------------
const visible = defineModel({
  type: Boolean,
  default: false
});

type Props = {
  width?: string // 正常寬度
  title?: string // 標題
  type?: 'edit' | 'info' //  編輯 一般模式
  isChange?: boolean // 是否被改過
  hiddenFooter?:boolean // 隱藏 footer
  isRemovePadding?: boolean // 是否移除 padding
  isbodyFull?: boolean // body 填滿
}

const props = withDefaults(defineProps<Props>(), {
  width: '400px',
  title: '',
  type: 'info',
  isChange: false,
  hiddenFooter: false,
  isRemovePadding: false,
  isbodyFull: false
});

// -- 接收事件 -----------------------------------------------------------------------------------------
const OnHandleClose = async () => {
  if (!props.isChange) {
    visible.value = false;
    return;
  }
  if (await $ask.ChangeClose()) {
    visible.value = false;
  }
};

// -- 函式 --------------------------------------------------------------------------------------------

// -- 生命週期 -----------------------------------------------------------------------------------------

// -- 發送事件 -----------------------------------------------------------------------------------------
type Emit = { 'on-close': [] }
const emit = defineEmits<Emit>();

/* 關閉銷毀 */
const EmitClose = () => {
  emit('on-close');
};
</script>

<template lang="pug">

ElDialog(
  v-model="visible"
  v-bind="$attrs"
  :type="props.type"
  :title="props.title"
  :width="storeTool.isMobile ? '95%':props.width"
  :before-close="OnHandleClose"
  :destroy-on-close="true"
  lock-scroll
  draggable
  @closed="EmitClose"
)
  template(#default)
    div(
      v-scroll-more="{lisent: '.el-dialog__body', show: '.el-dialog__body'}"
      :class="{'dialog-content-area': !props.isRemovePadding, 'is-body-full':props.isbodyFull}"
    )
      slot
  template(v-if="!props.hiddenFooter" #footer)
    slot(name="footer" :AskClose="OnHandleClose")
</template>

<style lang="scss" scoped>
// 佈局 ----

// 組件 ----
.dialog-content-area {
  @include rwd-pc {
    padding: 20px 40px;
  }
  @include rwd-mobile {
    padding: 20px;
  }
}

.is-body-full {
  @include wh;
  overflow: hidden;
}

</style>
