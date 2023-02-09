import type { ComponentMeta } from '@storybook/react'

import PackPage from './PackPage'

export const generated = () => {
  return <PackPage />
}

export default {
  title: 'Pages/PackPage',
  component: PackPage,
} as ComponentMeta<typeof PackPage>
