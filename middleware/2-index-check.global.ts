export default defineNuxtRouteMiddleware(async (to, from) => {
  // // 首頁無指定頁面，前往登入頁
  // if (to.path === '/') return navigateTo('/sign-in');
  // // bgm 頁面無指定，前往第一頁
  // if (to.path === '/bgm' || to.path === '/bgm/') return navigateTo('/bgm/dashboard');
});
