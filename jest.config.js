/* eslint-env node */
module.exports = {
  roots: [
    '<rootDir>/src',
  ],
  testMatch: [
    '**/**.spec.ts',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
