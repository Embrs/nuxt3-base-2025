/**
 * menu 基本資訊
 * 會照順序呈現
 * 要建立 menu 要呈顯的節點，包含非頁面資料夾，與頁面本你
 * ex: test資料夾下有test1與test2兩個頁面，test本身無頁面。test test1 test2 都要寫入
 */

const menuBase: MenuBaseInfo[] = [
  { key: 'a', name: 'A', icon: 'material-symbols:dashboard' }, // A
  { key: 'b', name: 'B', icon: 'material-symbols:dashboard' }, // B
  { key: 'c', name: 'C', icon: 'material-symbols:dashboard' }, // C
  { key: 'd', name: 'D', icon: 'material-symbols:dashboard' }, // D
  { key: 'e', name: 'E', icon: 'material-symbols:dashboard' }, // E
  { key: 'dashboard', name: '儀表板', icon: 'mdi:monitor-dashboard' }, // 儀表板
  { key: 'customer', name: '客戶管理', icon: 'material-symbols:person-pin' }, // 客戶管理
  { key: 'staff', name: '員工管理', icon: 'material-symbols:person-apron' } // 員工管理
];

export default Object.freeze(menuBase);
