// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  // 模塊注入
  modules: [
    '@nuxtjs/stylelint-module', // https://github.com/nuxt-modules/stylelint
    '@pinia/nuxt', // https://pinia.vuejs.org/ssr/nuxt.html
    '@pinia-plugin-persistedstate/nuxt', // https://nuxt.com/modules/pinia-plugin-persistedstate#pinia-plugin-persistedstate
    '@nuxt/icon' // https://google-fonts.nuxtjs.org/getting-started/setup
    // '@element-plus/nuxt', // https://ithelp.ithome.com.tw/articles/10302381
    // '@nuxtjs/device', // https://github.com/nuxt-modules/stylelint
    // '@nuxtjs/color-mode', // https://nuxt.com/modules/icon
    // '@nuxtjs/google-fonts', // https://nuxt.com/modules/unocss

  ],
  devServer: {
    port: Number(process.env.NUXT_PORT || 3001),
    host: process.env.NUXT_HOST || '0.0.0.0'
    // https: { // Nuxt3Https 模式
    //   key: './https/localhost.key',
    //   cert: './https/localhost.crt'
    // }
  },
  // .env setting
  runtimeConfig: {
    testMode: '',
    domainUrl: '',
    apiBase: '',
    public: {
      gtmId: '',
      clarityCode: '',
      test: ''
    }
  },
  // 全局範圍設定 composables utils 為預設
  imports: {
    dirs: [
      'stores' // pinia
    ]
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler' // or "modern"
        }
      }
    }
  }
});
