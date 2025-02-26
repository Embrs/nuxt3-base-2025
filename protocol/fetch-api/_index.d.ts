
interface TObject<T=any> {
  [key: string]: T;
}

/** API 回傳格式 */
interface ApiRes<T={}> {
  data: T
  status: {
    code: number // 0 為正常
    message: { // 錯誤訊息
      zh_tw: string
      en: string
      ja: string
    }
  };
}

/** 檔案傳輸進度 */
interface FileProgress {
  upload?: number,
  download?: number
}