// 搭配 assets/styles/css/_theme.css

export const StoreTheme = defineStore('StoreTheme', () => {
  const colorMode = useColorMode();
  const ChangeTheme = (theme: ThemeType) => {
    colorMode.preference = theme;
  };

  // -----------------------------------------------------------------------------------------------
  return {
    ChangeTheme
  };
});
