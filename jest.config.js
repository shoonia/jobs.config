/** @type {import('jest').Config} */
const config = {
  roots: [
    '<rootDir>/src',
  ],
  testMatch: [
    '**/**.spec.ts',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};

export { config as default };
