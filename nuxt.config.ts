// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  // 模塊注入
  modules: [// https://nuxt.com.cn/modules/element-plus
    '@nuxtjs/stylelint-module' // https://color-mode.nuxtjs.org/
    // '@element-plus/nuxt', // https://ithelp.ithome.com.tw/articles/10302381
    // '@pinia/nuxt', // const {} = useDevice(); // https://nuxt.com/modules/device
    // '@nuxtjs/device', // https://github.com/nuxt-modules/stylelint
    // '@nuxtjs/color-mode', // https://nuxt.com/modules/icon
    // 'nuxt-icon', // https://google-fonts.nuxtjs.org/getting-started/setup
    // '@nuxtjs/google-fonts', // https://nuxt.com/modules/unocss
    // '@unocss/nuxt',
    // '@nuxt/image'
  ],
  devServer: {
    port: Number(process.env.NUXT_PORT || 3001),
    host: process.env.NUXT_HOST || '0.0.0.0'
    // https: { // Nuxt3Https 模式
    //   key: './https/localhost.key',
    //   cert: './https/localhost.crt'
    // }
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
