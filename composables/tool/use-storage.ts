// localstorage 版 useCookie
export const UseStorage = <T>(
  key: string,
  defaultValue: T,
  options?: {
    useHash?: boolean
  }
) => {
  const isServer = import.meta.server;
  const useHash = options?.useHash ?? true;

  const _data = ref<T>(defaultValue);
  const data = computed({
    get () { return _data.value; },
    set (val: T) { Save(val); }
  });

  const Init = () => {
    if (isServer) return;
    const stored = $storage.Get(key, useHash);
    if (stored !== undefined) _data.value = stored;
  };

  const Save = (val: T) => {
    if (isServer) return;
    _data.value = val;
    $storage.Set(key, val, useHash);
  };

  // const Remove = () => {
  //   if (isServer) return;
  //   $storage.Remove(key, useHash);
  // };

  Init();

  return data;
};
