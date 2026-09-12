import { defineConfig } from '@eslint/config-helpers';
import js from '@eslint/js';
import ts from 'typescript-eslint';

export default defineConfig(
  {
    ignores: [
      'dist',
    ],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        process: 'readonly',
      },
    },
  },
  js.configs.recommended,
  ts.configs.recommended,
  {
    rules: {
      'comma-dangle': [
        'error',
        'always-multiline',
      ],
      semi: 'error',
      quotes: [
        'error',
        'single',
      ],
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
      'no-else-return': 'error',
      'no-trailing-spaces': 'error',
      'no-use-before-define': 'error',
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxBOF: 0,
          maxEOF: 0,
        },
      ],
    },
  },
);
