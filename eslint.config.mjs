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
import tailwind from "eslint-plugin-better-tailwindcss";
import prettierPlugin from "eslint-plugin-prettier";
import reactCompiler from "eslint-plugin-react-compiler";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
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
  reactRefresh.configs.next,
  {
    name: "custom-plugins",
    plugins: {
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
      "react-compiler": reactCompiler,
      "better-tailwindcss": tailwind,
    },
  },
  {
    name: "custom-rules",
    files: ["**/*.{js,jsx,ts,tsx}", "eslint.config.mjs"],
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: [
            "vitest.config.ts",
            "eslint.config.mjs",
            "next.config.js",
            "commitlint.config.js",
            "contentlayer.config.js",
            "lint-staged.config.js",
            "postcss.config.js",
            "tailwind.config.js",
          ],
          defaultProject: "tsconfig.json",
        },
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
      "import-x/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import-x/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: ["tsconfig.json"],
        },
        node: true,
      },
      "better-tailwindcss": {
        // tailwindcss 4: the path to the entry file of the css based tailwind config (eg: `src/global.css`)
        entryPoint: path.join(import.meta.dirname, "./styles/global.css"),
        // tailwindcss 3: the path to the tailwind config file (eg: `tailwind.config.js`)
        tailwindConfig: path.join(import.meta.dirname, "./tailwind.config.js"),
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
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "react/function-component-definition": "off",
      "import-x/order": "off",
      "import/order": "off",
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
      "react/no-unknown-property": ["error", { ignore: ["tw"] }],
      "react-compiler/react-compiler": "error",
      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
          allowExportNames: [
            "metadata",
            "generateMetadata",
            "viewport",
            "generateViewport",
            "generateStaticParams",
          ],
        },
      ],
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never" },
      ],
      "@typescript-eslint/prefer-nullish-coalescing": "warn",
      // enable all recommended rules to report an error
      ...tailwind.configs["recommended-error"].rules,
      "better-tailwindcss/enforce-consistent-line-wrapping": [
        "error",
        {
          strictness: "loose",
        },
      ],
    },
  },
  {
    name: "content-collections",
    files: [
      "**/*.test.ts",
      "**/*.test.tsx",
      "content-collections.ts",
      "next.config.js",
    ],
    rules: {
      "import-x/no-extraneous-dependencies": [
        "error",
        { devDependencies: true },
      ],
    },
  },
];
