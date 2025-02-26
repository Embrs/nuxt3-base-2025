
// 登入 -----------------------------------------------------------------------------------------------
interface SignInParams {
  account: string // 帳號
  password: string // 密碼
  company_id: number // 公司 id
}

interface SignInRes {
  token: string
}
