// mock 回傳調整
const CreateRes = <T>(data: T) => new Promise<ApiRes<T>>((resolve) => {
  const res = { data, status: { code: 0, message: { zh_tw: '', en: '', ja: '' } } } as ApiRes<T>;
  setTimeout(() => { resolve(res); }, 100);
});

// 預設回傳 -------------------------------------------------------------------------------------------------
export const Default = () => CreateRes({});

// -------------------------------------------------------------------------------------------------
// 上傳圖片
export const UploadImage = () => {
  const data = {
    image_url: 'https://aahslda.org/images/librariesprovider2/images/lp/testing-and-evaluation-istock-495639272-compressor.jpg?sfvrsn=d82ef5d1_2'
  };
  return CreateRes(data);
};
