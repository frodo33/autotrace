import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import importPlugin from "eslint-plugin-import"
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    settings: {
      react: { version: "detect" },
    },
    plugins: {
      'import': importPlugin,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      reactPlugin.configs.flat.recommended,
      reactPlugin.configs.flat['jsx-runtime'],
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'quotes': ['error', 'double'],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0, }],
      'indent': ['error', 2, { "SwitchCase": 1 }],
      'no-console': 'error',
      "object-shorthand": ["error", "always"],
      "arrow-body-style": ["error", "as-needed"],
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      'react/function-component-definition': [
        'warn',
        {
          "namedComponents": "arrow-function",
          "unnamedComponents": "arrow-function"
        }
      ],
      "import/order": [
        "error",
        {
          "distinctGroup": false,
          "groups": [
            "builtin",
            "external",
            "internal",
            "index"
          ],
          "pathGroups": [
            {
              "pattern": "react",
              "group": "external",
              "position": "before"
            },
            {
              "pattern": "@mui/.*",
              "group": "external",
            },
            {
              "pattern": "@/**",
              "group": "internal"
            }
          ],
          "pathGroupsExcludedImportTypes": ["react"],
          "newlines-between": "always",
          "alphabetize": {
            "order": "asc",
            "caseInsensitive": true
          }
        }
      ]
    }
  },
])