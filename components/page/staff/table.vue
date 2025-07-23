<script setup lang="ts">
// PageStaffTable 員工表格
// -- 引入 --------------------------------------------------------------------------------------------
const $mitt = UseMitt();
const storeTool = StoreTool();

// -- 資料 --------------------------------------------------------------------------------------------
const elTable = useTemplateRef('elTable');
const isSearchLoading = ref(false);

const pageInfo = ref({
  page: 1,
  size: 20
});

const rowDemo = {
  stockInDate: '2024-12-12', // 進貨日期
  supplier: 'XX科技股份有限公司', // 供應商
  purchaseCost: '$500,000', // 進貨成本
  totalItems: '20', // 總件數
  equipment: '15', // 設備
  consumables: '5' // 耗材
  // TODO
};

const tableInfo = ref({
  list: [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
  ].map(() => ({ id: useId(), ...rowDemo })),
  total: 500
});
const btnColWidth = computed(() => {
  if (storeTool.isPc) return 110;
  return 65;
});
const btnSize = computed(() => storeTool.isPc ? 'default' : 'large');

// -- 接收事件 -----------------------------------------------------------------------------------------
// 重新查詢
const OnReload = () => {
  SearchFlow();
};

// 刷新
const OnRefresh = () => {
  SearchFlow(false, false);
};

// 頁面變化
const OnPageChange = () => {
  SearchFlow(false);
};

// 點擊操作按鈕
const ClickAction = $lodash.debounce((action: string) => {
// TODO
  switch (action) {
    case 'detail': {
      // const _params: OpenDialogStockInInfo = {
      //   id: 123
      // };
      // $open.OpenDialogStockInInfo(_params);
      break;
    }
  }
}, 1000, { leading: true, trailing: false });

// -- 流程 --------------------------------------------------------------------------------------------
// 篩選查詢流程
const SearchFlow = async (toFirstPage: boolean = true, toTop:boolean = true) => {
  isSearchLoading.value = true;
  try {
    // 是否前往第一頁
    if (toFirstPage) {
      pageInfo.value.page = 1;
    }
    const pass = await ApiDemo();

    // 置頂
    if (pass && toTop) {
      TableScrollTop();
    }
  } catch (error) {
    // TODO
  } finally {
    isSearchLoading.value = false;
  }
};

// -- 函式 --------------------------------------------------------------------------------------------
// 置頂置左
const TableScrollTop = () => {
  elTable.value?.scrollTo({ top: 0, left: 0 });
};

// -- Api ---------------------------------------------------------------------------------------------
const ApiDemo = async () => {
  // TODO
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};

// -- 生命週期 -----------------------------------------------------------------------------------------
onMounted(() => {
  $mitt.OnRefresh(OnRefresh);
  $mitt.OnReload(OnReload);
});

// -- 對外暴露 ----------------------------------------------------------------------------------------
defineExpose({ SearchFlow });

</script>

<template lang="pug">
.PageStaffTable
  .table-area
    ElTable(
      ref="elTable"
      v-loading="isSearchLoading"
      :data="tableInfo.list"
      row-key="id"
      border
      height="100%"
      scrollbar-always-on
      highlight-current-row
    )
      ElTableColumn(prop="stockInDate" :label="`aa`" width="120" )
      ElTableColumn(prop="supplier" :label="`bb`" width="220" )
      ElTableColumn(prop="purchaseCost" :label="`cc`" width="140" )
      ElTableColumn(prop="totalItems" :label="`dd`" width="100" )
      ElTableColumn(prop="equipment" :label="`ee`" width="100" )
      ElTableColumn(prop="consumables" :label="`ff`" min-width="100" )

      ElTableColumn(fixed="right" :label=" `操作`" :width="btnColWidth")
        template(#default)
          ElButton(:size="btnSize" type="primary" @click="ClickAction('detail')") 詳情

  .page-area
    ElPaginationPlus(
      v-model:current-page="pageInfo.page"
      :page-size="pageInfo.size"
      :total="tableInfo.total"
      @current-change="OnPageChange"
    )
</template>

<style lang="scss" scoped>
// 佈局 ----
.PageStaffTable {
  @include wh;
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 10px;
  overflow: hidden;
  .table-area {
    overflow: hidden;
  }
  .page-area {
    @include center;
  }
}

// 組件 ----

</style>
