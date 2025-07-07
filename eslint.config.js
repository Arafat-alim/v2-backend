// @ts-check

import globals from 'globals';
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // 1. Global ignores
  {
    ignores: ['node_modules/', 'dist/'],
  },

  // 2. Main configuration for all JavaScript files
  {
    languageOptions: {
      ecmaVersion: 'latest', // Use the latest ECMAScript features
      sourceType: 'module', // Use ES modules
      globals: {
        ...globals.node, // Add all Node.js global variables
      },
    },
  },

  // 3. ESLint's recommended rules
  js.configs.recommended,

  // 4. Prettier's configuration
  // This must be the last configuration to disable any conflicting rules.
  prettierConfig,
];
