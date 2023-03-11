const { isPackageExists } = require('local-pkg');
const typescript = isPackageExists('typescript');

module.exports = {
  rules: {
    // js - override antfu's rules
    'import/order': ['error', {
      pathGroups: [
        {
          pattern: '@/**',
          group: 'external',
          position: 'after'
        },
      ],
      pathGroupsExcludedImportTypes: ['builtin'],
    }],
    'semi': ['error', 'always'],
    'curly': ['error', 'all'],
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    'no-constant-condition': 'error',
    'no-return-await': 'error',
    'require-await': 'error',
    'no-return-assign': 'error',
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],

    ...(typescript
      ? {
        // ts - override antfu's rules
        '@typescript-eslint/member-delimiter-style': ['error', { 'multiline': { 'delimiter': 'semi' } }],
        '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: false }],
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/consistent-indexed-object-style': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        'no-restricted-syntax': [
          'error',
          'DebuggerStatement',
          'LabeledStatement',
          'WithStatement',
          'TSEnumDeclaration'
        ],
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',

        // ts - add additional rules
        '@typescript-eslint/unified-signatures': 'error',
        '@typescript-eslint/sort-type-constituents': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/no-useless-empty-export': 'error',
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
        '@typescript-eslint/no-invalid-void-type': 'error',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/consistent-generic-constructors': 'error',
        '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
      }
      : {}
    ),

    // vue - override antfu's rules
    'vue/max-attributes-per-line': ['error', { singleline: 3 }],
    'vue/no-v-html': 'error',
    'vue/require-prop-types': 'error',
    'vue/require-default-prop': 'error',
    'vue/prefer-import-from-vue': 'error',
    'vue/no-v-text-v-html-on-component': 'error',
    'vue/prefer-separate-static-class': 'off',
    'vue/brace-style': ['error', '1tbs', { allowSingleLine: false }],
    'vue/no-constant-condition': 'error',
    'vue/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],

    // vue - add additional rules
    'vue/component-api-style': ['error', ['script-setup']],
    'vue/define-emits-declaration': ['error', 'type-based'],
    'vue/define-props-declaration': ['error', 'type-based'],
    'vue/html-button-has-type': 'error',
    'vue/html-comment-content-newline': 'error',
    'vue/next-tick-style': 'error',
    'vue/no-boolean-default': 'error',
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-ref-object-destructure': 'error',
    'vue/no-restricted-v-bind': 'error',
    'vue/no-static-inline-styles': 'error',
    'vue/no-template-target-blank': 'error',
    'vue/no-unused-refs': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/no-v-text': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/prefer-true-attribute-shorthand': 'error',
    'vue/script-indent': 'error',
    'vue/v-for-delimiter-style': ['error', 'in'],
    'vue/attributes-order': ['error', {
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        ['UNIQUE', 'SLOT'],
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'ATTR_DYNAMIC',
        'ATTR_STATIC',
        'ATTR_SHORTHAND_BOOL',
        'EVENTS',
        'CONTENT',
      ],
    }],
  },
}
