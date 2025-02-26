let storeAuth: ReturnType<typeof StoreAuth>;
let isNuxtReady = false;

onNuxtReady(() => {
  isNuxtReady = true;
  storeAuth = StoreAuth();
});

// 取得 token
const token = computed(() => isNuxtReady ? storeAuth?.token || '' : '');

// 登出
const SignOut = () => {
  const localePath = useLocalePath(); // 語系路徑
  setTimeout(() => {
    navigateTo(localePath('/sign-in'));
  }, 1000);
};

// 取得 Api url
const GetApiUrl = () => {
  if (import.meta.server) {
    // 添加 apiUrl,nuxt3 環境變量要從 useRuntimeConfig 裡面取
    const { apiBase } = useRuntimeConfig();
    return apiBase;
  }
  return '';
};

// 回傳調整
const FilterRes = (response: any, errCode = 9999) => {
  const r = response?._data;
  const _res = { data: {}, status: { code: errCode, message: { zh_tw: '', en: '', ja: '' } } };
  if (r?.data) _res.data = r?.data;
  if (r?.status) _res.status = r?.status;
  return _res as ApiRes<any>;
};

// 預設請求
const Fetch = (url: string, option: AnyObject) => {
  try {
    return $fetch(
      `${url}?t=${Date.now()}`, // 加入 [?t] 避免 api 快取
      {
        // 參數
        ...option,

        // 請求攔截器
        onRequest ({ options }) {
          options.baseURL = GetApiUrl();
          options.headers = new Headers(options.headers);
          options.headers.set('Authorization', `Bearer ${token.value}`);
        },

        // 響應攔截
        onResponse ({ response }) {
          const _res = FilterRes(response, 9997);

          // TODO 確認登出情境
          // SignOut();
          return Promise.reject(_res);
        },

        // 錯誤處理
        onResponseError ({ response }) {
          const _res = FilterRes(response, 9998);
          return Promise.reject(_res);
        }
      }
    );
  } catch (_err) {
    const _res = FilterRes({}, 9999);
    return Promise.reject(_res);
  }
};

// 自動導出
export default {
  /** 取得  */
  get: <T>(url: string, query: AnyObject = {}) =>
    Fetch(url, { method: 'get', query }).catch((err) => err) as Promise<ApiRes<T>>,

  /** 建立 */
  post: <T>(url: string, body: AnyObject = {}) =>
    Fetch(url, { method: 'post', body }).catch((err) => err) as Promise<ApiRes<T>>,

  /** 單一編輯 */
  patch: <T>(url: string, body: AnyObject = {}) =>
    Fetch(url, { method: 'patch', body }).catch((err) => err) as Promise<ApiRes<T>>,

  /** 更新 */
  put: <T>(url: string, body: AnyObject = {}) =>
    Fetch(url, { method: 'put', body }).catch((err) => err) as Promise<ApiRes<T>>,

  /** 刪除 */
  delete: <T>(url: string, query: AnyObject = {}) =>
    Fetch(url, { method: 'delete', query }).catch((err) => err) as Promise<ApiRes<T>>,

  /** 檔案上傳 */
  fileUpload: <T>(url: string, body: AnyObject = {}) =>
    Fetch(url, { method: 'post', body: tool.ToFormData(body) }).catch((err) => err) as Promise<ApiRes<T>>,

  /** 檔案下載 */
  fileDownload: <T>(url: string, body: AnyObject = {}) =>
    Fetch(url, { method: 'get', body: tool.ToFormData(body) }).catch((err) => err) as Promise<ApiRes<T>>,

  /** 檔案上傳(進度條) */
  xhrFileUpload: <T>(url: string, body: AnyObject = {}, progressObj: FileProgress): Promise<ApiRes<T>> => {
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable && e.total > 0) progressObj['upload'] = Math.floor((e.loaded / e.total) * 100);
      });
      xhr.addEventListener('progress', (e) => {
        if (e.lengthComputable && e.total > 0) progressObj['download'] = Math.floor((e.loaded / e.total) * 100);
      });
      xhr.addEventListener('loadend', (e: any) => {
        let _res: ApiRes<T> = JSON.parse(e?.currentTarget?.responseText || '') || {};
        _res = FilterRes({ _data: _res }, 9996);
        resolve(_res);
      });
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Authorization', `Bearer ${token.value}`);
      xhr.send(tool.ToFormData(body));
    });
  }
};
