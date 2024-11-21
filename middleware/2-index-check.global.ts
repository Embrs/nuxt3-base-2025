const GetBathPath = (name: string, path: string): string => {
  const arr = name.split('___');
  const lang = arr?.[1] || 'zh';
  const basePath = path.replace(`/${lang}`, '') || '/';
  return basePath;
};

export default defineNuxtRouteMiddleware((to, from) => {
  // const { locale, locales } = useI18n();
  // const localePath = useLocalePath();

  // // 首頁無指定頁面，前往登入頁
  // const basePath = GetBathPath(to.name as string, to.path);

  // if (basePath === '/') return navigateTo(localePath('/sign-in'));
  // if (basePath === '/bgm' || basePath === '/bgm/') return navigateTo(localePath('/bgm/dashboard'));
});
