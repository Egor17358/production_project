import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginJest from 'eslint-plugin-jest';
import i18next from 'eslint-plugin-i18next';
import hooksPlugin from 'eslint-plugin-react-hooks';
import myPlugin from 'eslint-plugin-my-plugin-test-for-me';
import unusedImports from 'eslint-plugin-unused-imports';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
// myPlugin.rules

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['ignoresFiles/*'] },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
        __dirname: 'readonly',
        ...globals.browser,
      },
    },
    plugins: {
      jest: pluginJest,
      'react-hooks': hooksPlugin,
      'my-plugin-test-for-me': myPlugin,
      'unused-imports': unusedImports,
    },
    // myPlugin
    rules: {
      // "import/prefer-default-export": "off",
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      // "max-len": ['error', { ignoreComments: true, code: 160 }],
      // "@typescript-eslint/no-unused-vars": "off",
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          // "varsIgnorePattern": "^[A-Z]",
          argsIgnorePattern: '^_',
          // "args": "all",
          // "caughtErrors": "all",
          // "caughtErrorsIgnorePattern": "^_",
          // "destructuredArrayIgnorePattern": "^_",
          // "varsIgnorePattern": "^_",
          // "ignoreRestSiblings": true
        },
      ],
      '@typescript-eslint/ban-ts-comment': 'warn',
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'my-plugin-test-for-me/patch-checker': ['error', { alias: '@' }],
      'my-plugin-test-for-me/layer-imports': [
        'error',
        {
          alias: '@',
          ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
        },
      ],
      'my-plugin-test-for-me/public-api-imports': [
        'error',
        {
          alias: '@',
          testFilesPatterns: [
            '**/*.test.*',
            '**/*.story.*',
            '**/StoreDecorator.tsx',
          ],
        },
      ],
      'react/jsx-max-props-per-line': ['error', { maximum: 3 }],
      // "react-hooks/rules-of-hooks": "error"
      ...hooksPlugin.configs.recommended.rules,
    },
    // rules: hooksPlugin.configs.recommended.rules,
  },
  i18next.configs['flat/recommended'],
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  eslintPluginPrettierRecommended,
];
