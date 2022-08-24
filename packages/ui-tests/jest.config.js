// Add any custom config to be passed to Jest
const customJestConfig = {
  moduleDirectories: ["node_modules",  "<rootDir>/"],
  testPathIgnorePatterns: [
    "jest.config.js",
    "next.config.js",
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    "^.+\\.(js|jsx|ts)$": "babel-jest"
  }
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = customJestConfig;