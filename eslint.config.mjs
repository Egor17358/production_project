import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginJest from 'eslint-plugin-jest';
import i18next from 'eslint-plugin-i18next';
import hooksPlugin from "eslint-plugin-react-hooks";
import myPlugin from "eslint-plugin-my-plugin-test-for-me";
// myPlugin.rules

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ["ignoresFiles/*"] },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    settings: {
      "react": {
        "version": 'detect'
      },
    },
    // extends: [tseslint.configs.disableTypeChecked],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
        __dirname: "readonly",
        ...globals.browser
      }
    },
    plugins: {
      jest: pluginJest,
      "react-hooks": hooksPlugin,
      "my-plugin-test-for-me": myPlugin,
    },
    // myPlugin
    rules: {
      // "import/prefer-default-export": "off",
      "no-unused-vars": "off",
      "max-len": ['error', { ignoreComments: true, code: 160 }],
      // "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn"
        , {
          // "varsIgnorePattern": "^[A-Z]",
          "argsIgnorePattern": "^_",
          // "args": "all",
          // "caughtErrors": "all",
          // "caughtErrorsIgnorePattern": "^_",
          // "destructuredArrayIgnorePattern": "^_",
          // "varsIgnorePattern": "^_",
          // "ignoreRestSiblings": true
        }
      ],
      "@typescript-eslint/ban-ts-comment": "warn",
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "my-plugin-test-for-me/patch-checker": ["error", { alias: '@' }],
      "my-plugin-test-for-me/public-api-imports": ["error", {
        alias: '@',
        testFilesPatterns: ['**/*.test.*', '**/*.story.*', '**/StoreDecorator.tsx']
      }],
      // "react-hooks/rules-of-hooks": "error"
      ...hooksPlugin.configs.recommended.rules
    },
    // rules: hooksPlugin.configs.recommended.rules,
  },
  i18next.configs['flat/recommended'],
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
];
