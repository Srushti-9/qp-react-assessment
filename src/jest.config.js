module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less|scss)$': '<rootDir>/__tests__/__mocks__/styleMock.js',
      }, 
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    testMatch: ['<rootDir>/__tests__/**/*.test.{js,jsx,ts,tsx}'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { async: true }],
      },
  };
  