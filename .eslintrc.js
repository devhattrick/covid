module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: ['error', 'never'],
    'no-unused-var': 'off',
    'comma-dangle': ['error', 'never'],
    'linebreak-style': 'off',
    'arrow-body-style': ['error', 'always'],
    'max-len': ['error', { code: 200 }],
    'no-useless-escape': 'off'
  }
}
