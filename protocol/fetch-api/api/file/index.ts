import * as mock from './mock';
import methods from '@/protocol/fetch-api/methods';
let isMock = false;
onNuxtReady(() => {
  const { public: { testMode } } = useRuntimeConfig();
  isMock = testMode === 'T';
});
// -----------------------------------------------------------------------------------------------
const router = {
  UPLOAD_IMAGE: '/apiurl/upload/image' // 上傳圖片

};

// -----------------------------------------------------------------------------------------------

/** 上傳圖片 */
export const UploadImage = (params: UploadImageParams) => {
  if (isMock) return mock.UploadImage(); // Mock
  return methods.fileUpload(router.UPLOAD_IMAGE, params) as Promise<UploadImageRes>;
};

/** 上傳圖片(進度條版) */
export const UploadImageProgress = (params: UploadImageParams, progressObj: FileProgress) => {
  if (isMock) return mock.UploadImage(); // Mock
  return methods.xhrFileUpload(router.UPLOAD_IMAGE, params, progressObj) as Promise<UploadImageRes>;
};
