// https://nuxt.com/docs/api/configuration/nuxt-config
import version from './version';

// ===============================================================================
export default defineNuxtConfig({
  compatibilityDate: '2025-06-26',
  devtools: { enabled: false },

  // 模塊注入
  modules: [
    // https://github.com/nuxt-modules/stylelint
    '@nuxtjs/stylelint-module',
    // https://pinia.vuejs.org/ssr/nuxt.html
    '@pinia/nuxt',
    // https://nuxt.com/modules/pinia-plugin-persistedstate#pinia-plugin-persistedstate
    'pinia-plugin-persistedstate/nuxt',
    // https://nuxt.com/modules/icon
    '@nuxt/icon',
    // https://nuxt.com/modules/i18n
    '@nuxtjs/i18n',
    // https://color-mode.nuxtjs.org/?utm_source=nuxt.com&utm_medium=aside-module&utm_campaign=nuxt.com
    '@nuxtjs/color-mode',
    // https://fonts.nuxt.com/get-started/installation
    '@nuxt/fonts'
  ],
  devServer: {
    // port: Number(process.env.NUXT_PORT || 3001),
    // host: process.env.NUXT_HOST || '0.0.0.0'
    // https: { // Nuxt3Https 模式
    //   key: './https/localhost.key',
    //   cert: './https/localhost.crt'
    // }
  },

  // colorMode 主題色 ---------------------------------------------------
  colorMode: {
    classSuffix: ''
  },
  // 多語系 -------------------------------------------------------------
  i18n: {
    strategy: 'prefix_except_default',
    langDir: 'locales',
    defaultLocale: 'zh',
    baseUrl: `${process.env.NUXT_DOMAIN_URL}`,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      redirectOn: 'root'
    },
    lazy: true,
    // // 對照表: https://zh.wikipedia.org/wiki/%E5%8C%BA%E5%9F%9F%E8%AE%BE%E7%BD%AE#%E5%88%97%E8%A1%A8
    locales: [
      { code: 'zh', language: 'zh-Hant-TW', file: 'zh.js', name: '繁體中文' },
      { code: 'cn', language: 'zh-Hans-CN', file: 'cn.js', name: '简体中文' },
      { code: 'en', language: 'en', file: 'en.js', name: 'English' },
      { code: 'ja', language: 'ja', file: 'ja.js', name: '日本語' }
    ],
    bundle: {
      optimizeTranslationDirective: false
    }
  },
  // env 環境變數 -------------------------------------------------------
  runtimeConfig: {
    apiBase: '',
    public: {
      test: ''
    }
  },

  // icon --------------------------------------------------------------
  icon: {
    componentName: 'NuxtIcon',
    customCollections: [
      {
        prefix: 'my-icon',
        dir: 'assets/icons'
      }
    ],
    // https://github.com/nuxt/icon?tab=readme-ov-file#client-bundle
    clientBundle: {
      // 要包含在客戶端包中的圖示列表
      icons: [
        // 'material-symbols'
      ],
      scan: true, // 掃描項目中的所有組件並包括圖標
      includeCustomCollections: true, // 將所有自訂集合包含在客戶端捆綁包中
      sizeLimitKb: 256 // 保護未壓縮的套件大小，如果超過則建置失敗
    }
  },
  // font --------------------------------------------------------------
  // https://nuxt.dev.org.tw/modules/fonts
  fonts: { // 自動會抓不用設定
    families: [
      // { name: 'Noto Sans TC', provider: 'google' },
    ]
  },
  // 組件配置 -----------------------------------------------------------
  components: {
    dirs: [
      {
        path: '~/components',
        global: true,
        ignore: ['**/*.{md,ts,js,mjs,mts}']
      }
    ]
  },

  // 全局範圍設定 composables utils 為預設 --------------------------------
  imports: {
    dirs: [
      'stores', // pinia
      'composables/**', // composables
      'utils/*/index.{ts,js,mjs,mts}' // utils
    ]
  },

  // html params -------------------------------------------------------
  app: {
    // baseURL: '/',
    buildAssetsDir: '/static/',
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    // meta
    head: {
      htmlAttrs: {
        lang: 'zh-Hant-TW',
        // @ts-ignore
        version
      },
      meta: [
        { name: 'format-detection', content: 'telephone=no,email=no,adress=no' } // 去除擾人自動偵測
      ]
    }
  },

  // style -------------------------------------------------------------
  css: ['@/assets/styles/css/index.css'],
  stylelint: {
    lintOnStart: false, // 專案啟動時不自動檢查所有相關檔案
    chokidar: true // 監聽文件異動進行檢核（文件未列出此選項）
  },

  // Nitro server ------------------------------------------------------
  nitro: {
    compressPublicAssets: {
      gzip: true
    },
    // 開發模式戶端代理
    devProxy: {
      '/apiurl': {
        target: `${process.env.NUXT_API_BASE as string}/api`, // 這裡是接口地址
        changeOrigin: true,
        prependPath: true
      }
    },
    // Nuxt route 路由設定 ------------
    // https://nuxt.com/docs/guide/concepts/rendering#route-rules
    routeRules: {
      // '/api/**': { // 自訂反向代理
      //   proxy: `${process.env.NUXT_API_BASE as string}/api/**`
      // }
    }
  },

  // Vite ------------------------------------------------------------------
  vite: {
    css: {
      preprocessorOptions: {
        scss: { // scss 配置
          silenceDeprecations: ['legacy-js-api'],
          additionalData: `
            @use '@/assets/styles/scss/colors.scss' as *;
          `,
          quietDeps: true // 關閉警告
        }
      }
    }
  }
});
