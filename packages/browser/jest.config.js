const config = require('../../jest.config.js')

module.exports = {
  ...config,
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.test.json",
      diagnostics: false,
    }
  },
}
