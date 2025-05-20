/* 目前路徑移除語系 */
export default defineNuxtRouteMiddleware((to, from) => {
  // if (import.meta.server) return;
  // const localePath = useLocalePath();
  // const storeRoute = StoreRoute();
  // const storeSelf = StoreSelf();

  // // 首頁無指定頁面，前往登入頁
  // const nextPath = storeRoute.PathRemoveLang(to.path);

  // if (nextPath === '/') return storeSelf.NavigateToSignIn();

  // // To first page
  // if (nextPath === '/bgm') return navigateTo(localePath('/bgm/dashboard'));
});
