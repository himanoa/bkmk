module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "^.+\\.jsx?$": "<rootDir>/node_modules/babel-jest",
    ".*\\.tsx?$": "<rootDir>/node_modules/ts-jest"
  },
  testRegex: "(/(tests|__tests__)/.*|(\\.|/)(test|spec))\\.tsx?$",
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
      diagnostics: false
    }
  },
  testPathIgnorePatterns: ["(/(__tests__|tests)/.*|(\\.|/)(test|spec))\\.d.ts$"]
};
