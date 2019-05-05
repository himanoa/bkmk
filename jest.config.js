module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    ".*\\.(j|t)sx?$": "<rootDir>/node_modules/ts-jest"
  },
  testRegex: "(/(tests|__tests__)/.*|(\\.|/)(test|spec))\\.tsx?$",
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
      diagnostics: false,
    }
  },
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/(?!@bkmk)",
    "(/(__tests__|tests)/.*|(\\.|/)(test|spec))\\.d.ts$"
  ],
  transformIgnorePatterns: ["<rootDir>/(node_modules)/"]
};
