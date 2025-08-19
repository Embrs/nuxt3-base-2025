import * as mockRes from '@/protocol/fetch-api/mock-res';

// 預設回傳 -------------------------------------------------------------------------------------------------
export const Default = () => mockRes.CreateRes({});

// -------------------------------------------------------------------------------------------------
// 登入
export const SignIn = () => {
  const data: SignInRes = {
    token: 'abc123'
  };
  return mockRes.CreateRes(data);
};
