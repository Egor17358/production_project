import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginJest from 'eslint-plugin-jest';
import i18next from 'eslint-plugin-i18next';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    settings: {
      "react": {
        "version": 'detect'
      },
    },
    extends: ['plugin:react/recommended']
    // extends: [tseslint.configs.disableTypeChecked],
  },
  {
    languageOptions: { globals: globals.browser },
    rules: {
      "import/prefer-default-export": "off",
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", {
        "args": "all",
        "argsIgnorePattern": "^_",
        "caughtErrors": "all",
        "caughtErrorsIgnorePattern": "^_",
        "destructuredArrayIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "ignoreRestSiblings": true
      }],
      "@typescript-eslint/ban-ts-comment": "warn",
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
    },
    plugins: {
      jest: pluginJest
    }
  },
  i18next.configs['flat/recommended'],
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
];
