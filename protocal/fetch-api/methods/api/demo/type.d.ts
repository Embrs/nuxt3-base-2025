type GenderType = 1|2|3 // 性別 [1] 男 [2] 女 [3]其他
interface DefaultStaffInfo {
  name: string // 中文姓名
  english_name: string // 英文姓名‘
  account: string  // 帳號
  password?: string // 密碼
  arrival_date: string // 到職日 YYYY-MM-DD
  resignation_date?: string // 離職日 YYYY-MM-DD
  direct_manager:  { // 直屬主管
    admin_id: number | ''
    english_name?: string
  }
  assignee?: { // 代理人
    admin_id: number | ''
    english_name?: string
  } 
  second_assignee?: { // 第二代理人
    admin_id: number | ''
    english_name?: string
  } 
  birthday: string // 生日 YYYY-MM-DD
  department: { // 部門索引
    id: number | ''
    name?: string
  }
  job_title:{ // 職稱索引
    id: number | ''
    name?: string
  }
  address: string // 地址
  email: string // 信箱
  gender: GenderType | '' // 性別
  phone: string // 電話
  special_holiday_days: number // 特休天數
  is_publish: boolean // 是否啟用
}
// 登入 -----------------------------------------------------------------------------------------------
interface SignInParams {
  account: string
  password: string
}

interface SignInRes extends DefaultRes {
  data: {
    token: string
  }
}

// 管理員建立 -----------------------------------------------------------------------------------------------
interface CreateStaffParams extends DefaultStaffInfo{
  // password: string
}

interface CreateStaffRes extends DefaultRes {
  data: {
    admin_id: number
  }
}

// 管理員修改 -----------------------------------------------------------------------------------------------
interface UpdateStaffParams extends DefaultStaffInfo{
  // password?: string
}

// 取得管理員 -----------------------------------------------------------------------------------------------
interface GetStaffInfoResData extends DefaultStaffInfo{
  // id: number
}
interface GetStaffInfoRes extends DefaultRes{
  data: GetStaffInfoResData
}

// 管理員建立 -----------------------------------------------------------------------------------------------
interface GetStaffListParams {
  page: number
  search_name?: string
  size: number
}

interface StaffListzRow {
  id: number
  english_name: string
  department: {
    id: number
    name: string
  }
  job_title: {
    id: number
    name: string
  }
  email: string
  is_publish: boolean
}
interface GetStaffListRes extends DefaultRes {
  data: {
    list: StaffListzRow[]
    total: number
  }
}

// 重設當下管理員密碼 -----------------------------------------------------------------------------------------------
interface ResetCurrentStaffPasswordParams {
  old_password: string;
  password: string;
  check_password?: string;
}

// 確認登入狀態 -----------------------------------------------------------------------------------------------
interface CheckSignIntRes extends DefaultRes {
  data: {
    is_login: boolean 
  }
}

// 確認登入狀態 -----------------------------------------------------------------------------------------------
interface GetCurrentStaffInfoRes extends DefaultRes {
  data: GetStaffInfoResData
}


interface DefaultDiscussionInfo {
  title: string; // 標題
  summary: string; // 摘要
  tag: string[];  // 標籤
  author: string; // 作者
  banner_image_path: string; // 橫幅圖
  content: string; // 內文
  pin_to_top: boolean; // 置頂
  is_publish: boolean; // 啟用發佈
  publish_start_time?: string; // 發佈開始 YYYY-MM-DD
  unpublish_time?: string; // 發佈結束 YYYY-MM-DD
}
// 專題研討建立 -----------------------------------------------------------------------------------------------
interface CreateDiscussionParams extends DefaultDiscussionInfo {}

interface CreateDiscussionRes extends DefaultRes{
  data: {
    capstone_projec_id: number
  }
}

// 專題研討修改 -----------------------------------------------------------------------------------------------
interface UpdateDiscussionParams extends DefaultDiscussionInfo {}

// 專題研討詳細資料 -----------------------------------------------------------------------------------------------
interface GetDiscussionRes extends DefaultRes{
  data: DefaultDiscussionInfo
}


// 專題研討列表 -----------------------------------------------------------------------------------------------
interface GetDiscussionListParams {
  page: number
  size: number
}

