import * as mock from './mock';
import methods from '@/protocol/fetch-api/methods';

let isMock = false;
onNuxtReady(() => {
  const { public: { testMode } } = useRuntimeConfig();
  isMock = testMode === 'T';
});

// -----------------------------------------------------------------------------------------------
/** 登入 */
export const SignIn = (params: SignInParams) => {
  if (isMock) return mock.SignIn(); // Mock
  return methods.post<SignInRes>('/apiurl/sign-in', params);
};
