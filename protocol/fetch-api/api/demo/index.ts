import * as mock from './mock';
import methods from '@/protocol/fetch-api/methods';
let isMock = false;
onNuxtReady(() => {
  const { public: { testMode } } = useRuntimeConfig();
  isMock = testMode === 'T';
});
// -----------------------------------------------------------------------------------------------
const router = {
  TEST: '/apiurl/user/login' // Test
};
// -----------------------------------------------------------------------------------------------
/** Test */
export const Test = (params: any) => {
  if (isMock) return mock.Default(); // Mock
  return methods.post(router.TEST, params) as Promise<any>;
};
