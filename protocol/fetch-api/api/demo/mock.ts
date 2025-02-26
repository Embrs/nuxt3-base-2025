// mock 回傳調整
const CreateRes = <T>(data: AnyObject = {}) => (
  { data, status: { code: 0, message: { zh_tw: '', en: '', ja: '' } } } as T
);

export const Default = (): Promise<ApiRes> => new Promise((resolve) => setTimeout(() => { resolve(CreateRes()); }, 100));
