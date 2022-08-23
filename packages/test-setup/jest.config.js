const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  moduleDirectories: ["node_modules",  "<rootDir>/", "src", "static", "store"],
  testPathIgnorePatterns: [
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
  ],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/functions/(.*)$": "<rootDir>/src/components/functions/$1",
    "^@/services/(.*)$": "<rootDir>/src/components/services/$1",
    "^@/workers/(.*)$": "<rootDir>/src/components/workers/$1",
    "^@/context(.*)$": "<rootDir>/src/context/$1",
    "^@/data(.*)$": "<rootDir>/src/data/$1",
    "^@/hooks(.*)$": "<rootDir>/src/hooks/$1",
    "^@/scripts(.*)$": "<rootDir>/src/scripts/$1",
    "^@/src(.*)$": "<rootDir>/src/$1",
    "^@/__mocks__(.*)$": "<rootDir>/__mocks__/$1",
    "^@/pages(.*)$": "<rootDir>/pages/$1",
    "^@/store(.*)$": "<rootDir>/store/$1",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)