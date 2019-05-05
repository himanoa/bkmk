const jest = require("../../jest.config.js");

module.exports = {
  ...jest,
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.test.json",
      diagnostics: false,
    }
  }
};
