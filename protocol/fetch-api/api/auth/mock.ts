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
