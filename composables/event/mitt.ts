// mitt 刷新 & 重加載
// 宣告 const $mitt = UseMitt();
type Fn = (val: any) => void
export const UseMitt = () => {
  const onFnList = ref<{event: MittKeys, fn: Fn}[]>([]);

  /* fn 必須在 onMounted 綁定 */
  // 接收，開始監聽
  const On = (event: MittKeys, fn: Fn) => {
    onFnList.value.push({ event, fn });
    emitter.on(`${event}`, fn);
  };

  // 送出，呼叫
  const Emit = (event: MittKeys, val: any) => {
    emitter.emit(`${event}`, val);
  };

  // ----------------------------------------------------------------
  const OnRefresh = (fn: Fn) => On('refresh', fn);
  const OnReload = (fn: Fn) => On('reload', fn);
  const OnDialogOpen = (fn: Fn) => On('dialog-open', fn);
  const OnDialogCloseAll = (fn: Fn) => On('dialog-close-all', fn);

  const EmitRefresh = <T>(val: T) => Emit('refresh', val);
  const EmitReload = <T>(val: T) => Emit('reload', val);

  const EmitDialogOpen = <T>(type: OpenType, params: OpenParams = {}):Promise<T> =>
    new Promise((resolve) => emitter.emit(
      'dialog-open', {
        uuid: `open-${tool.CreateUUID()}`,
        resolve,
        type,
        params: params || {}
      }
    ));

  const EmitDialogCloseAll = () => Emit('dialog-close-all', null);
  // -----------------------------------------------------------------------------------------------
  // 卸載事件
  onBeforeUnmount(() => {
    onFnList.value.forEach(({ event, fn }) => emitter.off(event, fn));
  });

  return {
    OnRefresh, // 刷新 fn 綁定
    OnReload, // 重加載 fn 綁定
    OnDialogOpen,
    OnDialogCloseAll,
    EmitRefresh,
    EmitReload,
    EmitDialogOpen,
    EmitDialogCloseAll
    // On,
    // Emit
  };
};
