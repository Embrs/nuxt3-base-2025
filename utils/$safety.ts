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

// =========================================================================================
export default {
  base64: {
    Encode: Base64Encode,
    Decode: Base64Decode
  }
};
