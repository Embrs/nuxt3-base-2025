// 登入與權限
// const sevenDay = 60 * 60 * 24 * 7;
import type { RuleValue } from '@/utils/$rbac';
export const StoreSelf = defineStore('StoreSelf', () => {
  const localePath = useLocalePath();
  // token -----------------------------------------------------------------------------------------------
  // Token
  const token = UseStorage<string>('StoreSelf_token', '');

  // // 權限列表，用於儲存
  // const roles = UseStorage<string[]>('StoreSelf_rules', []);

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
    selfInfo.value = {
      id: '',
      role: 1,
      name: ''
    };

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

  // 個人權限
  const myRules = computed<RuleValue[]>(() => {
    return $rbac?.roleRules?.[selfInfo.value.role as RoleType] || [];
  });

  /* 擁有權限 */
  const HasRule = (ruleVal: RuleValue): boolean => myRules.value.includes(ruleVal);

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
    SetSelfInfo,
    /** 擁有權限 */
    HasRule,
    /** 權限列表 */
    myRules,
    /** 個人資料 */
    selfInfo
  };
});
