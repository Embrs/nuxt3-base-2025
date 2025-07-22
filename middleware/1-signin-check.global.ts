// TODO Check Token
/** 確認登入狀態 */
// const ApiTokenCheck = async () => {
//   const { data, status } = await $api.TokenCheck();
//   if (status.code === 0) {
//     return data.is_pass;
//   }
//   return false;
// };

// -----------------------------------------------------------------------------------------------
export default defineNuxtRouteMiddleware((to, from) => {
  if (import.meta.server) return;
  const path = to.path.toLowerCase();
  // 不是後臺，離開
  if (!path.includes('/bgm')) return;
  const storeSelf = StoreSelf();
  // 未登入踢開，token 失效踢開
  // if (!storeSelf.isSignIn || !await ApiTokenCheck()) {
  if (!storeSelf.isSignIn) {
    ElMessage.error('登入失效，請重新登入');
    storeSelf.NavigateToSignIn();
  }
});
