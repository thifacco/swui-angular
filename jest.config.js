module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  modulePaths: ['<rootDir>'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage/swui-angular',
  collectCoverageFrom: [
    'src/app/**/*.ts',
    '!src/app/**/*.spec.ts',
    '!src/app/**/*.token.ts',
    '!src/app/**/interfaces/**',
    '!src/app/app.config.ts',
    '!src/app/app.routes.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
