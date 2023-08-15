// More info at https://redwoodjs.com/docs/project-configuration-dev-test-build

const config = {
  rootDir: '../',
  preset: '@redwoodjs/testing/config/jest/web',
  setupFiles: ['web/src/helpers/testUtils/window.mock.ts'],
  moduleNameMapper: {
    '@vercel/analytics':
      '<rootDir>/web/src/helpers/testUtils/vercel-analytics.mock.ts',
  },
}

module.exports = config
