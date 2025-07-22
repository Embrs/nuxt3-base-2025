<script setup lang="ts">
// ElPopoverPlus 指向泡泡
const visible = ref(false);
const Close = () => {
  visible.value = false;
};
</script>

<template lang="pug">
ElPopover(
  v-model:visible="visible"
  v-bind="$attrs"
  trigger="click"
)
  template(#reference)
    .popover-icon
      slot(name="reference" :Close="Close")
  template(#default)
    .popover-area(@click="Close")
      slot(name="default" :Close="Close")
</template>

<style lang="scss" scoped>
// 佈局 ----
.popover-icon {
  :deep(.iconify) {
    @include fs(26px);
  }
}
.popover-area {
  @include col(6px);
  :deep(button) {
    width: 100% !important;
    margin-left: 0 !important;
  }
}
// 組件 ----
</style>
