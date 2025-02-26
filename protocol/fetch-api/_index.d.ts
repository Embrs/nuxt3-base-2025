/** 通用物件 */
type AnyObject = Record<string, any>

/** API 回傳格式 */
interface ApiRes<T = AnyObject> {  // 修正預設類型
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