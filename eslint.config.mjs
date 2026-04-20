import nextVitals from 'eslint-config-next/core-web-vitals';
import prettier from 'eslint-plugin-prettier/recommended';
import typescript from 'eslint-config-next/typescript';
import unusedImports from 'eslint-plugin-unused-imports';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...nextVitals,
  ...typescript,
  {
    plugins: {
      'unused-imports': unusedImports,
    },

    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'off',
      'padding-line-between-statements': [
        'warn',
        {
          blankLine: 'always',
          prev: [
            'import',
            'multiline-block-like',
            'multiline-const',
            'multiline-expression',
            'multiline-let',
            'multiline-var',
          ],
          next: '*',
        },
        { blankLine: 'never', prev: 'import', next: 'import' },
        {
          blankLine: 'always',
          prev: '*',
          next: [
            'multiline-block-like',
            'multiline-const',
            'multiline-expression',
            'multiline-let',
            'multiline-var',
            'return',
            'throw',
          ],
        },
      ],
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
  prettier,
]);
