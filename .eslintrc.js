module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'jsx-a11y', 'react', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: '18',
    },
  },
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-target-blank': 2,
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        shorthandLast: true,
        callbacksLast: true,
        multiline: 'ignore',
        ignoreCase: false,
        noSortAlphabetically: true,
        reservedFirst: ['key', 'ref'],
      },
    ],
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/space-before-blocks': 'off',
    'object-shorthand': ['error', 'properties'],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-restricted-exports': 'off',
    'consistent-return': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'object',
          'index',
          'type',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          {
            pattern: '{react,react-dom}',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin', 'object'],
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
  },
  ignorePatterns: ['.eslintrc.*'],
  overrides: [
    {
      files: ['*.stories.tsx'],
      rules: {
        'max-lines': 'off',
        'no-console': 'off',
        'no-alert': 'off',
        'react-hooks/rules-of-hooks': 'off',
      },
    },
  ],
};
