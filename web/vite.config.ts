import dns from 'dns'

import { sentryVitePlugin } from '@sentry/vite-plugin'
import { defineConfig, UserConfig } from 'vite'

import redwood from '@redwoodjs/vite'

// See: https://vitejs.dev/config/server-options.html#server-host
// So that Vite will load on local instead of 127.0.0.1
dns.setDefaultResultOrder('verbatim')

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
const viteConfig: UserConfig = {
  build: {
    sourcemap: true, // Source map generation must be turned on
  },
  plugins: [
    redwood(),

    // Put the Sentry vite plugin after all other plugins
    process.env.VERCEL_ENV !== 'development' &&
      sentryVitePlugin({
        org: process.env.SENTRY_ORG,
        project: process.env.SENTRY_WEB_PROJECT,

        // Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
        // and need `project:releases` and `org:read` scopes
        authToken: process.env.SENTRY_AUTH_TOKEN,
      }),
  ],
}

export default defineConfig(viteConfig)
