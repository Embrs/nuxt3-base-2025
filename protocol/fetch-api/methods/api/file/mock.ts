import cloneDeep from 'lodash/cloneDeep';
// mock 回傳調整
const basic: any = {
  data: null,
  status: {
    is_success: true,
    message: '',
    detail: '',
    httpStatus: 200
  }
};

// 預設回傳 -------------------------------------------------------------------------------------------------
export const DEFAULT = (): Promise<DefaultRes> => {
  return new Promise((resolve) => {
    const res: DefaultRes = cloneDeep(basic);
    setTimeout(() => { resolve(res); }, 100);
  });
};

// 上傳圖片 -------------------------------------------------------------------------------------------------
export const UPLOAD_IMAGE = (): Promise<UploadImageRes> => {
  return new Promise((resolve) => {
    const res: UploadImageRes = cloneDeep(basic);
    res.data = {
      image_url: 'https://aahslda.org/images/librariesprovider2/images/lp/testing-and-evaluation-istock-495639272-compressor.jpg?sfvrsn=d82ef5d1_2'
    };
    setTimeout(() => { resolve(res); }, 100);
  });
};
