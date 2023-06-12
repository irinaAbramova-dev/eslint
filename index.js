module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:jest/recommended', 'plugin:jsdoc/recommended', 'prettier'],
  plugins: ['jsdoc', 'mongodb', 'jest', 'promise', 'import', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    browser: false,
    node: true,
    jest: true,
    es6: true,
  },
  rules: {
    'max-len': [
      'error',
      {
        code: 150,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    // ESLint Prettier Alternative
    quotes: ['error', 'single'],
    indent: ['error', 2, { SwitchCase: 1 }],
    semi: ['error', 'always'],
    'linebreak-style': ['error', 'unix'],
    'arrow-parens': ['error', 'always'],
    // --------------------------------
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'jest/consistent-test-it': ['error', { fn: 'test' }],
    'jsdoc/require-returns-description': 'off',
    'no-tabs': 'off',
    'no-console': 'error',
    'import/named': 'off',
    'global-require': 'off',
    'no-param-reassign': ['error', { props: true }],
    'no-use-before-define': ['error', { functions: false, classes: false }],
    'no-plusplus': 'off',
    eqeqeq: 2,
    'consistent-return': 'off',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'no-underscore-dangle': ['error', { allow: ['_id', '_link', '_hash', '_updated', '_touched', '__typename'] }],
    'array-bracket-spacing': ['error', 'never'],
    'array-bracket-newline': ['error', 'consistent'],
    'array-element-newline': ['error', 'consistent'],
    'object-curly-spacing': ['error', 'always'],
    'object-curly-newline': [
      'error',
      {
        ObjectPattern: { multiline: true, consistent: true },
        ObjectExpression: { multiline: true, consistent: true },
        ImportDeclaration: 'never',
        ExportDeclaration: { multiline: true, minProperties: 5 },
      },
    ],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        exports: 'only-multiline',
        imports: 'never',
        functions: 'never',
      },
    ],
    'promise/no-nesting': 1,
    'promise/always-return': 2,
    'promise/catch-or-return': 2,
    'prettier/prettier': ['error'],
  },
  overrides: [
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      rules: { '@graphql-eslint/known-type-names': 'error' },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: [
          'node_modules',
          'src', // replace with your app-module-path directory
        ],
      },
    },
  },
};
