import path from "path"

import js from "@eslint/js"
import { defineConfig, globalIgnores } from "eslint/config"
import importPlugin from "eslint-plugin-import"
import prettierPlugin from "eslint-plugin-prettier"
import reactPlugin from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tailwindPlugin from "eslint-plugin-tailwindcss"
import globals from "globals"
import tseslint from "typescript-eslint"

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    settings: {
      react: { version: "detect" },
      tailwindcss: {
        config: path.resolve(__dirname, "tailwind.config.js"),
      },
    },
    plugins: {
      import: importPlugin,
      tailwindcss: tailwindPlugin,
      prettier: prettierPlugin,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      reactPlugin.configs.flat.recommended,
      reactPlugin.configs.flat["jsx-runtime"],
      tailwindPlugin.configs["flat/recommended"],
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "prettier/prettier": "error",
      "no-console": "error",
      "object-shorthand": ["error", "always"],
      "arrow-body-style": ["error", "as-needed"],
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "tailwindcss/no-contradicting-classname": "warn",
      "tailwindcss/enforces-shorthand": "warn",
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/classnames-order": "error",
      "react/function-component-definition": [
        "warn",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "import/order": [
        "error",
        {
          distinctGroup: false,
          groups: ["builtin", "external", "internal", "index"],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "@/**",
              group: "internal",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
])
