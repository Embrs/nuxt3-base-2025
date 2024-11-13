// Type -----------------------------------------------------------------------------------------------
type OpenType = 
  'OpenNone'
  | 'DrawerDemo' // 測試用
  | 'DialogDemo' // 測試用

// Params -----------------------------------------------------------------------------------------------
type OpenParams = 
  OpenNone
  | DrawerDemo // 測試用

  | DialogDemo // 測試用

/** 無 */
interface OpenNone {}

/** 測試 Draser */
interface DrawerDemo {
  demoText: string
}

/** 測試 Dialog */
interface DialogDemo {
  demoText: string
}

// -----------------------------------------------------------------------------------------------
/** 抽屜參數
 * @param {OpenType} type *
 * @param {any} params
*/
interface OpenData {
  type: OpenType;
  params?: 
    OpenParams
}

interface OpenItem {uuid: string, type: OpenType ,params:OpenParams}
