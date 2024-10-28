// import cloneDeep from 'lodash/cloneDeep';
// // mock 回傳調整
// const basic: any = {
//   data: null,
//   status: {
//     is_success: true,
//     message: '',
//     detail: '',
//     httpStatus: 200
//   }
// };

// // 預設回傳 -------------------------------------------------------------------------------------------------
// export const DEFAULT = (): Promise<DefaultRes> => {
//   return new Promise((resolve) => {
//     const res: DefaultRes = cloneDeep(basic);
//     setTimeout(() => { resolve(res); }, 100);
//   });
// };

// // 管理員登入 -------------------------------------------------------------------------------------------------
// export const SING_IN = (): Promise<SignInRes> => {
//   return new Promise((resolve) => {
//     const res: SignInRes = cloneDeep(basic);
//     res.data = {
//       token: 'testtesttest'
//     };
//     setTimeout(() => { resolve(res); }, 100);
//   });
// };

// // 管理員建立 -------------------------------------------------------------------------------------------------
// export const CREATE_STAFF = (): Promise<CreateStaffRes> => {
//   return new Promise((resolve) => {
//     const res: CreateStaffRes = cloneDeep(basic);
//     res.data = {
//       admin_id: 123123
//     };
//     setTimeout(() => { resolve(res); }, 100);
//   });
// };

// // 管理員詳細資料 -------------------------------------------------------------------------------------------------
// export const GET_STAFF_INFO = (): Promise<GetStaffInfoRes> => {
//   return new Promise((resolve) => {
//     const res: GetStaffInfoRes = cloneDeep(basic);
//     res.data = {
//       name: '多算一分北',
//       special_holiday_days: 91,
//       account: 'aabbccaa',
//       resignation_date: '1970-05-15',
//       arrival_date: '1973-05-23',
//       job_title: { id: 98, name: '後端工程師' },
//       department: { id: 91, name: '研發部' },
//       birthday: '1970-05-15',
//       gender: 1,
//       phone: '18151287541',
//       assignee: {
//         admin_id: 4,
//         english_name: '它些空军结金'
//       },
//       address: '浙江省北海市桦川县',
//       email: 'y.roix@qq.com',
//       english_name: '持别反几部',
//       second_assignee: {
//         admin_id: 2,
//         english_name: '造证有象细你名'
//       },
//       direct_manager: {
//         admin_id: 86,
//         english_name: '层深门'
//       },
//       is_publish: true
//     };
//     setTimeout(() => { resolve(res); }, 100);
//   });
// };

// // 管理員列表 -------------------------------------------------------------------------------------------------
// export const GET_STAFF_LIST = (): Promise<GetStaffListRes> => {
//   return new Promise((resolve) => {
//     const res: GetStaffListRes = cloneDeep(basic);
//     res.data = {
//       list: [
//         {
//           english_name: 'AAAA',
//           email: 'i.mqmgxxrzj@qq.com',
//           job_title: { id: 55, name: '干四样内从' },
//           department: { id: 23, name: '话素思存及' },
//           is_publish: true,
//           id: 37
//         },
//         {
//           english_name: 'BBBB',
//           email: 't.tlitbhuok@qq.com',
//           job_title: { id: 95, name: '给其非办' },
//           department: { id: 27, name: '界转可光' },
//           is_publish: true,
//           id: 61
//         },
//         {
//           english_name: 'CCCC',
//           email: 'k.nhk@qq.com',
//           job_title: { id: 52, name: '开约要心活' },
//           department: { id: 93, name: '较度型议非合光' },
//           is_publish: false,
//           id: 34
//         }
//       ],
//       total: 500
//     };
//     setTimeout(() => { resolve(res); }, 100);
//   });
// };

// // 確認登入狀態 -------------------------------------------------------------------------------------------------
// export const CHECK_SIGN_IN = (): Promise<CheckSignIntRes> => {
//   return new Promise((resolve) => {
//     const res: CheckSignIntRes = cloneDeep(basic);
//     res.data = {
//       is_login: true
//     };
//     setTimeout(() => { resolve(res); }, 100);
//   });
// };

