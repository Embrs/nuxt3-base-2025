// mitt 刷新 & 重加載
// 宣告 const $re = UseRe();
type Fn = (event: any) => void
export const UseRe = () => {
  // const canBind = ref(false);
  const refreshFnList = ref<Fn[]>([]);
  const reloadFnList = ref<Fn[]>([]);

  /* 刷新 fn 綁定，必須在 onMounted 綁定 */
  const RefreshBind = (fn: Fn) => {
    refreshFnList.value.push(fn);
    mitt.on('refresh', fn);
  };

  /* 重加載 fn 綁定，必須在 onMounted 綁定 */
  const ReloadBind = (fn: Fn) => {
    reloadFnList.value.push(fn);
    mitt.on('reload', () => fn);
  };

  // 卸載事件
  onBeforeUnmount(() => {
    refreshFnList.value.forEach((fn) => mitt.off('refresh', fn));
    reloadFnList.value.forEach((fn) => mitt.off('reload', fn));
  });

  return {
    RefreshBind, // 刷新 fn 綁定
    ReloadBind // 重加載 fn 綁定
  };
};
