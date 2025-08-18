import * as mock from '@/protocol/fetch-api/mock';

// 預設回傳 -------------------------------------------------------------------------------------------------
export const Default = () => mock.CreateRes({});

// -------------------------------------------------------------------------------------------------
// 登入
export const SignIn = () => {
  const data: SignInRes = {
    token: 'abc123'
  };
  return mock.CreateRes(data);
};
