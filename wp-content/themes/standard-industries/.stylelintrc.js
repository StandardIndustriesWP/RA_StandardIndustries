module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    'at-rule-no-unknown': null,
    'at-rule-empty-line-before': null,
    'block-closing-brace-space-before': null,
    'block-no-empty': null,
    'block-opening-brace-space-after': null,
    'color-hex-case': 'upper',
    'declaration-block-semicolon-newline-after': null,
    'declaration-colon-newline-after': null,
    'declaration-empty-line-before': null,
    indentation: 2,
    'no-descending-specificity': null,
    'order/properties-alphabetical-order': true,
    'rule-empty-line-before': null,
    'selector-list-comma-newline-after': null,
    'selector-type-case': null,
    'selector-type-no-unknown': [true, { ignoreTypes: ['$dummyValue'] }]
  },
  syntax: 'scss'
};
