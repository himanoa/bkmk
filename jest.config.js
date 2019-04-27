module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "^.+\\.(ts|tsx)?$|": "ts-jest"
  },
  testRegex: "(/(tests|__tests__)/.*|(\\.|/)(test|spec))\\.tsx?$",
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
      diagnostics: false
    }
  },
  testPathIgnorePatterns: [
    "/node_modules/",
    "(/(__tests__|tests)/.*|(\\.|/)(test|spec))\\.d.ts$"
  ]
};
