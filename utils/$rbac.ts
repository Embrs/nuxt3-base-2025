/** 權限 */
// 所有權限
const allRules = [
  'dashboard__page', // 儀表板 頁面
  'customer__page', // 客戶管理 頁面
  'staff__page' // 員工管理 頁面
] as const;

type RuleValue = typeof allRules[number];

// 角色對應權限
const roleRules: Record<RoleType, RuleValue[]> = {
  1: ['dashboard__page', 'customer__page', 'staff__page'],
  2: ['dashboard__page', 'customer__page']
};

export type {
  RuleValue
};
export default Object.freeze({
  allRules,
  roleRules
});
