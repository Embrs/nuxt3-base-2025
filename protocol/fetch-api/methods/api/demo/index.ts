import { methods } from '../../setting';
import * as mock from './mock';
const IsMock = () => {
  // const { public: { testMode } } = useRuntimeConfig();
  // return testMode === 'T';
  return true;
};

// -----------------------------------------------------------------------------------------------
const router = {
  TEST: '/api/user/login', // Test
  SING_IN: '/api/adminAuth/logIn', // 管理員登入
  SIGN_OUT: '/api/adminAuth/logOut', // 管理員登出
  CREATE_STAFF: '/api/admin/register', // 管理員建立
  UPDATE_STAFF: '/api/admin/id/{adminId}', // 管理員修改
  GET_STAFF_INFO: '/api/admin/id/{adminId}', // 管理員詳細資料
  DELETE_STAFF: '/api/admin/id/{adminId}', // 管理員刪除
  GET_STAFF_LIST: '/api/admin', // 管理員列表
  RESET_CURRENT_STAFF_PASSWORD: '/api/admin/resetPassword', // 重設當下管理員密碼
  CHECK_SIGN_IN: '/api/adminAuth/check/permission', // 確認登入狀態
  GET_CURRENT_STAFF_INFO: '/api/admin/current/info', // 取得當下管理員資料

  CREATE_DISCUSSION: '/api/capstoneProject', // 專題研討建立
  DELETE_DISCUSSION: '/api/capstoneProject/id/{capstoneProjectId}', // 專題研討刪除
  PUT_DISCUSSION: '/api/capstoneProject/id/{capstoneProjectId}', // 專題研討修改
  GET_DISCUSSION: '/api/capstoneProject/id/{capstoneProjectId}', // 專題研討詳細資料
  GET_DISCUSSION_LIST: '/api/capstoneProject', // 專題研討列表

  UPLOAD_IMAGE: '/api/upload/image', // 上傳圖片

  UPDATE_STAFF_RULE: '/api/permission/id/{adminId}', // 權限修改
  GET_STAFF_RULE: '/api/permission/id/{adminId}', // 取得管理員權限
  GET_CURRENT_STAFF_RULE: '/api/permission/', // 取得當下管理員權限

  CREATE_PROJECT: '/api/portfolio', // 專案案例建立
  DELETE_PROJECT: '/api/portfolio/id/{portfolioId}', // 專案案例刪除
  PUT_PROJECT: '/api/portfolio/id/{portfolioId}', // 專案案例修改
  GET_PROJECT: '/api/portfolio/id/{portfolioId}', // 專案案例詳細資料
  GET_PROJECT_LIST: '/api/portfolio' // 專案案例列表
};
// -----------------------------------------------------------------------------------------------
/** Test */
export const Test = (params: any): Promise<any> => {
  return methods.post(router.TEST, params) as Promise<any>;
};
/** 登入 */
export const SignIn = (params: SignInParams): Promise<SignInRes> => {
  if (IsMock()) return mock.SING_IN(); // Mock
  return methods.post(router.SING_IN, params) as Promise<SignInRes>;
};

/** 登出 */
export const SignOut = (): Promise<DefaultRes> => {
  if (IsMock()) return mock.DEFAULT(); // Mock
  return methods.post(router.SIGN_OUT) as Promise<DefaultRes>;
};

/** 管理員建立 */
export const CreateStaff = (params: CreateStaffParams): Promise<CreateStaffRes> => {
  if (IsMock()) return mock.CREATE_STAFF(); // Mock
  return methods.post(router.CREATE_STAFF, params) as Promise<CreateStaffRes>;
};

/** 管理員修改 */
export const UpdateStaff = (adminId: number, params: UpdateStaffParams): Promise<DefaultRes> => {
  if (IsMock()) return mock.DEFAULT(); // Mock
  return methods.put(router.UPDATE_STAFF.replace('{adminId}', `${adminId}`), params) as Promise<DefaultRes>;
};

/** 管理員詳細資料 */
export const GetStaffInfo = (adminId: number): Promise<GetStaffInfoRes> => {
  if (IsMock()) return mock.GET_STAFF_INFO(); // Mock
  return methods.get(router.GET_STAFF_INFO.replace('{adminId}', `${adminId}`)) as Promise<GetStaffInfoRes>;
};

/** 管理員刪除 */
export const DeleteStaff = (adminId: number): Promise<DefaultRes> => {
  if (IsMock()) return mock.DEFAULT(); // Mock
  return methods.delete(router.DELETE_STAFF.replace('{adminId}', `${adminId}`)) as Promise<DefaultRes>;
};

/** 管理員列表 */
export const GetStaffList = (params: GetStaffListParams): Promise<GetStaffListRes> => {
  if (IsMock()) return mock.GET_STAFF_LIST(); // Mock
  return methods.get(router.GET_STAFF_LIST, params) as Promise<GetStaffListRes>;
};

/** 重設當下管理員密碼 */
export const ResetCurrentStaffPassword = (params: ResetCurrentStaffPasswordParams): Promise<DefaultRes> => {
  if (IsMock()) return mock.DEFAULT(); // Mock
  return methods.patch(router.RESET_CURRENT_STAFF_PASSWORD, params) as Promise<DefaultRes>;
};

/** 確認登入狀態 */
export const CheckSignIn = (): Promise<CheckSignIntRes> => {
  if (IsMock()) return mock.CHECK_SIGN_IN(); // Mock
  return methods.get(router.CHECK_SIGN_IN) as Promise<CheckSignIntRes>;
};

