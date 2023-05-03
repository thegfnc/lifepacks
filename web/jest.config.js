// More info at https://redwoodjs.com/docs/project-configuration-dev-test-build

const config = {
  rootDir: '../',
  preset: '@redwoodjs/testing/config/jest/web',
  setupFiles: ['web/src/helpers/testUtils/window.mock.ts'],
}

module.exports = config
