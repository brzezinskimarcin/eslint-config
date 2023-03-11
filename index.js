const { isPackageExists } = require('local-pkg');
const pug = isPackageExists('pug');
const { rules } = require('./overrides');

module.exports = {
  extends: [
    '@antfu/eslint-config',
  ],
  overrides: 
    pug ? [
      {
        files: ['*.vue'],
        extends: [
          '@antfu/eslint-config',
          'plugin:vue-pug/vue3-recommended',
        ],
        rules: {
          ...rules,
          // rule below doesn't check components imported (but not registered) in script setup
          // therefore `registeredComponentsOnly: false` is necessary
          'vue-pug/component-name-in-template-casing': ['error', 'kebab-case', { registeredComponentsOnly: false }],
        }
      },
    ] : [],
  rules,
}