// // 取得當下管理員資料 -------------------------------------------------------------------------------------------------
// export const GET_CURRENT_STAFF_INFO = (): Promise<GetCurrentStaffInfoRes> => {
//   return new Promise((resolve) => {
//     const res: GetCurrentStaffInfoRes = cloneDeep(basic);
//     res.data = {
//       name: '多算一分北',
//       special_holiday_days: 91,
//       account: 'aabbccaa',
//       resignation_date: '1970-05-15',
//       arrival_date: '1973-05-23',
//       job_title: { id: 98, name: '後端工程師' },
//       department: { id: 91, name: '研發部' },
//       birthday: '1970-05-15',
//       gender: 1,
//       phone: '18151287541',
//       assignee: {
//         admin_id: 4,
//         english_name: '它些空军结金'
//       },
//       address: '浙江省北海市桦川县',
//       email: 'y.roix@qq.com',
//       english_name: '持别反几部',
//       second_assignee: {
//         admin_id: 2,
//         english_name: '造证有象细你名'
//       },
//       direct_manager: {
//         admin_id: 86,
//         english_name: '层深门'
//       },
//       is_publish: true
//     };
//     setTimeout(() => { resolve(res); }, 100);
//   });
// };

// // 專題研討建立 -------------------------------------------------------------------------------------------------
// export const CREATE_DISCUSSION = (): Promise<CreateDiscussionRes> => {
//   return new Promise((resolve) => {
//     const res: CreateDiscussionRes = cloneDeep(basic);
//     res.data = {
//       capstone_projec_id: 111
//     };
//     setTimeout(() => { resolve(res); }, 100);
//   });
// };

// // 專題研討詳細資料 -------------------------------------------------------------------------------------------------
// export const GET_DISCUSSION = (): Promise<GetDiscussionRes> => {
//   return new Promise((resolve) => {
//     const res: GetDiscussionRes = cloneDeep(basic);
//     res.data = {
//       title: 'test', // 標題
//       summary: 'test', // 摘要
//       tag: ['test'], // 標籤
//       author: 'test', // 作者
//       banner_image_path: 'http://dummyimage.com/400x400', // 橫幅圖
//       content: 'test', // 內文
//       pin_to_top: true, // 置頂
//       is_publish: true, // 發佈開關
//       publish_start_time: '1911-01-01 12:12:12', // 開始發佈時間 YYYY-MM-DD
//       unpublish_time: '1911-01-02 12:12:12' // 取消發佈時間 YYYY-MM-DD
//     };
//     setTimeout(() => { resolve(res); }, 100);
//   });
// };

// // 專題研討列表 -------------------------------------------------------------------------------------------------
// export const GET_DISCUSSION_LIST = (): Promise<GetDiscussionListRes> => {
//   return new Promise((resolve) => {
//     const res: GetDiscussionListRes = cloneDeep(basic);
//     res.data = {
//       list: [
//         {
//           id: 88,
//           title: '等律低正整',
//           summary: 'proident aute exercitation Lorem ut',
//           publish_start_time: '1999-04-13 12:12:12',
//           unpublish_time: '2014-05-29 12:12:12',
//           is_publish: false,
//           author: 'dolor amet ipsum culpa sunt',
//           tag: [
//             'officia'
//           ],
//           pin_to_top: false,
//           banner_image_path: 'http://dummyimage.com/400x400',
//           last_modified_man: {
//             admin_id: 88,
//             english_name: '部共完局把'
//           },
//           updated_at: '2006-12-06'
//         }
//       ],
//       total: 99
//     };
//     setTimeout(() => { resolve(res); }, 100);
//   });
// };

// // 上傳圖片 -------------------------------------------------------------------------------------------------
// export const UPLOAD_IMAGE = (): Promise<UploadImageRes> => {
//   return new Promise((resolve) => {
//     const res: UploadImageRes = cloneDeep(basic);
//     res.data = {
//       image_url: 'https://aahslda.org/images/librariesprovider2/images/lp/testing-and-evaluation-istock-495639272-compressor.jpg?sfvrsn=d82ef5d1_2'
//     };
//     setTimeout(() => { resolve(res); }, 100);
//   });
// };

