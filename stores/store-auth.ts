// 登入與權限
const sevenDay = 60 * 60 * 24 * 7;
export const StoreUser = defineStore('StoreUser', () => {
  // token -----------------------------------------------------------------------------------------------
  const token = useCookie('token', { default: () => '', maxAge: sevenDay }); // 登入狀態

  /** 是否登入 */
  const isSignIn = computed(() => !!token.value);

  /** 設定 Token */
  const SetToken = (_token = '') => {
    token.value = _token;
  };

  // -----------------------------------------------------------------------------------------------
  return {
    isSignIn,
    token,
    SetToken
  };
});
