export default {
  roots: ['<rootsDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  // collectCoverage: true,
  // coverageProvider: 'v8',
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\ts$': 'ts-jest'
  }
}
