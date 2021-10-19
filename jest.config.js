/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
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

export { config as default };
