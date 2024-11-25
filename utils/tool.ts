// 判斷 -----------------------------------------------------------------------------------------------
/** Object has key */
const HasKey = (object: object, key: string) => object != null && Object.hasOwnProperty.call(object, key);

/** 是 array */
const IsArray = (value: any): boolean => {
  return Object.prototype.toString.call(value) === '[object Array]';
};

/** 是 object */
const IsObject = (value: any): boolean => {
  return Object.prototype.toString.call(value) === '[object Object]';
};

/** 是 string */
const IsString = (value: any): boolean => {
  return Object.prototype.toString.call(value) === '[object String]';
};

/** 是 number */
const IsNumber = (value: any): boolean => {
  return Object.prototype.toString.call(value) === '[object Number]';
};

// 生成轉換 ----------------------------------------------------------------------------------------------------
/** UUID 生成 */
const CreateUUID = () => {
  let d = Date.now();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now(); // use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
};

/** 1000 => 1,000 */
const NumToMoney = (num: number, isInt = true) => { // isInt: 整數化
  const _num = isInt ? `${num}`.split('.')[0] : num; //
  return `${_num}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/** 1,000 => 1000 */
const MoneyToNum = (str: string) => {
  return Number(str.replace(/\$\s?|(,*)/g, ''));
};

/* array Object 節點深度空字元過濾器 */
const ArrayObjectFilter = <T>(data:T, removeValue = [null, undefined, '']): T => {
  if (IsArray(data)) {
    const newArray: any = [];
    // @ts-ignore
    for (const item of data) {
      let _item = item;
      if (IsArray(_item) || IsObject(_item)) _item = ArrayObjectFilter(_item, removeValue);
      newArray.push(_item);
    }
    return newArray;
  }
  // ---------
  if (IsObject(data)) {
    const newObj: any = {};
    for (const key in data) {
      let _item = data[key];
      // @ts-ignore
      if (removeValue.includes(_item)) continue;
      if (IsArray(_item) || IsObject(_item)) _item = ArrayObjectFilter(_item, removeValue);
      newObj[key] = _item;
    }
    return newObj;
  }
  return data;
};

/* Array 加總 */
const ArraySum = (arr: number[]): number => {
  let _sum = 0;
  if (arr && arr?.length > 0) {
    _sum = arr.reduce((_s, _v) => (Number(_s) + Number(_v)), 0);
  }
  return _sum;
};

/**
 * 轉換為FormData格式
 * @param { Object } params
 */
const ToFormData = (params: AnyObject) => {
  const data = new FormData();
  Object.keys(params).forEach((key) => {
    if (IsArray(params[key])) {
      if (params[key].length !== 0) { params[key].forEach((v:any) => data.append(`${key}[]`, v)); }
    } else data.append(key, params[key]);
  });
  return data;
};

/** 補零 */
const Zero = (val: string| number, len = 5, _d: 'left' | 'right' = 'left') => {
  const str = `${val}`;
  return _d === 'left' ? str.padStart(len, '0') : str.padEnd(len, '0');
};

// 行為 --------------------------------------------------------------------------------------------------
/**  async await 等待 */
const Wait = (ms = 1000) => new Promise((resolve) => setTimeout(() => resolve(null), ms));

/**  滾動到頂部 */
const ScrollTop = (idOrClass: string, isSmooth = true) => {
  if (import.meta.server) return;
  const el = document.querySelector(idOrClass) as HTMLElement;
  if (!el) return;
  el.scrollTo({
    top: 0,
    left: 0,
    behavior: isSmooth ? 'smooth' : 'instant'
  });
};

/** 滾動到 element */
const ScrollToEl = (elScroll: HTMLElement, isSmooth = true) => {
  if (!elScroll) return;
  const top = elScroll?.offsetTop || 0;
  window.scrollTo({
    top,
    left: 0,
    behavior: isSmooth ? 'smooth' : 'instant'
  });
};

/** 滾動到指定 id or class */
const ScrollToTag = (idOrClass: string, isSmooth = true) => {
  if (import.meta.server) return;
  const elScroll = document.querySelector(idOrClass) as HTMLElement;
  ScrollToEl(elScroll, isSmooth);
};

/* 複製文字 */
const CopyText = async (copyString = ''): Promise<boolean> => {
  if (!copyString) return false;

  // writeText 只有 https or localhost 可用
  if (navigator.clipboard) {
    return await navigator.clipboard.writeText(copyString).then(() => true).catch(() => false);
  }

  if (document.execCommand) {
    const textarea = document.createElement('textarea');
    try {
      document.body.appendChild(textarea);
      textarea.value = copyString;
      textarea.select();
      document.execCommand('copy');
      return true;
    } catch (error) {
      return false;
    } finally {
      // 清除
      document.body.removeChild(textarea);
    }
  }
  return false;
};

/** 分享網址 */
const ShareUrl = async (url: string, title: string, text: string) => {
  if (import.meta.server) return;
  if (!window.navigator.share || !url) return;
  await window.navigator.share({ title, text, url });
};

/** 隱藏滾動 */
const HiddenScrollbar = (canHide: boolean) => {
  if (import.meta.server) return;
  const html = document.querySelector('html') as HTMLHtmlElement;
  const body = document.querySelector('body') as HTMLBodyElement;
  if (canHide) {
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
  } else {
    html.style.removeProperty('overflow');
    body.style.removeProperty('overflow');
  }
};

/* 取得基本路徑 */
const GetBasePath = (name: string, path: string): string => {
  const arr = name.split('___');
  const lang = arr?.[1] || 'zh';
  const basePath = path.replace(`/${lang}`, '') || '/';
  return basePath;
};

/* 轉換成時間戳 */
const ToTimestamps = (formatDate: string) => new Date(formatDate).valueOf() || 0;

/* 縮放後臺 */
const ZoomBGM = (zoomNum: number, item:string = '.BgmLayout') => {
  const el = document.querySelector(item) as HTMLElement;
  if (!el) return;
  el.style.zoom = `${zoomNum}`;
};

/* 首字母大寫 */
const FirstUpper = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export default {
  HasKey,
  IsArray,
  IsObject,
  IsString,
  IsNumber,

  CreateUUID, // UUID 生成
  NumToMoney, // 1000 => 1,000
  MoneyToNum, // 1,000 => 1000
  ArrayObjectFilter, // array Object 深度空元素過濾器
  ArraySum, // Array 加總
  ToFormData, // 轉換為 FormData 格式
  Zero, // 補零

  Wait, // async await 等待
  ScrollTop, // 滾動到頂部
  ScrollToEl, // 滾動到 element
  ScrollToTag, // 滾動到指定 id or class
  CopyText, // 複製文字
  ShareUrl, // 分享網址
  HiddenScrollbar, // 隱藏滾動
  GetBasePath, // 取得基本路徑
  ToTimestamps, // 轉換成時間戳
  ZoomBGM, // 縮放後臺
  FirstUpper // 首字母大寫
};
