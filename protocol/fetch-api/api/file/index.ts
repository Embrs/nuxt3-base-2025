import * as mock from './mock';
import methods from '@/protocol/fetch-api/methods';
const IsMock = () => {
  return true;
};

// -----------------------------------------------------------------------------------------------
const router = {
  UPLOAD_IMAGE: '/apiurl/upload/image' // 上傳圖片

};

// -----------------------------------------------------------------------------------------------

/** 上傳圖片 */
export const UploadImage = (params: UploadImageParams) => {
  if (IsMock()) return mock.UploadImage(); // Mock
  return methods.fileUpload(router.UPLOAD_IMAGE, params) as Promise<UploadImageRes>;
};

/** 上傳圖片(進度條版) */
export const UploadImageProgress = (params: UploadImageParams, progressObj: FileProgress) => {
  if (IsMock()) return mock.UploadImage(); // Mock
  return methods.xhrFileUpload(router.UPLOAD_IMAGE, params, progressObj) as Promise<UploadImageRes>;
};
