
// 登入 -----------------------------------------------------------------------------------------------
/** 登入 參數 */
interface SignInParams {
  account: string // 帳號
  password: string // 密碼
}
/** 登入 回傳 */
interface SignInRes {
  token: string
}

// 取得個人資料 -----------------------------------------------------------------------------------------------
/** 取得個人資料 回傳 */
interface SelfInfoRes {
  id: string // id
  role: RoleType // 角色
  name: string // 姓名
}

/** 角色
 * 1: admin
 * 2: staff
 */
type RoleType = 1 | 2