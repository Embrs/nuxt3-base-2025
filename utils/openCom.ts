export default (type: OpenType, params: OpenParams = {}) => {
  mitt.emit('open', { type, params });
};
