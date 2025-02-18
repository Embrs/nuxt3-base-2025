// Type -----------------------------------------------------------------------------------------------
type OpenType = 
  'OpenDialogDemo' 

// Params -----------------------------------------------------------------------------------------------
type OpenParams = 
  OpenNone |
  OpenDialogDemo

/** 無 */
type OpenNone = {}
type OpenNoneRes = {
  isComplete: boolean
}

type OpenDialogDemo = {
  demo: string
}


// -----------------------------------------------------------------------------------------------
/** 抽屜參數 */
interface OpenData {
  uuid: string
  type: OpenType
  params: OpenParams
  resolve
}
