import type { Meta } from '@storybook/react'

import PackPage from './PackPage'

export const generated = () => {
  return <PackPage username="jmdesiderio" slug="camping" />
}

export default {
  title: 'Pages/PackPage',
  component: PackPage,
} as Meta<typeof PackPage>
