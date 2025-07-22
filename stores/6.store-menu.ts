/** 選單 */
export const StoreMenu = defineStore('StoreMenu', () => {
  const $router = useRouter();

  const storeSelf = StoreSelf();
  const storeRoute = StoreRoute();
  const routePathList = ref<string[]>([]); // 路徑全列表(以中文為底)

  // 深度尋找路徑
  const FindDeepPath = (parentPath: string, list: string[], _routes: typeof $router.options.routes) => {
    for (const route of _routes) {
      const path = `${parentPath}${route.path}`;
      list.push(path);
      if (route?.children && route.children.length > 0) {
        const _parentPath = `${path}/`;
        FindDeepPath(_parentPath, list, route.children);
      }
    }
    return list;
  };

  // 提取路徑
  const CreateRoutePathList = () => {
    const _routes = $router.options.routes.filter((i) => String(i.name).includes('___zh'));
    const list = FindDeepPath('', [], _routes);
    routePathList.value = list;
  };

  // 執行
  CreateRoutePathList();

  // menu 對照表
  const menuMap = computed(() => {
    const _obj:{[key: string]: MenuMapInfo} = {};
    for (const item of $menuBase) {
      const findPath = routePathList.value.find((_p) => `${_p}_`.includes(`/${item.key}_`)) || '';
      _obj[item.key] = {
        ...item,

        path: storeSelf.HasRule(`${item.key}__page` as RuleValue) ? findPath || '' : '', // 無權限，Menu 無路徑
        points: storeRoute.PathToPoint(findPath)
      };
    }
    return _obj;
  });

  // 權限過濾
  const rbacMenulist = computed(() => {
    const _list: MenuBaseInfo[] = [];
    for (const menuItem of $menuBase) {
      if (!storeSelf.HasRule(`${menuItem.key}__page` as RuleValue)) continue;
      _list.push(menuItem);
    }
    return _list;
  });

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
        if (!_currentTree[key]) _currentTree[key] = {};
        _currentTree = _currentTree[key];
      }
    }
    return _tree;
  });

  // 生成 menuList
  const CreateMenuList = (_tree: MenuTree, _list: MenuItem[]) => {
    if (Object.keys(_tree).length === 0) return;
    for (const menuKey in menuMap.value) {
      if (!_tree[menuKey]) continue;
      const menuItem: MenuItem = {
        ...menuMap.value[menuKey],
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
