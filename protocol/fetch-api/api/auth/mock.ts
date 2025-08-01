// mock 回傳調整
import { CreateRes, ErrorRes } from '@/protocol/fetch-api/mock';

// 預設回傳 -------------------------------------------------------------------------------------------------
export const Default = () => CreateRes({});
// -------------------------------------------------------------------------------------------------
// 登入
export const SignIn = () => {
  const data: SignInRes = {
    token: 'abc123'
  };
  return CreateRes(data);
};

// 登出
export const SignOut = () => {
  return CreateRes({});
};

// 取得個人資料
export const GetSelfInfo = () => {
  const data: SelfInfoRes = {
    id: '1',
    role: 1,
    name: '王小明'
  };
  return CreateRes(data);
};
