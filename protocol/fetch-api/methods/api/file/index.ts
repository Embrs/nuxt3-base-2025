import { methods } from '../../setting';
import * as mock from './mock';
const IsMock = () => {
  return true;
};

// -----------------------------------------------------------------------------------------------
const router = {
  UPLOAD_IMAGE: '/apiurl/upload/image' // 上傳圖片

};

// -----------------------------------------------------------------------------------------------

/** 上傳圖片 */
export const UploadImage = (params: UploadImageParams): Promise<UploadImageRes> => {
  if (IsMock()) return mock.UPLOAD_IMAGE(); // Mock
  return methods.filePost(router.UPLOAD_IMAGE, params) as Promise<UploadImageRes>;
};

/** 上傳圖片(進度條版) */
export const UploadImageProgress = (params: UploadImageParams, progressObj: FileProgress): Promise<UploadImageRes> => {
  if (IsMock()) return mock.UPLOAD_IMAGE(); // Mock
  console.log(params);
  return methods.progressFilePost(router.UPLOAD_IMAGE, params, progressObj) as Promise<UploadImageRes>;
};
