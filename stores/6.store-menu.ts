const rbacPageTag = '__page';
/** 選單 */
export const StoreMenu = defineStore('StoreMenu', () => {
  const $router = useRouter();

  const storeSelf = StoreSelf();
  const storeRoute = StoreRoute();
  const routePathList = ref<string[]>([]); // 路徑全列表(以中文為底)

  // 深度尋找路徑
  const FindDeepPath = (parentPath: string, _routes: typeof $router.options.routes): string[] => {
    return _routes.reduce<string[]>((acc, route) => {
      const path = `${parentPath}${route.path}`;
      acc.push(path);
      if (route?.children && route.children.length > 0) {
        acc.push(...FindDeepPath(`${path}/`, route.children));
      }
      return acc;
    }, []);
  };

  // 提取路徑
  const CreateRoutePathList = () => {
    const _routes = $router.options.routes.filter((i) => String(i.name).includes('___zh'));
    const list = FindDeepPath('', _routes);
    routePathList.value = list;
  };

  // 執行
  CreateRoutePathList();

  // menu 對照表
  const menuMap = computed(() => {
    return $menuBase.reduce<{ [key: string]: MenuMapInfo }>((obj, item) => {
      const findPath = routePathList.value.find((_p) => `${_p}_`.includes(`/${item.key}_`)) || '';
      const hasRule = storeSelf.HasRule(`${item.key}${rbacPageTag}` as RuleValue);
      obj[item.key] = {
        ...item,
        path: hasRule ? findPath : '',
        points: storeRoute.PathToPoint(findPath)
      };
      return obj;
    }, {});
  });

  // 權限過濾
  const rbacMenulist = computed(() => $menuBase.filter((menuItem) =>
    storeSelf.HasRule(`${menuItem.key}${rbacPageTag}` as RuleValue)
  ));

  // menu 階層樹
  interface MenuTree {
    [key: string]: MenuTree
  }

  // menu 階層樹
  const menuTree = computed(() => {
    const _tree: MenuTree = {};
    for (const item of rbacMenulist.value) {
      let _currentTree: MenuTree = _tree;
      for (const key of menuMap.value[item.key].points) {
        _currentTree[key] ??= {};
        _currentTree = _currentTree[key];
      }
    }
    return _tree;
  });

  // 生成 menuList
  const CreateMenuList = (_tree: MenuTree, _list: MenuItem[]) => {
    for (const menuKey of Object.keys(_tree)) {
      const menuInfo = menuMap.value[menuKey];
      if (!menuInfo) continue; // 若 menuMap 沒有此 key，跳過
      const menuItem: MenuItem = {
        ...menuInfo,
        children: [],
        isOpen: false,
        canOpen: Object.keys(_tree[menuKey]).length > 0
      };
      CreateMenuList(_tree[menuKey], menuItem.children);
      _list.push(menuItem);
    }
  };
  const menuList = ref<MenuItem[]>([]);

  const InitMenuList = () => {
    const _list: MenuItem[] = [];
    CreateMenuList(menuTree.value, _list);
    menuList.value = _list;
  };
  return { menuMap, menuList, InitMenuList };
});
