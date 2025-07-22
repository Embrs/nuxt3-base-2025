// 登入與權限
// const sevenDay = 60 * 60 * 24 * 7;
export const StoreSelf = defineStore('StoreSelf', () => {
  const localePath = useLocalePath();
  // token -----------------------------------------------------------------------------------------------
  // Token
  const token = UseStorage<string>('StoreSelf_token', '');

  // 權限列表，用於儲存
  const rules = UseStorage<string[]>('StoreSelf_rules', []);

  // 權限列表，用於儲存
  const selfInfo = UseStorage<SelfInfoRes>('StoreSelf_selfInfo', {
    id: '',
    role: 1,
    name: ''
  });

  /** 是否登入 */
  const isSignIn = computed(() => !!token.value);

  /** 設定 Token */
  const SetToken = (_token = '') => {
    token.value = _token;
  };

  /* 個人資料清除 */
  const SelfClear = () => {
    // 清除權限
    rules.value = [];

    // 清除 token
    SetToken('');
  };

  /** 跳轉至登入頁 */
  const NavigateToSignIn = () => {
    SelfClear();
    return navigateTo(localePath('/sign-in'));
  };

  /** 設定個人資料 */
  const SetSelfInfo = (_selfInfo: SelfInfoRes) => {
    selfInfo.value = _selfInfo;
  };
  // -----------------------------------------------------------------------------------------------
  return {
    /** 是否登入 */
    isSignIn,
    /** Token */
    token,
    /** 設定 Token */
    SetToken,
    /** 個人資料清除 */
    SelfClear,
    /** 跳轉至登入頁 */
    NavigateToSignIn,
    /** 設定個人資料 */
    SetSelfInfo
  };
});
