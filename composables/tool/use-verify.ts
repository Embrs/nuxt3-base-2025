// Form 驗證集合
export const UseVerify = () => {
  const { t } = useI18n();
  const enter = computed(() => ({ required: true, message: t('ph.enter'), trigger: 'change' }));
  const select = computed(() => ({ required: true, message: t('ph.select'), trigger: 'change' }));

  return {
    enter,
    select
  };
};
