module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: [
      'plugin:vue/essential',
      'eslint:recommended',
      '@vue/typescript/recommended',
    ],
    parserOptions: {
      ecmaVersion: 2020,
      parser: "@typescript-eslint/parser"
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unused-components":"off",
      "@typescript-eslint/no-explicit-any": "off",
      "prefer-const": 'off',
      "semi": ["error", "always"],
      '@typescript-eslint/camelcase': 'off',
      '@typescript-eslint/no-mutating-props':'off',
      'vue/script-setup-uses-vars': 'off',
      // "@typescript-eslint/no-this-alias": ["off"],
    }
  };