module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  plugins: ['solid'],
  extends: ['eslint:recommended', 'plugin:solid/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {},
};