// // 取得管理員權限 -------------------------------------------------------------------------------------------------
// const ruleList = [
//   {
//     id: 1,
//     page_name: '使用者列表',
//     group: { view: true, create: true, update: true, delete: true }
//   },
//   {
//     id: 2,
//     page_name: '權限操作',
//     group: { view: true, create: true, update: true, delete: true }
//   },
//   {
//     id: 3,
//     page_name: '部門管理',
//     group: { view: true, create: true, update: true, delete: true }
//   },
//   {
//     id: 4,
//     page_name: '職稱管理',
//     group: { view: true, create: true, update: true, delete: true }
//   },
//   {
//     id: 5,
//     page_name: '休假管理',
//     group: { view: true, create: false, update: false, delete: false }
//   },
//   {
//     id: 6,
//     page_name: '假別管理',
//     group: { view: true, create: true, update: true, delete: true }
//   },
//   {
//     id: 7,
//     page_name: '專題研討列表',
//     group: { view: true, create: true, update: true, delete: true }
//   },
//   {
//     id: 8,
//     page_name: '聯絡我們列表',
//     group: { view: true, create: true, update: true, delete: true }
//   },
//   {
//     id: 9,
//     page_name: '專案案例列表',
//     group: { view: true, create: true, update: true, delete: true }
//   }
// ];
// export const GET_STAFF_RULE = (): Promise<GetStaffRuleRes> => {
//   return new Promise((resolve) => {
//     const res: GetStaffRuleRes = cloneDeep(basic);
//     res.data = {
//       list: ruleList
//     };
//     setTimeout(() => { resolve(res); }, 100);
//   });
// };
// // 取得當下管理員權限 -------------------------------------------------------------------------------------------------
// export const GET_CURRENT_STAFF_RULE = (): Promise<GetCurrentStaffRuleRes> => {
//   return new Promise((resolve) => {
//     const res: GetCurrentStaffRuleRes = cloneDeep(basic);
//     res.data = {
//       list: ruleList
//     };
//     setTimeout(() => { resolve(res); }, 100);
//   });
// };

// // 專案案例建立 -------------------------------------------------------------------------------------------------
// export const CREATE_PROJECT = (): Promise<CreateProjectRes> => {
//   return new Promise((resolve) => {
//     const res: CreateProjectRes = cloneDeep(basic);
//     res.data = {
//       portfolio_id: 111
//     };
//     setTimeout(() => { resolve(res); }, 100);
//   });
// };

// // 專案案例詳細資料 -------------------------------------------------------------------------------------------------
// export const GET_PROJECT = (): Promise<GetProjectRes> => {
//   return new Promise((resolve) => {
//     const res: GetProjectRes = cloneDeep(basic);
//     res.data = {
//       project_name: '命至其',
//       project_name_english: '证存每道往流',
//       summary: 'ipsum deserunt proident in incididunt',
//       tag: [
//         'id'
//       ],
//       execute: [],
//       list_image_path: 'http://dummyimage.com/400x400',
//       project_type: 1,
//       customer_name: '声对快象世',
//       industry_type: 'mollit anim aliquip est',
//       start_time: '1970-03',
//       domin_name: '律存带照前长',
//       up_banner_image_path: 'http://dummyimage.com/400x400',
//       primary_color: 'sunt commodo dolor ad Lorem',
//       secondary_color: 'officia Ut',
//       project_goals: 'tempor Ut pariatur est',
//       content_image_path: 'http://dummyimage.com/400x400',
//       design_execution: 'est',
//       lower_banner_image_path: 'http://dummyimage.com/400x400',
//       multi_image_path: [
//         'http://dummyimage.com/400x400'
//       ],
//       publish_start_time: '2019-07-03 12:12:12',
//       unpublish_time: '1987-07-25 12:12:12',
//       is_publish: true
//     };
//     setTimeout(() => { resolve(res); }, 100);
//   });
// };

// // 專案案例列表 -------------------------------------------------------------------------------------------------
// export const GET_PROJECT_LIST = (): Promise<GetProjectListRes> => {
//   return new Promise((resolve) => {
//     const res: GetProjectListRes = cloneDeep(basic);
//     res.data = {
//       list: [
//         {
//           id: 68,
//           project_name: '者只天每得',
//           project_name_english: '地南众',
//           summary: 'occaecat incididunt aute voluptate nostrud',
//           tag: [
//             'ut elit'
//           ],
//           list_image_path: 'http://dummyimage.com/400x400',
//           project_type: 1,
//           customer_name: '切内打加状',
//           industry_type: 'in consectetur esse',
//           start_time: '2007-11',
//           domin_name: '引将量也',
//           up_banner_image_path: 'http://dummyimage.com/400x400',
//           primary_color: 'irure ex sint',
//           secondary_color: 'ipsum deserunt',
//           project_goals: 'elit aute Lorem',
//           content_image_path: 'http://dummyimage.com/400x400',
//           design_execution: 'nostrud veniam officia',
//           lower_banner_image_path: 'http://dummyimage.com/400x400',
//           multi_image_path: [
//             'http://dummyimage.com/400x400'
//           ],
//           publish_start_time: '1994-04-03 12:12:12',
//           unpublish_time: '1991-11-09 12:12:12',
//           is_publish: false,
//           last_modified_man: {
//             admin_id: 95,
//             english_name: '目清间管'
//           },
//           updated_at: '2007-01-06 15:50:24'
//         }
//       ],
//       total: 99
//     };
//     setTimeout(() => { resolve(res); }, 100);
//   });
// };

