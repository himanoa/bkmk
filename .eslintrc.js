module.exports = {
  settings: {
    react: {
      version: "16.8"
    }
  },
  env: {
    browser: true,
    node: true,
    "jest/globals": true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true
    }
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-hooks", "jest"],
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "no-unused-vars": "off"
  }
};
