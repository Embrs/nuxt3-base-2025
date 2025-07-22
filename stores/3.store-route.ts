/**
 * 路徑相關處理
 * 因為導入 i18n 導致路徑變得相對複雜
 * 不含 route 的方法 (含 route 的方法，middleware 會出錯)
 */
import i18n from '@/i18n';

export const StoreRoute = defineStore('StoreRoute', () => {
  // 清除的節點
  const clearLang = [...i18n.locales, '', null, undefined];
  const clearLangBgm = [...clearLang, 'bgm'];

  /* 路徑移除語系 '/cn/bgm/' => '/bgm'  */
  const PathRemoveLang = (path: string): string => {
    // 切割, 過濾語系
    const _points = path.split('/').filter((item) => !clearLang.includes(item));
    return ['', ..._points].join('/') || '/';
  };

  /* 取得頁面 */
  const GetPageKey = (_route: ReturnType<typeof useRoute>) => {
    const _mRoute = _route.matched?.at(-1);
    if (!_mRoute) return '';
    const pathPoints = PathToPoint(_mRoute.path).reverse();
    let _cPage = '';
    for (const page of pathPoints) {
      if (page.includes(':')) continue; // 是參數就在往後找
      _cPage = page;
      break;
    }
    return _cPage;
  };

  /* 路徑轉化節點 () */
  const PathToPoint = (path: string) => {
    // 正則去除 '/**/bgm/'
    // '/cn/bgm/test =>' ['test']
    // '/cn/test/test2' => [ test', 'test2']
    return `${path || ''}`.split('/').filter((i) => !clearLangBgm.includes(i));
  };

  return {
    /** 路徑移除語系 */
    PathRemoveLang,
    /** 取得頁面 */
    GetPageKey,
    /** 路徑轉化節點 */
    PathToPoint
  };
});
