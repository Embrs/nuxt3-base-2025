import * as mock from './mock';
import methods from '@/protocol/fetch-api/methods';

const IsMock = () => {
  const { public: { testMode } } = useRuntimeConfig();
  return testMode === 'T';
};

// -----------------------------------------------------------------------------------------------
/** 登入 */
export const SignIn = (params: SignInParams) => {
  if (IsMock()) return mock.SignIn(); // Mock
  return methods.post<SignInRes>('/apiurl/sign-in', params);
};
