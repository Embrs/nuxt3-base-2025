
// 登入 -----------------------------------------------------------------------------------------------
interface SignInParams {
  account: string // 帳號
  password: string // 密碼
}

interface SignInRes {
  token: string
}