interface DiscussionListRow {
  id: number,
  title: string; // 標題
  summary: string; // 摘要
  tag: string[];  // 標籤
  author: string; // 作者
  banner_image_path: string; // 橫幅圖
  pin_to_top: boolean; // 置頂
  is_publish: boolean; // 發佈開關
  publish_start_time?: string; // 開始發佈時間 YYYY-MM-DD
  unpublish_time?: string; // 取消發佈時間 YYYY-MM-DD
  last_modified_man: {
    admin_id: number
    english_name: string
  }
  updated_at: string
}

interface GetDiscussionListRes extends DefaultRes{
  data: {
    list: DiscussionListRow[],
    total: number
  }
}

// 上傳圖片 -----------------------------------------------------------------------------------------------
interface UploadImageParams {
  image: File
}
interface UploadImageRes extends DefaultRes{
  data: {
    image_url: strinng
  }
}

// -----------------------------------------------------------------------------------------------
interface StaffRuleRow {
  id: number,
  page_name: string,
  group: {
    view: boolean,
    create: boolean,
    update: boolean,
    delete: boolean
  }
}
// 權限修改 -----------------------------------------------------------------------------------------------
interface UpdateStaffRuleParams {
  list: StaffRuleRow[]
}

// 管理員修改 -----------------------------------------------------------------------------------------------
interface GetStaffRuleRes extends DefaultRes{
  data: {
    list: StaffRuleRow[]
  }
}

// 管理員修改 -----------------------------------------------------------------------------------------------
interface GetCurrentStaffRuleRes extends DefaultRes{
  data: {
    list: StaffRuleRow[]
  }
}

// -----------------------------------------------------------------------------------------------
type PorjectType = 1|2|3 // 1: 網頁設計, 2: ERP製作, 3: 行銷

interface DefaultProjectInfo {
  project_name: string; // 專案名稱
  project_name_english: string; // 專案英文名稱
  summary: string; // 摘要
  publish_start_time: string; // 發佈開始時間 YYYY-MM-DD
  unpublish_time?: string; // 結束時間 YYYY-MM-DD
  is_publish: boolean; // 啟用發佈
  tag: string[];
  list_image_path: string; // 列表圖
  project_type: PorjectType; // 專案類型
  industry_type: string; // 產業類型
  customer_name: string; // 客戶名稱
  execute: string[]; // 執行項目
  start_time: string; // 啟動時間，YYYY-MM-DD
  domin_name?: string; // 網站連結
  primary_color: string; // 主色調
  secondary_color: string; // 次色調
  up_banner_image_path?: string; // 上橫幅圖
  project_goals: string; // 專案目標內文
  content_image_path?: string; // 內文圖
  design_execution?: string; // 設計執行內文
  lower_banner_image_path?: string; // 下橫幅圖
  multi_image_path?: string[]; // 多圖
}

// 專案案例建立 -----------------------------------------------------------------------------------------------
interface CreateProjectParams extends DefaultProjectInfo {}

interface CreateProjectRes extends DefaultRes{
  data: {
    portfolio_id: number
  }
}

// 專案案例修改 -----------------------------------------------------------------------------------------------
interface UpdateProjectParams extends DefaultProjectInfo {}

// 專案案例詳細資料 -----------------------------------------------------------------------------------------------
interface GetProjectRes extends DefaultRes{
  data: DefaultProjectInfo
}

// 專案案例列表 -----------------------------------------------------------------------------------------------
interface GetProjectListParams {
  page: number
  size: number
}

interface ProjectListRow {
  id: number,
  project_name: string; 
  project_name_english: string;
  content_image_path?: string; // 內文圖
  customer_name: string; // 客戶名稱
  design_execution?: string; // 設計執行
  domin_name?: string; // 網址
  industry_type: string; // 產業類型
  last_modified_man: LastModifiedMan; // 最後修改人員
  list_image_path?: string; // 列表圖
  lower_banner_image_path?: string; // 下橫幅圖
  multi_image_path?: string[]; // 多圖
  primary_color: string; // 主要顏色
  project_goals: string; // 專案目標
  project_type: PorjectType
  secondary_color: string; // 次要顏色
  summary: string; // 摘要
  tag: string[];
  start_time: string; // 啟動時間 YYYY-MM-DD
  is_publish: boolean; // 啟用發佈
  publish_start_time: string; // 發佈開始 YYYY-MM-DD
  unpublish_time: string; // 發佈結束 YYYY-MM-DD
  up_banner_image_path?: string; // 上橫幅圖
  updated_at: string; // YYYY-MM-DD
}

interface GetProjectListRes extends DefaultRes{
  data: {
    list: ProjectListRow[],
    total: number
  }
}