import * as mock from './mock';
import methods from '@/protocol/fetch-api/methods';
let isMock = false;
onNuxtReady(() => {
  const { public: { testMode } } = useRuntimeConfig();
  isMock = testMode === 'T';
});
// -----------------------------------------------------------------------------------------------
const router = {
  SIGN_IN: '/apiurl/sign-in' // 登入
};

// -----------------------------------------------------------------------------------------------
/** 登入 */
export const SignIn = (params: SignInParams) => {
  if (isMock) return mock.SignIn(); // Mock
  return methods.post(router.SIGN_IN, params) as Promise<ApiRes<SignInRes>>;
};
