import cloneDeep from 'lodash-es/cloneDeep';
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

/** 空值，不含0 */
const IsEmpty = (value: any): boolean => {
  return (['', null, undefined, false, NaN].includes(value));
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

/** 補零 */
const Zero = (val: string| number, len = 5, _d: 'left' | 'right' = 'left') => {
  const str = `${val}`;
  return _d === 'left' ? str.padStart(len, '0') : str.padEnd(len, '0');
};

/** 選取物件資料 (A 複製到 B，以 B 為主) */
const PickObjectA2B = (fromObj: any, toObj: any) => {
  if (
    (IsObject(toObj) && IsObject(fromObj)) ||
    (IsArray(toObj) && IsArray(fromObj))
  ) {
    for (const key in toObj) {
      if (fromObj[key] === undefined) continue;
      if (IsObject(toObj[key]) || IsArray(toObj[key])) {
        PickObjectA2B(fromObj[key], toObj[key]);
        continue;
      }
      toObj[key] = fromObj[key];
    }
  }
};

// const ToFormData = (params: AnyObject) => {
//   const data = new FormData();
//   Object.keys(params).forEach((key) => {
//     if (IsArray(params[key])) {
//       if (params[key].length !== 0) { params[key].forEach((v:any) => data.append(`${key}[]`, v)); }
//     } else data.append(key, params[key]);
//   });
//   return data;
// };

/**
 * 轉換為FormData格式
 * @param { Object } json
 */
const JsonToFormData = (json: Record<string, any>, formData: FormData = new FormData(), parentKey?: string): FormData => {
  for (const key in json) {
    if (!Object.prototype.hasOwnProperty.call(json, key)) continue;

    const value = json[key];
    const fullKey = parentKey ? `${parentKey}[${key}]` : key;

    if (
      value instanceof Date ||
      value instanceof Blob ||
      typeof value === 'string' ||
      typeof value === 'number' ||
      typeof value === 'boolean'
    ) {
      formData.append(fullKey, value instanceof Blob ? value : String(value));
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        const arrayKey = `${fullKey}[${index}]`;
        if (
          typeof item === 'string' ||
          typeof item === 'number' ||
          typeof item === 'boolean' ||
          item instanceof Blob
        ) {
          formData.append(arrayKey, item instanceof Blob ? item : String(item));
        } else {
          JsonToFormData(item, formData, arrayKey);
        }
      });
    } else if (typeof value === 'object' && value !== null) {
      JsonToFormData(value, formData, fullKey);
    }
  }
  return formData;
};

// formdata to json -------------------------------------------------------------------------------------------------
/** 解析表單鍵 */
const _ParseFormKey = (key: string): (string | number)[] => {
  const parts: (string | number)[] = [];
  const regex = /([^[\]]+)/g;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(key))) {
    const part = match[1];
    parts.push(/^\d+$/.test(part) ? Number(part) : part);
  }
  return parts;
};

const _SetDeepValue = (obj: any, path: string, value: any) => {
  const keys = _ParseFormKey(path);
  let current = obj;

  keys.forEach((key, index) => {
    const isLast = index === keys.length - 1;

    // 處理陣列索引
    if (typeof key === 'string' && key.match(/^\d+$/)) {
      key = Number(key);
    }

    if (isLast) {
      current[key] = value;
    } else {
      if (current[key] === undefined) {
        // 若下一層是數字，建立陣列；否則建立物件
        current[key] = typeof keys[index + 1] === 'number' ? [] : {};
      }
      current = current[key];
    }
  });
};

/** formdata to json */
const FormDataToJson = (formData: FormData): Record<string, any> => {
  const obj: Record<string, any> = {};

  for (const [key, value] of formData.entries()) {
    _SetDeepValue(obj, key, value);
  }

  return obj;
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

/* 隱藏滾動 */
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

// 轉換成時間戳
const ToTimestamps = (formatDate: string) => new Date(formatDate).valueOf() || 0;

/* 縮放後臺 */
const ZoomBGM = (zoomNum: number, item:string = '.BgmLayout') => {
  const el = document.querySelector(item) as HTMLElement;
  if (!el) return;
  el.style.zoom = `${zoomNum}`;
};

/* 首字母大寫 */
const FirstUpper = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

/* 調整陣列長度 */
const AdjustArrayLength = <T>(arr: T[], newLength: number, structure: T) => {
  // 計算需要補充的空字串數量
  const diff = newLength - arr.length;

  // 如果需要增加元素，填入空字串
  if (diff > 0) {
    for (let i = 0; i < diff; i++) {
      arr.push(cloneDeep(structure));
    }
  }

  // 若需要減少元素，截取數組
  if (diff < 0) {
    arr.length = newLength;
  }
  return arr;
};

/* 創建測試圖片 */
const CreateDemoImg = (width = 600, height = 400, bgColor = '666', tColor = '000') => {
  return `https://dummyimage.com/${width}x${height}/${bgColor}/${tColor}`;
};

/* 創建隨機圖片 */
const CreateRandomImg = (width = 600, height = 400) => {
  return `https://picsum.photos/${width}/${height}`;
};

/** 下載連結檔案 */
// const DownloadLinkFile = (url: string, filename?: string): void => {
//   const link = document.createElement('a');
//   link.href = url;
//   link.download = filename || '';
//   link.target = '_blank';
//   link.style.display = 'none';

//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };

/** 下載圖片 */
const DownloadLinkFile = async (url: string, filename: string): Promise<boolean> => {
  const storeTool = StoreTool();
  try {
    // ElMessage.success(storeTool.t('ph.start', [storeTool.t('ph.download')]));
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(blobUrl);
    ElMessage.success(`【${filename}】${storeTool.t('ph.download', [storeTool.t('ph.success')])}`);
    return true;
  } catch (error) {
    console.error('Download failed:', error);
    ElMessage.error(`【${filename}】${storeTool.t('ph.download', [storeTool.t('ph.failure')])}`);
    return false;
  }
};

export default {
  /** 判斷 */
  HasKey,
  /** 判斷 Array */
  IsArray,
  /** 判斷 Object */
  IsObject,
  /** 判斷 String */
  IsString,
  /** 判斷 Number */
  IsNumber,
  /** 判斷空 */
  IsEmpty,

  /** UUID 生成 */
  CreateUUID,
  /** 1000 => 1,000 */
  NumToMoney,
  /** 1,000 => 1000 */
  MoneyToNum,
  /** array Object 深度空元素過濾器 */
  ArrayObjectFilter,
  /** Array 加總 */
  ArraySum,
  /** 選取物件資料 A 轉 B */
  PickObjectA2B,
  /** 轉換為 FormData 格式 */
  JsonToFormData,
  /** FormData to json */
  FormDataToJson,
  /** 補零 */
  Zero,

  /** async await 等待 */
  Wait,
  /** 滾動到頂部 */
  ScrollTop,
  /** 滾動到 element */
  ScrollToEl,
  /** 滾動到指定 id or class */
  ScrollToTag,
  /** 複製文字 */
  CopyText,
  /** 分享網址 */
  ShareUrl,
  /** 隱藏滾動 */
  HiddenScrollbar,
  /** 轉換成時間戳 */
  ToTimestamps,
  /** 縮放後臺 */
  ZoomBGM,
  /** 首字母大寫 */
  FirstUpper,
  /** 調整陣列長度 */
  AdjustArrayLength,
  /** 創建測試圖片 */
  CreateDemoImg,
  /** 創建隨機圖片 */
  CreateRandomImg,
  /** 下載連結檔案 */
  DownloadLinkFile

};
