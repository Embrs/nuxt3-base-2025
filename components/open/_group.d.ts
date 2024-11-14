// Type -----------------------------------------------------------------------------------------------
type OpenType = 
  'OpenDialogDemo' 

// Params -----------------------------------------------------------------------------------------------
type OpenParams = 
  OpenNone |
  OpenDialogDemo

/** 無 */
type OpenNone = {}

type OpenDialogDemo = {
  demo: string
}
// -----------------------------------------------------------------------------------------------
/** 抽屜參數 */
interface OpenData {
  type: OpenType;
  params?: OpenParams
}

interface OpenItem {uuid: string, type: OpenType ,params: OpenParams}
