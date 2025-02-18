<script setup lang="ts">
// OpenDialogDemo 彈窗測試
const $mitt = UseMitt();
// 資料 --------------------------------------------------------------------------------------------
const props = defineProps<{
  params: OpenDialogDemo
  resolve:(value: OpenNoneRes | PromiseLike<OpenNoneRes>) => void
  level: number
}>();
// 接收事件 -----------------------------------------------------------------------------------------
const ClickOpenDemo = lodash.debounce(async () => {
  const openParams: OpenDialogDemo = {
    demo: 'test123'
  };
  await $mitt.EmitDialogOpen('OpenDialogDemo', openParams);
  console.log('dialog');
}, 400, { leading: true, trailing: false });

// 生命週期 -----------------------------------------------------------------------------------------
const TestOnRefresh = () => {
  console.log('demo refresh level', props.level, 123);
};

onMounted(() => {
  console.log('params', props.params);
  $mitt.OnRefresh(TestOnRefresh);
});

// 對外事件 -----------------------------------------------------------------------------------------
const emit = defineEmits(['on-close']);
const EmitClose = () => {
  props.resolve({ isComplete: true });
  emit('on-close');
};

const MittRefresh = () => {
  $mitt.EmitRefresh({ abc: 'test456' });
};

// Ref 輸出 ----------------------------------------------------------------------------------------
// defineExpose({ ... })
</script>

<template lang="pug">
.OpenDialogDemo
  .mask
  .card-box
    p OpenDialogDemo
    NuxtIcon(
      name="material-symbols:close-rounded"
      class="close-btn"
      @click="EmitClose"
    )
    .row-item
      button(@click="ClickOpenDemo") Open Demo
      button(@click="MittRefresh") Call Refresh
</template>

<style lang="scss" scoped>
// 佈局 ----
.OpenDialogDemo {
  @include fixed(fill);
  @include center;
  .mask {
    @include absolute(fill);
    background-color: rgb(0 0 0 / 60%);
  }
  .card-box {
    @include wh(400px, 200px);
    position: relative;
    background-color: #fff;
    z-index: 1;
  }
  // TODO
}

// 組件 ----
.close-btn {
  @include btn-click;
  @include absolute("top-right", 10px, 10px);
  @include fs(30px);
}
.row-item {
  @include row(10px);
}
</style>
