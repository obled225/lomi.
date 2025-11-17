import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

const eslintConfig = [
  {
    ignores: [
      'dist',
      'node_modules',
      '.next/',
      '.source/',
      'out/',
      'next.config.mjs',
      'postcss.config.js',
    ],
  },
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      ...typescriptEslint.configs.recommended.rules,
      'no-console': 'off',
      'import/no-relative-packages': 'off',
      '@next/next/no-html-link-for-pages': 'off',
      'react/jsx-key': 'off',
      'import/no-anonymous-default-export': 'off',
    },
  },
];

export default eslintConfig;
