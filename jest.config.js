module.exports = {
  testEnvironment: 'jsdom',
  preset: 'solid-jest/preset/browser',
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/es/**',
    '!**/lib/**',
    '!**/types/**',
  ],
  testMatch: [
    '**/?(*.)+(spec|test).ts?(x)',
  ],
  setupFilesAfterEnv: [
    './jest.setup.ts',
    'jest-plugin-context/setup',
    'jest-useragent-mock',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/es/',
    '<rootDir>/lib/',
    '<rootDir>/types/',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      'babel-jest',
      {
        presets: [
          '@babel/preset-env',
          'solid-jest/preset/browser',
          '@babel/preset-typescript',
        ],
      },
    ],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/es/',
    '/lib/',
    '.storybook',

    '/__snapshots__/',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/es/',
    '/lib/',
    '.storybook',

    '.js',
    '.interfaces.',
    '.types.',
    '.stories.',
    '/__snapshots__/',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};