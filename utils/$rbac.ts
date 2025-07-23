/** 權限 */
// 所有權限
const allRules = [
  'a__page', // A 頁面
  'b__page', // B 頁面
  'c__page', // C 頁面
  'd__page', // D 頁面
  'e__page', // E 頁面
  'dashboard__page', // 儀表板 頁面
  'customer__page', // 客戶管理 頁面
  'staff__page' // 員工管理 頁面
] as const;

type RuleValue = typeof allRules[number];

// 角色對應權限
const roleRules: Record<RoleType, RuleValue[]> = {
  1: [...allRules],
  2: ['dashboard__page', 'customer__page']
};

export type {
  RuleValue
};
export default Object.freeze({
  allRules,
  roleRules
});
