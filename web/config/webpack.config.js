const { sentryWebpackPlugin } = require('@sentry/webpack-plugin')

/** @returns {import('webpack').Configuration} Webpack Configuration */
module.exports = (config, { mode }) => {
  if (mode === 'development') {
    // Add dev plugin
  }

  // Add custom rules for your project
  // config.module.rules.push(YOUR_RULE)

  // Add custom plugins for your project
  if (mode !== 'development') {
    config.plugins.push(
      sentryWebpackPlugin({
        org: process.env.SENTRY_ORG,
        project: process.env.SENTRY_WEB_PROJECT,
        authToken: process.env.SENTRY_AUTH_TOKEN,
      })
    )
  }

  return config
}
