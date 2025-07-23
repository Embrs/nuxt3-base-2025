import * as mock from './mock';
import methods from '@/protocol/fetch-api/methods';

const isMock = true;
// -----------------------------------------------------------------------------------------------
/** 登入 */
export const SignIn = (params: SignInParams) => {
  if (isMock) return mock.SignIn(); // Mock
  return methods.post<SignInRes>('/api/sign-in', params);
};

/** 登出 */
export const SignOut = () => {
  if (isMock) return mock.SignOut(); // Mock
  return methods.post('/api/sign-out');
};

/** 取得個人資料 */
export const GetSelfInfo = () => {
  if (isMock) return mock.GetSelfInfo(); // Mock
  return methods.get<SelfInfoRes>('/api/self-info');
};

/** 修改自己密碼 */
export const ChangSelfPwd = (params: ChangSelfPwdParams) => {
  if (isMock) return mock.Default(); // Mock
  return methods.post('/api/base/slef/password', params);
};
