type ApplicationEvents = {
  'refresh': any   // 刷新數據
  'reload': any    // 重加载
  'open-com': OpenData  // 開啟彈窗
  'dialog-close-all': OpenData  // 開啟彈窗
};
type MittKeys = 'refresh' | 'reload' |'open-com' |'dialog-close-all'
