import js from '@eslint/js';
import ts from 'typescript-eslint';

export default ts.config(
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
  ...ts.configs.recommended,
  {
    plugins: {
      'eslint-plugin-react': {
        rules: {
          'react/jsx-key': 'error',
          'react/prop-types': 'off',
          'react/react-in-jsx-scope': 'off',
          'react/jsx-uses-react': 'off',
          'react/no-unknown-property': [
            'error',
            {
              'ignore': [
                'spellcheck',
              ],
            },
          ],
        },
      },
    },
    rules: {
      'comma-dangle': [
        'error',
        'always-multiline',
      ],
      'semi': 'error',
      'indent': [
        'error',
        2,
        {
          'SwitchCase': 1,
        },
      ],
      'quotes': [
        'error',
        'single',
      ],
      'space-before-function-paren': [
        'error',
        {
          'anonymous': 'always',
          'named': 'never',
          'asyncArrow': 'always',
        },
      ],
      'no-else-return': 'error',
      'no-trailing-spaces': 'error',
      'no-use-before-define': 'error',
      'no-multiple-empty-lines': [
        'error',
        {
          'max': 1,
          'maxBOF': 0,
          'maxEOF': 0,
        },
      ],
    },
  },
);
