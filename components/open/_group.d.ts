// -----------------------------------------------------------------------------------------------
/** 抽屜參數 */
interface OpenData {
  uuid: string
  type: OpenType
  params: OpenParams
  resolve
}

// Type -----------------------------------------------------------------------------------------------
type OpenType = 
  'OpenDialogDemo'
  | 'OpenDialogExInfo'
  | 'OpenDialogExEdit'
  | 'OpenDialogExCreate'
  | 'OpenDialogSelfChangePassword'
  | 'OpenDialogSelfInfo'

  | 'OpenDrawerExInfo'
  | 'OpenDrawerExEdit'
  | 'OpenDrawerExCreate'

// Params -----------------------------------------------------------------------------------------------
type OpenParams = 
  OpenNone |
  OpenDialogDemo

/** 無 */
type OpenNone = {}
type OpenNoneRes = boolean

type OpenDialogDemo = {
  demo: string
}
