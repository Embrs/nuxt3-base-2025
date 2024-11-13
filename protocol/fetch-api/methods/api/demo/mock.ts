import cloneDeep from 'lodash/cloneDeep';
// mock 回傳調整
const basic: DefaultRes = {
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
