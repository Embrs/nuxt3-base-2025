import * as mock from './mock';
import methods from '@/protocol/fetch-api/methods';
const IsMock = () => {
  // const { public: { testMode } } = useRuntimeConfig();
  // return testMode === 'T';
  return true;
};

// -----------------------------------------------------------------------------------------------
const router = {
  SIGN_IN: '/apiurl/user/signin' // Test
};

// -----------------------------------------------------------------------------------------------
/** 登入 */
export const SignIn = (params: SignInParams): Promise<SignInRes> => {
  if (IsMock()) return mock.SIGN_IN(); // Mock
  return methods.post(router.SIGN_IN, params) as Promise<SignInRes>;
};
