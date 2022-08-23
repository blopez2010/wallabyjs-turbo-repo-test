const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  moduleDirectories: ["node_modules",  "<rootDir>/", "src", "static", "store"],
  testPathIgnorePatterns: [
    "<rootDir>/src/components/component-library",
    "<rootDir>/.next",
    "jest.config.js",
    "next.config.js",
  ],
  collectCoverageFrom: [
    "**/src/**",
    "**/store/**",
    "**/pages/**",
    "!**/__tests__/**",
    "!**/node_modules/**",
    "!**/component-library/**",
    "!**/src/components/global-components/Templates/**",
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)