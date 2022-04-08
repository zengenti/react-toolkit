/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom-global",
  setupFilesAfterEnv: ["<rootDir>/jest/jest-setup.ts"],
  resetMocks: true,
  transform: {
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
  },
};
