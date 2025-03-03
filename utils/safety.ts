import CryptoJS from 'crypto-js';
// ----------------------------------------------------------------------------------------
const Base64Encode = (str: string) => {
  try {
    return btoa(
      encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (_match, p1) {
        return String.fromCharCode(Number('0x' + p1));
      })
    );
  } catch (error) {
    return '';
  }
};
const Base64Decode = (str: string) => {
  try {
    return decodeURIComponent(
      Array.prototype.map
        .call(
          atob(
            str.replace(/-| /g, '+').replace(/_/g, '/').replace(/%/g, '%25')
          ),
          function (c) {
            return '%' + c.charCodeAt(0).toString(16);
          }
        )
        .join('')
    );
  } catch (error) {
    return '';
  }
};

// -----------------------------------------------------------------------------------------
const CreateKeyIV = (length: number = 16) => {
  const randomWords = CryptoJS.lib.WordArray.random(length);
  return CryptoJS.enc.Hex.stringify(randomWords);
};

let key: any = '';
let iv: any = '';

const InitKeyIv = () => {
  const storeEnv = StoreEnv();
  const _key = (storeEnv?.env?.aesKey as string) || '';
  const _iv = (storeEnv?.env?.aesIv as string) || '';
  key = CryptoJS.enc.Utf8.parse(_key);// 自訂 key
  iv = CryptoJS.enc.Utf8.parse(_iv);// 自訂 iv
};

const AES256Encode = (any: any): string => {
  try {
    if (!key || !iv) InitKeyIv();
    const str = JSON.stringify(any);
    const encode = CryptoJS.AES.encrypt(str, key, { iv }).toString();
    return encode;
  } catch (error) {
    return '';
  }
};

const AES256Decode = (encode: string): any => {
  try {
    if (!key || !iv) InitKeyIv();
    const str = CryptoJS.AES.decrypt(encode, key, { iv }).toString(CryptoJS.enc.Utf8);
    const decode = JSON?.parse(str);
    return decode;
  } catch (error) {
    return '';
  }
};
// =========================================================================================
export default {
  base64: {
    Encode: Base64Encode,
    Decode: Base64Decode
  },
  aes256: {
    CreateKeyIV,
    Encode: AES256Encode,
    Decode: AES256Decode
  }
};
