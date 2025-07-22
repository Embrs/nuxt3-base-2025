// 搭配 assets/styles/css/_theme.css
export interface ColorMap {
  [key: string]: string;
}
export const StoreTheme = defineStore('StoreTheme', () => {
  const colorMode = useColorMode();
  const ChangeTheme = (theme: ThemeType) => {
    colorMode.preference = theme;
  };

  const colors = computed(() => {
    if (colorMode.preference === 'dark') {
      return darkColorsMap;
    }
    return lightColorsMap;
  });

  // 動態主題色配置 ----------------------------------------------------------------------------------
  const lightColorsMap: ColorMap = reactive({
    primaryTest100: '#00ff00'
  });

  // -----------------------------------------
  const darkColorsMap: ColorMap = reactive({
    primaryTest100: '#ff0000'
  });

  // -----------------------------------------------------------------------------------------------
  return {
    ChangeTheme,
    colors,
    lightColorsMap,
    darkColorsMap
  };
});
