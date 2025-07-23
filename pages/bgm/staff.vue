<script setup lang="ts">
// BgmStaff 員工管理
const elTable = useTemplateRef('elTable');

// 點擊新增
const ClickCreate = $lodash.debounce(() => {
  // const _params: OpenDialogStockInCreate = {
  //   // supplierId?: number // 供應商 Id
  // };
  // $open.OpenDialogStockInCreate(_params);
}, 1000, { leading: true, trailing: false });
</script>

<template lang="pug">
.BgmStaff
  .filter-area
    //- LyFilterDateRange(@on-change="ChangeFilter")
  .ctrl-area
    ElButton(type="warning" size="large" @click="ClickCreate") {{ '新增' }}
  .table-area
    PageStaffTable(ref="elTable")
</template>

<style lang="scss" scoped>
// 佈局 ----
.BgmStaff {
  @include wh;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'filter ctrl'
    'table table';
  gap: 10px;
  .filter-area {
    @include row;
    grid-area: filter;
  }
  .ctrl-area {
    @include row-end;
    grid-area: ctrl;
  }
  .table-area {
    grid-area: table;
    overflow: hidden;
  }
}

// 組件 ----
</style>
