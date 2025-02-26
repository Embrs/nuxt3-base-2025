// mock 回傳調整

const CreateRes = <T>(data: AnyObject = {}) => (
  { data, status: { code: 0, message: { zh_tw: '', en: '', ja: '' } } } as T
);

// 預設回傳 -------------------------------------------------------------------------------------------------
export const Default = (): Promise<ApiRes> => new Promise((resolve) => setTimeout(() => { resolve(CreateRes()); }, 100));

export const SignIn = (): Promise<ApiRes<SignInRes>> => new Promise((resolve) => {
  const data = {
    token: ''
  };
  setTimeout(() => { resolve(CreateRes(data)); }, 100);
});
