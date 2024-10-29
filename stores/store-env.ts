export const StoreEnv = defineStore('StoreEnv', () => {
  const env = useState<{[key: string]: any}>('StoreEnv-envObj', () => ({}));

  const Init = () => {
    if (import.meta.server) {
      const runtimeConfig = useRuntimeConfig();
      env.value = runtimeConfig;
    }
  };
  return { Init, env };
});
