module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-essential', 'airbnb-base'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['vue'],
  rules: {
    'no-console': 0,
    // 'prettier/prettier': 'error', // 开启规则
    // 'prettier/prettier': [
    //   'warn',
    //   {
    //     // singleQuote: true,
    //     printWidth: 80,
    //   },
    // ],
  },
};
