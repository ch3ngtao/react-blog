module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
       
    'plugin:react-hooks/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks'
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-unsafe': [
      'error',
      {
        checkAliases: true
      }
    ],
    'react/self-closing-comp': 'warn',
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-methods',
          'instance-variables',
          'lifecycle',
          'everything-else',
          'rendering'
        ]
      }
    ],
    // 'prettier/prettier': 'error',
    'react/prop-types': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'variable', format: ['camelCase', 'UPPER_CASE', 'PascalCase'] }
    ],
    '@typescript-eslint/no-use-before-define': 'error',
    'getter-return': 'off',
    'no-dupe-args': 'off',
    'no-dupe-keys': 'off',
    'no-trailing-spaces': 'off',
    'no-unreachable': 'off',
    'valid-typeof': 'off',
    'no-const-assign': 'off',
    'no-new-symbol': 'off',
    'no-this-before-super': 'off',
    'no-undef': 'off',
    'no-dupe-class-members': 'off',
    'no-redeclare': 'off',
    'no-unused-vars': 'off',
    'no-var': 'error',
    'no-use-before-define': 'off',
    'no-console': 'warn',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-const': 'error',
    'no-empty-function': 'error',
    eqeqeq: 'off',
    'space-before-function-paren': 0,
    'array-callback-return': 'warn',
    'default-case': 'error',
    'no-shadow': 'warn',
    quotes: 'warn',
    semi: 'off',
    'no-return-await': 'error',
    'no-await-in-loop': 'error',
    'require-await': 'error',
    'generator-star-spacing': ['warn', 'after'],
    'yield-star-spacing': ['warn', 'after'],
    'spaced-comment': ['warn', 'always', { markers: ['/'] }],
    semi: ['error', 'always', { omitLastInOneLineBlock: true }]
  }
};
