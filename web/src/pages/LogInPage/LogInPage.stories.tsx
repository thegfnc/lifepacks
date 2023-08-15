import type { Meta } from '@storybook/react'

import LogInPage from './LogInPage'

export const generated = () => {
  return <LogInPage />
}

export default {
  title: 'Pages/LogInPage',
  component: LogInPage,
} as Meta<typeof LogInPage>
