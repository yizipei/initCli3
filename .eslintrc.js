module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'spaced-comment': 'off',
    'vue/max-attributes-per-line': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
