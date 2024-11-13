import { methods } from '../../setting';
import * as mock from './mock';
const IsMock = () => {
  // const { public: { testMode } } = useRuntimeConfig();
  // return testMode === 'T';
  return true;
};

// -----------------------------------------------------------------------------------------------
const router = {
  TEST: '/api/user/login' // Test
};
// -----------------------------------------------------------------------------------------------
/** Test */
export const Test = (params: any): Promise<any> => {
  if (IsMock()) return mock.DEFAULT(); // Mock
  return methods.post(router.TEST, params) as Promise<any>;
};
