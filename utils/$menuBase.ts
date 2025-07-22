/**
 * menu 基本資訊
 * 會照順序呈現
 * 要建立 menu 要呈顯的節點，包含非頁面資料夾，與頁面本你
 * ex: test資料夾下有test1與test2兩個頁面，test本身無頁面。test test1 test2 都要寫入
 */

const menuBase: MenuBaseInfo[] = [
  { key: 'dashboard', icon: '', name: '儀表板' }, // 儀表板
  { key: 'customer', icon: '', name: '客戶管理' }, // 客戶管理
  { key: 'staff', icon: '', name: '員工管理' } // 員工管理

];

export default Object.freeze(menuBase);
