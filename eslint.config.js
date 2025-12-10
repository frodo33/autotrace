import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    settings: {
      react: { version: "detect" },
    },
    // plugins: {
      // react: reactPlugin,
      // 'react-hooks': reactHooks,
      // 'react-refresh': reactRefresh,
      // 'import': importPlugin,
      // 'simple-import-sort': simpleImportSortPlugin,
      // tailwindcss: tailwindPlugin,
      // 'testing-library': testingLibraryPlugin,
    // },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      reactPlugin.configs.flat.recommended,
      reactPlugin.configs.flat['jsx-runtime'],
      
      // 'plugin:react/recommended',
      // 'plugin:import/errors',
      // 'plugin:import/warnings',
      // 'plugin:import/typescript',
      // 'plugin:tailwindcss/recommended',
      // 'plugin:testing-library/react',
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'quotes': ['error', 'double'],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'indent': ['error', 2, { "SwitchCase": 1 }],
      'no-console': 'error',
      'react/function-component-definition': [
        'warn',
        {
          "namedComponents": "arrow-function",
          "unnamedComponents": "arrow-function"
        }
      ]
    }
  },
])


// ----------------------------------------------------------------------------------------------------------------

// import js from "@eslint/js"
// import prettierConfig from "eslint-config-prettier"
// import importPlugin from "eslint-plugin-import"
// import react from "eslint-plugin-react"
// import reactHooks from "eslint-plugin-react-hooks"
// import reactRefresh from "eslint-plugin-react-refresh"
// import globals from "globals"
// import tseslint from "typescript-eslint"

// const tsconfigRootDir = new URL(".", import.meta.url).pathname;

// export default tseslint.config(
//   { ignores: ["dist", "eslint.config.ts"] },
//   {
//     settings: {
//       react: { version: "detect" },
//       "import/resolver": {
//         alias: {
//           map: [["@", "./src"]],
//           extensions: [".ts", ".tsx", ".js", ".jsx"],
//         },
//       },
//     },
//     extends: [
//       js.configs.recommended,
//       ...tseslint.configs.recommendedTypeChecked,
//       ...tseslint.configs.stylisticTypeChecked,
//       prettierConfig
//     ],
//     files: ["**/*.{ts,tsx}"],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//       parserOptions: {
//         project: ["./tsconfig.node.json", "./tsconfig.app.json"],
//         tsconfigRootDir
//       },
//     },
//     plugins: {
//       react,
//       "react-hooks": reactHooks,
//       "react-refresh": reactRefresh,
//       "@typescript-eslint": tseslint.plugin,
//       "import": importPlugin
//     },
//     rules: {
//       ...reactHooks.configs.recommended.rules,
//       "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
//       ...react.configs.recommended.rules,
//       ...react.configs["jsx-runtime"].rules,
//       "quotes": ["error", "double"],
//       "indent": ["error", 2, { "SwitchCase": 1 }],
//       "no-console": ["warn", { "allow": ["warn", "error"] }],
//       "arrow-body-style": ["error", "as-needed"],
//       "object-shorthand": ["error", "always"],
//       "@typescript-eslint/consistent-type-definitions": ["error", "type"],
//       "@typescript-eslint/no-misused-promises": ["error", { "checksVoidReturn": false }],
//       "no-multiple-empty-lines": ["error", {
//         "max": 1,
//         "maxEOF": 0,
//         "maxBOF": 0
//       }],
//       "@typescript-eslint/consistent-type-imports": [
//         "warn",
//         {
//           prefer: "type-imports",
//           disallowTypeAnnotations: false
//         }
//       ],
//       "import/order": [
//         "error",
//         {
//           "distinctGroup": false,
//           "groups": [
//             "builtin",
//             "external",
//             "internal",
//             "index"
//           ],
//           "pathGroups": [
//             {
//               "pattern": "react",
//               "group": "external",
//               "position": "before"
//             },
//             {
//               "pattern": "@mui/.*",
//               "group": "external",
//             },
//             {
//               "pattern": "@/**",
//               "group": "internal"
//             }
//           ],
//           "pathGroupsExcludedImportTypes": ["react"],
//           "newlines-between": "always",
//           "alphabetize": {
//             "order": "asc",
//             "caseInsensitive": true
//           }
//         }
//       ]
//     },
//   },
// )
