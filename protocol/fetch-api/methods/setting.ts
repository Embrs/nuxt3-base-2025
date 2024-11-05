// import cloneDeep from 'lodash/cloneDeep';
// import tool from '@/utils/tool';
const defErr: DefaultRes = Object.freeze({
  data: null,
  status: {
    is_success: false,
    message: '未知異常',
    httpStatus: 999
  }
});

const GetApiUrl = () => {
  if (import.meta.server) {
    // 添加 apiUrl,nuxt3 環境變量要從useRuntimeConfig裡面取
    const { apiBase } = useRuntimeConfig();
    return apiBase;
  }
  return '';
};

const Fetch = (url: string, option: AnyObject, downloadFile: boolean = false) => {
  const storeUser = StoreUser();
  // const router = useRouter();
  return $fetch(`${url}?t=${Date.now()}`, {
    // 合併參數
    ...option,
    // 請求攔截器
    onRequest ({ options }) {
      options.baseURL = GetApiUrl();
      options.headers = new Headers(options.headers);
      options.headers.set('Authorization', `Bearer ${storeUser.token}`);
    },

    // 響應攔截
    onResponse ({ response }) {
      let _res: DefaultRes = response._data;
      if (!_res?.status) {
        if (!downloadFile) {
          _res = defErr;
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
      if (['未登入'].includes(_res?.status?.message || '')) {
        setTimeout(() => {
          // router.push('/sign-in');
        }, 1000);
      }
      return Promise.reject(_res);
    },

    // 錯誤處理
    onResponseError ({ response }) {
      // TODO 異常處理
      const _res: DefaultRes =
        response?._data?.status
          ? response._data
          : defErr;
      _res.status.is_success = false;
      _res.status.httpStatus = response.status;
      if (['未登入'].includes(_res?.status?.message || '')) {
        setTimeout(() => {
          // router.push('/sign-in');
        }, 1000);
      }
      return Promise.reject(_res);
    }
  });
};

// 自動導出
export const methods = {
  get: (url: string, query: AnyObject = {}) => {
    return Fetch(url, { method: 'get', query }).catch((err) => err);
  },

  post: (url: string, body: AnyObject = {}) => {
    return Fetch(url, { method: 'post', body }).catch((err) => err);
  },

  patch: (url: string, body: AnyObject = {}) => {
    return Fetch(url, { method: 'patch', body }).catch((err) => err);
  },

  put: (url: string, body: AnyObject = {}) => {
    return Fetch(url, { method: 'put', body }).catch((err) => err);
  },

  delete: (url: string, query: AnyObject = {}) => {
    return Fetch(url, { method: 'delete', query }).catch((err) => err);
  },

  filePost: (url: string, body: AnyObject = {}) => {
    return Fetch(url, { method: 'post', body: tool.ToFormData(body) }).catch((err) => err);
  },

  downloadGet: (url: string, body: AnyObject = {}) => {
    return Fetch(url, { method: 'get', body: tool.ToFormData(body) }, true).catch((err) => err);
  },
  // 上傳進度
  progressFilePost: (url: string, body: AnyObject = {}, progressObj: FileProgress) => {
    const storeUser = StoreUser();
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
        _res = _res?.status ? _res : defErr;
        resolve(_res);
      });
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Authorization', `Bearer ${storeUser.token}`);
      xhr.send(tool.ToFormData(body));
    });
  }
};
