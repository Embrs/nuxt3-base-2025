export const UseBgmSign = () => {
  // -- 引入 --------------------------------------------------------------------------------------------
  const { t } = useI18n();
  const storeSelf = StoreSelf();
  const localePath = useLocalePath();
  const $ask = UseAsk();

  // -- 資料 --------------------------------------------------------------------------------------------
  // -- 流程 --------------------------------------------------------------------------------------------
  // 登入流程
  const SignInFlow = async (params: SignInParams, ValidateFn: Function) => {
    // 1. 驗證
    const isPass = await ValidateFn();
    if (!isPass) {
      ElMessage.error(t('message.requiredFieldsMissing'));
      return false;
    }

    // 2. 清除個人資訊
    storeSelf.SelfClear();

    // 3. 登入
    if (!await ApiSignIn(params)) return false;

    // 4. 取得個人資料
    if (!await ApiGetSelfInfo()) return false;

    // 5. 取得公司資訊
    if (!await ApiGetCompanyInfo()) return false;

    // 5. 跳轉
    navigateTo(localePath('/bgm/'));

    return true;
  };

  // 登出流程
  const SignOutFlow = async () => {
    // 1. 詢問
    if (!await $ask.SignOut()) return;

    // 2. 登出
    await ApiSignOut();

    // 3. 清除個人資訊
    storeSelf.SelfClear();

    // 4. 跳轉至登入頁
    storeSelf.NavigateToSignIn();

    ElMessage.success(t('ph.success', [t('label.signOut')]));
  };

  // -- 函式 --------------------------------------------------------------------------------------------

  // -- Api ---------------------------------------------------------------------------------------------
  /**  登入 */
  const ApiSignIn = async (params: SignInParams) => {
    const { data, status } = await $api.SignIn(params);
    if (status.code === 0) {
      // 設定 token
      storeSelf.SetToken(data.token);
      return true;
    }
    return false;
  };

  /**  取得個人資訊 */
  const ApiGetSelfInfo = async () => {
    const { data, status } = await $api.GetSelfInfo();
    if (status.code === 0) {
      // 設定個人資料
      storeSelf.SetSelfData(data);
      return true;
    }
    return false;
  };

  /** 公司詳情 */
  const ApiGetCompanyInfo = async () => {
    if (!storeSelf.currentCompany?.id) return false;
    const { data, status } = await $api.GetCompanyInfo(storeSelf.currentCompany.id);
    if (status.code === 0) {
      // 設定所在公司資料
      storeSelf.SetCompanyCtInfo(data);
      // TODO
      return true;
    }
    return false;
  };

  // 登出
  const ApiSignOut = async () => {
    const { status } = await $api.SignOut();
    return status.code === 0;
  };
  // -----------------------------------------------------------------------------------------
  return {
    SignInFlow,
    SignOutFlow
  };
};
