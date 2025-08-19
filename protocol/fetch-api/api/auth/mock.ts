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

// 登出
export const SignOut = () => {
  return mockRes.CreateRes({});
};

// 取得個人資料
export const GetSelfInfo = () => {
  const data: SelfInfoRes = {
    id: '1',
    role: 1,
    name: '王小明'
  };
  return mockRes.CreateRes(data);
};
