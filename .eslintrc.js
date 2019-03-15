module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['eslint:recommended'],
  globals: {
    window: true,
    document: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    'arrow-body-style': ['warn', 'as-needed'],
    'arrow-parens': ['error', 'always'],
    'no-console': 0,
    'no-multiple-empty-lines': ['error', { max: 3 }],
    'no-unused-vars': [
      'error',
      {
        args: 'none'
      }
    ],
    'no-undef': 0,
    'prefer-destructuring': 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
    radix: ['error', 'as-needed'],
    semi: ['error', 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ]
  }
};
