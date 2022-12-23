import type { ComponentMeta } from '@storybook/react'

import LogInPage from './LogInPage'

export const generated = () => {
  return <LogInPage />
}

export default {
  title: 'Pages/LogInPage',
  component: LogInPage,
} as ComponentMeta<typeof LogInPage>
