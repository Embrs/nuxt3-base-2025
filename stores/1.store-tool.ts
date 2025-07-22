export const StoreTool = defineStore('StoreTool', () => {
  // 寬度 RWD 資訊 --------------------------------
  const pcSize = 1024;
  const pcMidMax = 1440;
  /* 上次 scrolltop 的值 */
  let _lastScrollTopVal = 0;
  /* scrolltop 的值 */
  const scrollTopVal = ref(0);
  const windowWidth = ref<number>(pcSize);
  /* 是行動端 */
  const isMobileDevice = ref(true);
  /* 使用 line 瀏覽器 */
  const isLineBrowserDevice = ref(false);
  /* > 1024px */
  const isPc = computed(() => windowWidth.value >= pcSize);
  /* 1024px ~ 1440px */
  const isMidPc = computed(() => windowWidth.value >= pcSize && windowWidth.value <= pcMidMax);
  /* < 1024px */
  const isMobile = computed(() => windowWidth.value < pcSize);
  /** menu 開關 */
  const isMenuOpen = ref(false);
  /** 背景尺寸 */
  const bgmLayoutZoom = ref(1);
  const bgmLayoutWidth = ref(0);
  const bgmLayoutHeight = ref(0);
  /* 滾動方向(px) */
  const scrollUpDown = ref<-1 | 0 | 1>(0); // -1 up, 0:no scroll, 1: down // 滾動方向(px)

  /* 目前網址 */
  const currentUrl = computed(() => {
    if (import.meta.server) return '';
    return window.location.href;
  });

  /* 設定裝置 */
  const SetDevice = () => {
    if (import.meta.client) {
      const userAgent = navigator.userAgent;
      isMobileDevice.value = !!(userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      ));
      isLineBrowserDevice.value = /line/i.test(userAgent);
    }
  };

  // 設定寬度
  const SetWindowWidth = () => {
    if (import.meta.client) {
      const { innerWidth: width } = window;
      windowWidth.value = width;
    }
  };

  // 畫面滾動
  const SetWindowScroll = $lodash.throttle(() => {
    const _scrollTop = document.querySelector('html')?.scrollTop || 0;
    scrollTopVal.value = _scrollTop;
    // 滾動方向
    scrollUpDown.value = (_scrollTop - _lastScrollTopVal) > 0 ? 1 : -1;
    RecoverScrollUpDown();
    _lastScrollTopVal = _scrollTop;
  }, 200);

  // 恢復方向
  const RecoverScrollUpDown = $lodash.debounce(() => {
    scrollUpDown.value = 0;
  }, 300);

  /* 設定後臺尺寸 */
  const SetBgmSize = () => {
    console.log('SetBgmSize');
    isMenuOpen.value = false;
    if (import.meta.server) return;
    const elLayout = document.querySelector('.LayoutBgm');
    if (!elLayout) return;
    bgmLayoutWidth.value = elLayout?.clientWidth || 0;
    bgmLayoutHeight.value = elLayout?.clientHeight || 0;
  };
  return {
    isPc,
    isMidPc,
    isMobile,
    isMobileDevice,
    isLineBrowserDevice,
    windowWidth,
    /** menu 開關 */
    isMenuOpen,
    bgmLayoutZoom,
    bgmLayoutWidth,
    bgmLayoutHeight,
    scrollTopVal,
    currentUrl,
    scrollUpDown,
    SetDevice,
    SetWindowWidth,
    SetWindowScroll,
    SetBgmSize
  };
});
