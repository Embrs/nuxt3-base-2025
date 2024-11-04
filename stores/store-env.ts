// 環境變數
export const StoreEnv = defineStore('StoreEnv', () => {
  const env = useState('StoreEnv-env', () => ({}));

  /** 初始化 */
  const Init = () => {
    if (import.meta.server) {
      const runtimeConfig = useRuntimeConfig();
      env.value = runtimeConfig;
    }
  };
  return { Init, env };
});
