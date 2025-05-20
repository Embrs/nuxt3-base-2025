const EmitDialogOpen = <Res>(type: OpenType, params = {}):Promise<Res | undefined> =>
  new Promise((resolve) => $emitter.emit(
    'dialog-open', {
      uuid: `open-${$tool.CreateUUID()}`,
      resolve,
      type,
      params
    }
  ));

/** 測試用 */
export const OpenDialogDemo = (_params: OpenDialogDemo): Promise<void> => {
  return EmitDialogOpen('OpenDialogDemo', _params);
};
