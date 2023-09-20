module.exports = {
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts",
    "@testing-library/jest-dom/extend-expect",
  ],
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy",
  },
};
