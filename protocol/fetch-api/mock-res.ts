// mock 回傳調整
export const CreateRes = <T>(data: T, wait = 200) => new Promise<ApiRes<T>>((resolve) => {
  const res = { data, status: { code: 0, message: { zh_tw: '', en: '', ja: '' } } } as ApiRes<T>;
  setTimeout(() => { resolve(res); }, wait);
});

// mock Eror回傳調整
export const ErrorRes = <T>(status: ApiRes['status'], wait = 200) => new Promise<ApiRes<T>>((resolve) => {
  const res = { data: {}, status } as ApiRes<T>;
  setTimeout(() => { resolve(res); }, wait);
});
