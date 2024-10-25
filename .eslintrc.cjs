module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/vue3-recommended',
    'plugin:vue-pug/vue3-recommended'
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: [],
  rules: {
    'no-undef': 'off',
    'dot-notation': 'off', // Object 不強制用 "."
    'no-console': 'off', // 可以使用 console
    quotes: ['error', 'single'], // 使用引號 double single
    'semi-style': ['error', 'last'], // 强制分号出现在句子末尾。
    'no-extra-semi': 'error', // 禁用不必要的分号。
    semi: ['error', 'always'], // 強制使用分號
    'no-empty-function': 'error', // 禁止空 function
    'no-unused-labels': 'error',
    'no-alert': 'off', // alert、confirm 和 prompt 禁止使用
    'arrow-parens': ['error', 'always'], // ()=>箭頭
    curly: 'off', // 可用return 簡寫
    'vue/no-mutating-props': 'off', // change props
    'vue/multi-word-component-names': 'off', // 多單字的名字
    // 'import/namespace': 'recommended',
    'vue/max-attributes-per-line': // 最大參數量
      ['error', {
        singleline: { max: 5 },
        multiline: { max: 5 }
      }],
    'tailwindcss/no-custom-classname': 'off', // tailwindcss 檢查
    '@typescript-eslint/no-unused-vars': 'warn', // 未使用參數
    'vue/attribute-hyphenation': 'off', // html 參數用 [-]
    'vue/no-deprecated-v-on-native-modifier': 'off'
    // 'vue/mustache-interpolation-spacing': ['error', 'never'] // 強制 Html {{ }} 左右空白
  }
};
