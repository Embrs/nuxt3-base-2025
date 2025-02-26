// mock 回傳調整
const CreateRes = <T>(data: AnyObject = {}) => (
  { data, status: { code: 0, message: { zh_tw: '', en: '', ja: '' } } } as T
);

export const Default = (): Promise<ApiRes> => new Promise((resolve) => setTimeout(() => { resolve(CreateRes()); }, 100));

// -------------------------------------------------------------------------------------------------
// 上傳圖片
export const UploadImage = (): Promise<ApiRes<UploadImageRes>> => new Promise((resolve) => {
  const data = {
    image_url: 'https://aahslda.org/images/librariesprovider2/images/lp/testing-and-evaluation-istock-495639272-compressor.jpg?sfvrsn=d82ef5d1_2'
  };
  setTimeout(() => { resolve(CreateRes(data)); }, 100);
});
