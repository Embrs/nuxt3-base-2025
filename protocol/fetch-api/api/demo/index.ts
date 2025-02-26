import * as mock from './mock';
import methods from '@/protocol/fetch-api/methods';
const IsMock = () => {
  // const { public: { testMode } } = useRuntimeConfig();
  // return testMode === 'T';
  return true;
};

// -----------------------------------------------------------------------------------------------
const router = {
  TEST: '/apiurl/user/login' // Test
};
// -----------------------------------------------------------------------------------------------
/** Test */
export const Test = (params: any): Promise<any> => {
  if (IsMock()) return mock.DEFAULT(); // Mock
  return methods.post(router.TEST, params) as Promise<any>;
};
