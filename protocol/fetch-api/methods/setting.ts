let storeAuth: ReturnType<typeof StoreAuth> | null = null;
let isNuxtReady = false;

onNuxtReady(() => {
  isNuxtReady = true;
  storeAuth = StoreAuth();
});

// 預設錯誤回傳訊息
const defErr: DefaultRes = Object.freeze({
  data: null,
  status: {
    is_success: false,
    message: '未知異常',
    httpStatus: 999
  }
});

// 登出
const SignOut = () => {
  const $router = useRouter(); // 路由
  const localePath = useLocalePath(); // 語系路徑

  setTimeout(() => {
    $router.push((localePath('/sign-in')));
  }, 1000);
};

// 取得 api url
const GetApiUrl = () => {
  if (import.meta.server) {
    // 添加 apiUrl,nuxt3 環境變量要從useRuntimeConfig裡面取
    const { apiBase } = useRuntimeConfig();
    return apiBase;
  }
  return '';
};

// 預設請求
const Fetch = (url: string, option: AnyObject, downloadFile: boolean = false) => {
  const token = isNuxtReady ? storeAuth.token : '';
  // 加入 ?t 避免 api 快取
  return $fetch(`${url}?t=${Date.now()}`, {
    ...option,

    // 請求攔截器
    onRequest ({ options }) {
      options.baseURL = GetApiUrl();
      options.headers = new Headers(options.headers);
      options.headers.set('Authorization', `Bearer ${token}`);
    },

    // 響應攔截
    onResponse ({ response }) {
      let _res: DefaultRes = response._data;
      if (!_res?.status) {
        if (!downloadFile) {
          _res = lodash.cloneDeep(defErr);
        }
        if (downloadFile) {
          _res = {
            data: response._data,
            status: {
              is_success: true,
              message: ''
            }
          };
        }
      }

      _res.status.httpStatus = response.status;

      // TODO 確認登出情境
      if (['未登入'].includes(_res?.status?.message || '')) {
        SignOut();
      }
      return Promise.reject(_res);
    },

    // 錯誤處理
    onResponseError ({ response }) {
      // 異常處理
      const _res: DefaultRes = (response?._data?.status) ? response._data : lodash.cloneDeep(defErr);
      _res.status.is_success = false;
      _res.status.httpStatus = response.status;
      SignOut();
      return Promise.reject(_res);
    }
  });
};

// 自動導出
export const methods = {
  // 取得
  get: (url: string, query: AnyObject = {}) => {
    return Fetch(url, { method: 'get', query }).catch((err) => err);
  },

  // 建立
  post: (url: string, body: AnyObject = {}) => {
    return Fetch(url, { method: 'post', body }).catch((err) => err);
  },

  // 單一編輯
  patch: (url: string, body: AnyObject = {}) => {
    return Fetch(url, { method: 'patch', body }).catch((err) => err);
  },

  // 更新
  put: (url: string, body: AnyObject = {}) => {
    return Fetch(url, { method: 'put', body }).catch((err) => err);
  },

  // 刪除
  delete: (url: string, query: AnyObject = {}) => {
    return Fetch(url, { method: 'delete', query }).catch((err) => err);
  },

  // 檔案上傳
  filePost: (url: string, body: AnyObject = {}) => {
    return Fetch(url, { method: 'post', body: tool.ToFormData(body) }).catch((err) => err);
  },

  // 檔案下載
  downloadGet: (url: string, body: AnyObject = {}) => {
    return Fetch(url, { method: 'get', body: tool.ToFormData(body) }, true).catch((err) => err);
  },

  // 檔案上傳(進度條)
  progressFilePost: (url: string, body: AnyObject = {}, progressObj: FileProgress) => {
    const token = isNuxtReady ? storeAuth.token : '';
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable && e.total > 0) progressObj['upload'] = Math.floor((e.loaded / e.total) * 100);
      });
      xhr.addEventListener('progress', (e) => {
        if (e.lengthComputable && e.total > 0) progressObj['download'] = Math.floor((e.loaded / e.total) * 100);
      });
      xhr.addEventListener('loadend', (e: any) => {
        let _res: DefaultRes = JSON.parse(e?.currentTarget?.responseText || '');
        _res = _res?.status ? _res : lodash.cloneDeep(defErr);
        resolve(_res);
      });
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
      xhr.send(tool.ToFormData(body));
    });
  }
};
