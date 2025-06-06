// mock 回傳調整
const CreateRes = <T>(data: T) => new Promise<ApiRes<T>>((resolve) => {
  const res = { data, status: { code: 0, message: { zh_tw: '', en: '', ja: '' } } } as ApiRes<T>;
  setTimeout(() => { resolve(res); }, 100);
});

// 預設回傳 -------------------------------------------------------------------------------------------------
export const Default = () => CreateRes({});
// -------------------------------------------------------------------------------------------------
// 登入
export const SignIn = () => {
  const data: SignInRes = {
    token: 'abc123'
  };
  return CreateRes(data);
};
