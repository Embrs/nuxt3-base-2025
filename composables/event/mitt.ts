// mitt 刷新 & 重加載
// 宣告 const $mitt = UseMitt();
type Fn = (val: any) => void
export const UseMitt = () => {
  const onFnList = ref<{event: MittKeys, fn: Fn}[]>([]);

  /* fn 必須在 onMounted 綁定 */
  // 接收，開始監聽
  const On = (event: MittKeys, fn: Fn) => {
    onFnList.value.push({ event, fn });
    $emitter.on(`${event}`, fn);
  };

  // 送出，呼叫
  const Emit = (event: MittKeys, val?: any) => {
    $emitter.emit(`${event}`, val);
  };

  // ----------------------------------------------------------------
  const OnRefresh = (fn: Fn) => On('refresh', fn);
  const OnReload = (fn: Fn) => On('reload', fn);
  const OnDialogOpen = (fn: Fn) => On('dialog-open', fn);
  const OnDialogCloseAll = (fn: Fn) => On('dialog-close-all', fn);

  // clearEvent: 是否清除自己事件，用於關閉刷新時
  // Emit setTimeout 是為了等某些元件銷毀後觸發，才不會出發到銷毀中元件的事件
  // 刷新
  const EmitRefresh = (clearEvent: boolean = true, val?: any) => {
    if (clearEvent) ClearEvents();
    setTimeout(() => { Emit('refresh', val); }, 10);
  };

  // 重加載
  const EmitReload = (clearEvent: boolean = true, val?: any) => {
    if (clearEvent) ClearEvents();
    setTimeout(() => { Emit('reload', val); }, 10);
  };

  // 移至 dialog-fn.ts
  // const EmitDialogOpen = <Res>(type: OpenType, params: OpenParams = {}):Promise<Res | undefined> =>
  //   new Promise((resolve) => $emitter.emit(
  //     'dialog-open', {
  //       uuid: `open-${$tool.CreateUUID()}`,
  //       resolve,
  //       type,
  //       params
  //     }
  //   ));

  const EmitDialogCloseAll = () => Emit('dialog-close-all', null);

  // 清除監聽事件
  const ClearEvents = () => {
    onFnList.value.forEach(({ event, fn }) => $emitter.off(event, fn));
  };
  // -----------------------------------------------------------------------------------------------
  // 卸載事件
  onBeforeUnmount(() => {
    ClearEvents();
  });

  return {
    OnRefresh, // 刷新 fn 綁定
    OnReload, // 重加載 fn 綁定
    OnDialogOpen,
    OnDialogCloseAll,
    EmitRefresh,
    EmitReload,
    EmitDialogCloseAll
  };
};
