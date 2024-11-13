export default defineNuxtRouteMiddleware(async (to, from) => {
  // console.log(to, from);
  // const storeAuth = StoreAuth();
  // // 前往登入頁
  // const ToSignInPage = () => {
  //   return navigateTo('/sign-in'); // 導航
  // };
  // /**  確認登入狀態 API */
  // const ApiCheckSignIn = async (): Promise<boolean> => {
  //   const res = await api.CheckSignIn();
  //   if (res?.status?.is_success) {
  //     if (!res.data.is_login) {
  //       ElNotification({ title: '登入過期，請重新登入', type: 'error' });
  //     }
  //     return res.data.is_login;
  //   }
  //   if (res?.status?.message) ElNotification({ title: res?.status?.message, message: res?.status?.detail, type: 'error' });
  //   return false;
  // };

  // // 進入需要登入的頁面
  // if (to.path !== '/sign-in') {
  //   // 未登入踢開
  //   if (!storeAuth.isSignIn) {
  //     ElNotification({ title: '尚未登入，請登入', type: 'error' });
  //     return ToSignInPage();
  //   }
  //   // token 失效踢開
  //   if (!await ApiCheckSignIn()) return ToSignInPage();
  // }
});
