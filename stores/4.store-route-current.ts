/**
 * 目前路徑資訊
 */
export const StoreRouteCurrent = defineStore('StoreRouteCurrent', () => {
  const $route = useRoute();
  const storeRoute = StoreRoute();

  /* 目前路徑節點 */
  const pathPoints = computed(() => {
    const _mRoute = $route.matched?.at(-1);
    if (!_mRoute) return [];
    return storeRoute.PathToPoint(_mRoute.path);
  });

  /* 目前頁面。參數頁，以前一頁為基準 */
  const pageKey = computed(() => {
    return storeRoute.GetPageKey($route);
  });

  // -----------------------------------------------------------------------------------------------
  return {
    /** 目前路徑節點 */
    pathPoints,
    /** 目前頁面 */
    pageKey
  };
});
