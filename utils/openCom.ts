export default <T>(type: OpenType, params: OpenParams = {}):Promise<T> => {
  return new Promise((resolve) => mitt.emit('open', {
    uuid: `open-${tool.CreateUUID()}`,
    resolve,
    type,
    params: params || {}
  }));
};
