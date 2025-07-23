const EmitOpenCom = <Res>(type: OpenType, params = {}):Promise<Res | undefined> =>
  new Promise((resolve) => $emitter.emit(
    'open-com', {
      uuid: `open-${$tool.CreateUUID()}`,
      resolve,
      type,
      params
    }
  ));

/** 測試用 */
export const OpenDialogDemo = (_params: OpenDialogDemo): Promise<void> => {
  return EmitOpenCom('OpenDialogDemo', _params);
};

/** Ex Info */
export const OpenDialogExInfo = (): Promise<void> => {
  return EmitOpenCom('OpenDialogExInfo');
};

/** Ex Edit */
export const OpenDialogExEdit = (): Promise<void> => {
  return EmitOpenCom('OpenDialogExEdit', {});
};

/** Ex Create */
export const OpenDialogExCreate = (): Promise<void> => {
  return EmitOpenCom('OpenDialogExCreate', {});
};

/** Ex Info */
export const OpenDrawerExInfo = (): Promise<void> => {
  return EmitOpenCom('OpenDrawerExInfo');
};

/** Ex Edit */
export const OpenDrawerExEdit = (): Promise<void> => {
  return EmitOpenCom('OpenDrawerExEdit', {});
};

/** Ex Create */
export const OpenDrawerExCreate = (): Promise<void> => {
  return EmitOpenCom('OpenDrawerExCreate', {});
};
