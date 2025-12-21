/**
 * THIS FILE WAS AUTO-GENERATED.
 * PLEASE DO NOT EDIT IT MANUALLY.
 * ===============================
 * IF YOU'RE COPYING THIS INTO AN ESLINT CONFIG, REMOVE THIS COMMENT BLOCK.
 */

import path from "node:path";

import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import { globalIgnores } from "eslint/config";
import { configs, plugins, rules } from "eslint-config-airbnb-extended";
import { rules as prettierConfigRules } from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tailwindcss from "eslint-plugin-tailwindcss";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";

const gitignorePath = path.resolve(".", ".gitignore");

const jsConfig = [
  // ESLint Recommended Rules
  {
    name: "js/config",
    ...js.configs.recommended,
  },
  // Stylistic Plugin
  plugins.stylistic,
  // Import X Plugin
  plugins.importX,
  // Airbnb Base Recommended Config
  ...configs.base.recommended,
  // Strict Import Config
  rules.base.importsStrict,
];

const nextConfig = [
  // React Plugin
  plugins.react,
  // React Hooks Plugin
  plugins.reactHooks,
  // React JSX A11y Plugin
  plugins.reactA11y,
  // Next Plugin
  plugins.next,
  // Airbnb Next Recommended Config
  ...configs.next.recommended,
  // Strict React Config
  rules.react.strict,
];

const typescriptConfig = [
  // TypeScript ESLint Plugin
  plugins.typescriptEslint,
  // Airbnb Base TypeScript Config
  ...configs.base.typescript,
  // Strict TypeScript Config
  // rules.typescript.typescriptEslintStrict,
  // Airbnb Next TypeScript Config
  ...configs.next.typescript,
];

const prettierConfig = [
  // Prettier Plugin
  {
    name: "prettier/plugin/config",
    plugins: {
      prettier: prettierPlugin,
    },
  },
  // Prettier Config
  {
    name: "prettier/config",
    rules: {
      ...prettierConfigRules,
      "prettier/prettier": "error",
    },
  },
];

export default [
  // Ignore .gitignore files/folder in eslint
  includeIgnoreFile(gitignorePath),
  globalIgnores(["next-env.d.ts"]),
  // Javascript Config
  ...jsConfig,
  // Next Config
  ...nextConfig,
  // TypeScript Config
  ...typescriptConfig,
  // Prettier Config
  ...prettierConfig,
  {
    name: "custom-plugins",
    plugins: {
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
      tailwindcss,
    },
  },
  {
    name: "custom-rules",
    files: ["**/*.{js,jsx,ts,tsx}", "eslint.config.mjs"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "react/destructuring-assignment": "off", // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
      "jsx-a11y/anchor-is-valid": "off", // Next.js use his own internal link system
      "react/require-default-props": "off", // Allow non-defined react props as undefined
      "react/jsx-props-no-spreading": "off", // _app.tsx uses spread operator and also, react-hook-form
      "react-hooks/exhaustive-deps": "off", // Incorrectly report needed dependency with Next.js router
      "@next/next/no-img-element": "off", // We currently not using next/image because it isn't supported with SSG mode
      "@typescript-eslint/comma-dangle": "off", // Avoid conflict rule between Eslint and Prettier
      "@typescript-eslint/consistent-type-imports": "error", // Ensure `import type` is used when it's necessary
      "import-x/prefer-default-export": "off", // Named export is easier to refactor automatically
      "tailwindcss/classnames-order": [
        "warn",
        {
          officialSorting: true,
        },
      ], // Follow the same ordering as the official plugin `prettier-plugin-tailwindcss`
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "react/function-component-definition": "off",
      "import-x/order": "off",
      "import/order": "off",
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
      "react/no-unknown-property": ["error", { ignore: ["tw"] }],
    },
  },
];