/** 取得當下管理員資料 */
export const GetCurrentStaffInfo = (): Promise<GetCurrentStaffInfoRes> => {
  if (IsMock()) return mock.GET_CURRENT_STAFF_INFO(); // Mock
  return methods.get(router.GET_CURRENT_STAFF_INFO) as Promise<GetCurrentStaffInfoRes>;
};

// -----------------------------------------------------------------------------------------------
/** 專題研討建立 */
export const CreateDiscussion = (params: CreateDiscussionParams): Promise<CreateDiscussionRes> => {
  if (IsMock()) return mock.CREATE_DISCUSSION(); // Mock
  return methods.post(router.CREATE_DISCUSSION, params) as Promise<CreateDiscussionRes>;
};

/** 專題研討刪除 */
export const DeleteDiscussion = (capstoneProjectId: number): Promise<DefaultRes> => {
  if (IsMock()) return mock.DEFAULT(); // Mock
  return methods.delete(router.DELETE_DISCUSSION.replace('{capstoneProjectId}', `${capstoneProjectId}`)) as Promise<DefaultRes>;
};

/** 專題研討修改 */
export const UpdateDiscussion = (capstoneProjectId: number, params: UpdateDiscussionParams): Promise<DefaultRes> => {
  if (IsMock()) return mock.DEFAULT(); // Mock
  return methods.put(router.PUT_DISCUSSION.replace('{capstoneProjectId}', `${capstoneProjectId}`), params) as Promise<DefaultRes>;
};

/** 專題研討詳細資料 */
export const GetDiscussion = (capstoneProjectId: number): Promise<GetDiscussionRes> => {
  if (IsMock()) return mock.GET_DISCUSSION(); // Mock
  return methods.get(router.GET_DISCUSSION.replace('{capstoneProjectId}', `${capstoneProjectId}`)) as Promise<GetDiscussionRes>;
};

/** 專題研討列表 */
export const GetDiscussionList = (params: GetDiscussionListParams): Promise<GetDiscussionListRes> => {
  if (IsMock()) return mock.GET_DISCUSSION_LIST(); // Mock
  return methods.get(router.GET_DISCUSSION_LIST, params) as Promise<GetDiscussionListRes>;
};

// -----------------------------------------------------------------------------------------------

/** 上傳圖片 */
export const UploadImage = (params: UploadImageParams): Promise<UploadImageRes> => {
  if (IsMock()) return mock.UPLOAD_IMAGE(); // Mock
  console.log(params);
  return methods.filePost(router.UPLOAD_IMAGE, params) as Promise<UploadImageRes>;
};

/** 上傳圖片(進度條版) */
export const UploadImageProgress = (params: UploadImageParams, progressObj: FileProgress): Promise<UploadImageRes> => {
  if (IsMock()) return mock.UPLOAD_IMAGE(); // Mock
  console.log(params);
  return methods.progressFilePost(router.UPLOAD_IMAGE, params, progressObj) as Promise<UploadImageRes>;
};

// -----------------------------------------------------------------------------------------------

/** 權限修改 */
export const UpdateStaffRule = (adminId: number, params: UpdateStaffRuleParams): Promise<DefaultRes> => {
  if (IsMock()) return mock.DEFAULT(); // Mock
  return methods.put(router.UPDATE_STAFF_RULE.replace('{adminId}', `${adminId}`), params) as Promise<DefaultRes>;
};

/** 取得管理員權限 */
export const GetStaffRule = (adminId: number): Promise<GetStaffRuleRes> => {
  if (IsMock()) return mock.GET_STAFF_RULE(); // Mock
  return methods.get(router.GET_STAFF_RULE.replace('{adminId}', `${adminId}`)) as Promise<GetStaffRuleRes>;
};

/** 取得當下管理員權限 */
export const GetCurrentStaffRule = (): Promise<GetCurrentStaffRuleRes> => {
  if (IsMock()) return mock.GET_CURRENT_STAFF_RULE(); // Mock
  return methods.get(router.GET_CURRENT_STAFF_RULE) as Promise<GetCurrentStaffRuleRes>;
};

// -----------------------------------------------------------------------------------------------
/** 專案案例建立 */
export const CreateProject = (params: CreateProjectParams): Promise<CreateProjectRes> => {
  if (IsMock()) return mock.CREATE_PROJECT(); // Mock
  return methods.post(router.CREATE_PROJECT, params) as Promise<CreateProjectRes>;
};

/** 專案案例刪除 */
export const DeleteProject = (portfolioId: number): Promise<DefaultRes> => {
  if (IsMock()) return mock.DEFAULT(); // Mock
  return methods.delete(router.DELETE_PROJECT.replace('{portfolioId}', `${portfolioId}`)) as Promise<DefaultRes>;
};

/** 專案案例修改 */
export const UpdateProject = (portfolioId: number, params: UpdateProjectParams): Promise<DefaultRes> => {
  if (IsMock()) return mock.DEFAULT(); // Mock
  return methods.put(router.PUT_PROJECT.replace('{portfolioId}', `${portfolioId}`), params) as Promise<DefaultRes>;
};

/** 專案案例詳細資料 */
export const GetProject = (portfolioId: number): Promise<GetProjectRes> => {
  if (IsMock()) return mock.GET_PROJECT(); // Mock
  return methods.get(router.GET_PROJECT.replace('{portfolioId}', `${portfolioId}`)) as Promise<GetProjectRes>;
};

/** 專案案例列表 */
export const GetProjectList = (params: GetProjectListParams): Promise<GetProjectListRes> => {
  if (IsMock()) return mock.GET_PROJECT_LIST(); // Mock
  return methods.get(router.GET_PROJECT_LIST, params) as Promise<GetProjectListRes>;
};
