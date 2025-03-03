import * as mock from './mock';
import methods from '@/protocol/fetch-api/methods';

const IsMock = () => {
  const { public: { testMode } } = useRuntimeConfig();
  return testMode === 'T';
};

// -----------------------------------------------------------------------------------------------

/** 上傳圖片 */
export const UploadImage = (params: UploadImageParams) => {
  if (IsMock()) return mock.UploadImage(); // Mock
  return methods.fileUpload<UploadImageRes>('/apiurl/upload/image', params);
};

/** 上傳圖片(進度條版) */
export const UploadImageProgress = (params: UploadImageParams, progressObj: FileProgress) => {
  if (IsMock()) return mock.UploadImage(); // Mock
  return methods.xhrFileUpload<UploadImageRes>('/apiurl/upload/image', params, progressObj);
};
