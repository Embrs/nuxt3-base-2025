// 宣告 const $demo = UseDemo();
import elZh from 'element-plus/es/locale/lang/zh-tw';
import elCn from 'element-plus/es/locale/lang/zh-cn';
import elEn from 'element-plus/es/locale/lang/en';
import elJa from 'element-plus/es/locale/lang/ja';

export const UseElementI18n = () => {
  const { locale } = useI18n();
  const elLocale = computed(() => {
    switch (locale.value) {
      case 'zh': return elZh;
      case 'cn': return elCn;
      case 'en': return elEn;
      case 'ja': return elJa;
    }
    return elZh;
  });

  return {
    elLocale
  };
};
