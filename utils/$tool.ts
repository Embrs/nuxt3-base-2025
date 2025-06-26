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

/* 隱藏顯示滾動 */
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

/* 創建測試圖片 */
const CreateDemoImg = (width = 600, height = 400, bgColor = '666', tColor = '000') => `https://dummyimage.com/${width}x${height}/${bgColor}/${tColor}`;

/* 創建隨機圖片 */
const CreateRandomImg = (width = 600, height = 400) => `https://picsum.photos/${width}/${height}`;

export default {
  /** UUID 生成 */
  CreateUUID,
  /** 1000 => 1,000 */
  NumToMoney,
  /** 1,000 => 1000 */
  MoneyToNum,
  /** Array 加總 */
  ArraySum,
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
  /** 創建測試圖片 */
  CreateDemoImg,
  /** 創建隨機圖片 */
  CreateRandomImg

};
