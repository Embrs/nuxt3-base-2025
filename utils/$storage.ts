/** 設定項目 */
const Set = (key: string, anyValue: any, useHash = true) => {
  try {
    const _key = useHash ? $safety.base64.Encode(key) : key;
    const _data = JSON.stringify(anyValue);
    const _val = useHash ? $safety.base64.Encode(_data) : _data;
    if (_key && _val) {
      localStorage.setItem(_key, _val);
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

/** 提取項目 */
const Get = (key: string, useHash = true) => {
  try {
    const _key = useHash ? $safety.base64.Encode(key) : key;
    const _anyValue = localStorage.getItem(_key) || '';
    const _val = useHash ? $safety.base64.Decode(_anyValue) : _anyValue;
    if (_val) {
      return JSON.parse(_val);
    }
    return undefined;
  } catch (error) {
    return undefined;
  }
};

/** 清除項目 */
const Remove = (key: string, useHash = true) => {
  try {
    const _key = useHash ? $safety.base64.Encode(key) : key;
    if (_key) {
      localStorage.removeItem(_key);
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

export default {
  /** 提取項目 */
  Get,
  /** 設定項目 */
  Set,
  /** 清除項目 */
  Remove
};
