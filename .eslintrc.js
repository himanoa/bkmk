module.exports = {
  env: {
    browser: true,
    node: true,
    "jest/globals": true,
    es6: true
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
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"]
};
