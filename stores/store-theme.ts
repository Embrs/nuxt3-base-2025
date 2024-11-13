// 搭配 assets/styles/css/_theme.css
export interface ColorMap {
  [key: string]: string;
}
export const StoreTheme = pinia.defineStore('StoreTheme', () => {
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

/* 其他寫法
  onMounted(() => {
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    ColorSchemeChangeHandler(colorSchemeQuery);
  });

  const ColorSchemeChangeHandler = (event: any) => {
    console.log(event);
    if (event.matches) {
      // 當前顏色方案是暗色（dark）
      ChangeTheme('dark');
    } else {
      // 當前顏色方案是亮色（light）
      ChangeTheme('light');
    }
  };

  const ChangeTheme = (theme: 'dark' | 'light') => {
    if (!document) return;
    const html: any = document.querySelector('html');
    if (!html) return;

    switch (theme) {
      case 'dark':
        html.style['color-scheme'] = 'dark';
        html.setAttribute('theme', 'dark');
        break;
      case 'light':
        html.style['color-scheme'] = 'light';
        html.setAttribute('theme', 'light');
        break;
      default:
        html.style['color-scheme'] = '';
        html.removeAttribute('theme');
        break;
    }
  };
  :root {
    --color-background: #fff;
  }

  :root[theme="dark"]  {
    --color-background: #181818;
  }
*/