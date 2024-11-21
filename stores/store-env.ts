export const StoreEnv = defineStore('StoreEnv', () => {
  const env = ref({
    apiBase: '',
    aesKey: '',
    aesIv: '',
    public: {
      gtmId: '',
      clarityCode: ''
    }
  });

  /** 初始化 */
  const Init = () => {
    if (import.meta.server) {
      const runtimeConfig = useRuntimeConfig();
      env.value = runtimeConfig;
    }
  };
  return { Init, env };
});
