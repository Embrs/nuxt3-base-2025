import * as mock from './mock';
import methods from '@/protocol/fetch-api/methods';
const IsMock = () => {
  // const { public: { testMode } } = useRuntimeConfig();
  // return testMode === 'T';
  return true;
};

// -----------------------------------------------------------------------------------------------
const router = {
  SIGN_IN: '/apiurl/sign-in' // 登入
};

// -----------------------------------------------------------------------------------------------
/** 登入 */
export const SignIn = (params: SignInParams) => {
  if (IsMock()) return mock.SignIn(); // Mock
  return methods.post(router.SIGN_IN, params) as Promise<ApiRes<SignInRes>>;
};
