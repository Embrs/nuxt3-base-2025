import * as mock from './mock';
import methods from '@/protocol/fetch-api/methods';

let isMock = false;
onNuxtReady(() => {
  const { public: { testMode } } = useRuntimeConfig();
  isMock = testMode === 'T';
});

// -----------------------------------------------------------------------------------------------

/** 上傳圖片 */
export const UploadImage = (params: UploadImageParams) => {
  if (isMock) return mock.UploadImage(); // Mock
  return methods.fileUpload<UploadImageRes>('/apiurl/upload/image', params);
};

/** 上傳圖片(進度條版) */
export const UploadImageProgress = (params: UploadImageParams, progressObj: FileProgress) => {
  if (isMock) return mock.UploadImage(); // Mock
  return methods.xhrFileUpload<UploadImageRes>('/apiurl/upload/image', params, progressObj);
};
