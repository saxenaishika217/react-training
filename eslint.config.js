import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';
import { defineConfig, globalIgnores } from 'eslint/config';
import cspellPlugin from '@cspell/eslint-plugin';

export default defineConfig([
  globalIgnores(['dist', 'playwright.config.js', 'coverage', '.min.js']),
  {
    files: ['**/.js', '**/*jsx'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      react,
      import: importPlugin,
      '@cspell': cspellPlugin,
    },
    rules: {
      '@cspell/spellchecker': ['warn', { customWordListFile: './cspell.txt' }],
    },

    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'no-alert': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-template': 'error',
      'object-shorthand': 'error',
      'no-unused-vars': [
        'error',
        { argsIgnorePattern: '^', varsIgnorePattern: '^' },
      ],
      'no-duplicate-imports': 'error',
      'no-shadow': 'error',
      'no-nested-ternary': 'error',
      'no-param-reassign': ['error', { props: true }],
      'no-use-before-define': [
        'error',
        { functions: false, classes: true, variables: true },
      ],
      eqeqeq: ['error', 'always'],
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-return-await': 'error',
      'require-await': 'error',
      'no-throw-literal': 'error',
      'no-promise-executor-return': 'error',
      'no-await-in-loop': 'warn',
      'no-constructor-return': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unreachable-loop': 'error',
      'array-callback-return': 'error',
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+
      'react/prop-types': 'warn',
      'react/jsx-no-target-blank': 'error',
      'react/jsx-no-useless-fragment': 'warn',
      'react/jsx-key': ['error', { checkFragmentShorthand: true }],
      'react/no-array-index-key': 'warn',
      'react/no-danger': 'error',
      'react/no-deprecated': 'error',
      'react/no-unstable-nested-components': 'error',
      'react/self-closing-comp': 'error',
      'react/hook-use-state': 'warn', // Enforce [value, setValue] naming
      'react/jsx-boolean-value': ['error', 'never'], // over
      'react/jsx-curly-brace-presence': [
        'warn',
        { props: 'never', children: 'never' },
      ],
      'import/no-duplicates': 'error',
      'import/no-cycle': 'warn',
      'import/no-self-import': 'error',
      'import/no-useless-path-segments': 'warn',
      'import/first': 'error',
      'import/newline-after-import': 'warn',
    },
  },
  {
    files: ['/*.test.{js,jsx}', '/*.spec.{js,jsx}', '/tests/'],
    rules: {
      'no-console': 'off',
      'no-alert': 'off',
      'react/prop-types': 'off',
    },
  },
]);
