module.exports = {
  projects: [
    {
      displayName: 'test',
      transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
      },
      setupFiles: ['<rootDir>/config/jest/setup.js'],
      verbose: true,
      testRegex: '__tests__.*\\.(spec|test)\\.(js|jsx)$',
      coverageDirectory: '<rootDir>/config/jest/__coverage__',
      moduleFileExtensions: ['js', 'jsx', 'json'],
      moduleDirectories: ['node_modules'],
    },
    {
      runner: 'jest-runner-eslint',
      displayName: 'lint',
      testRegex: 'src.*\\.(js|jsx)$',
    },
  ],
  watchPlugins: ['jest-runner-eslint/watch-fix'],
};
