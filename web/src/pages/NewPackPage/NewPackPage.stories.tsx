import type { Meta } from '@storybook/react'

import NewPackPage from './NewPackPage'

export const generated = () => {
  return <NewPackPage />
}

export default {
  title: 'Pages/NewPackPage',
  component: NewPackPage,
} as Meta<typeof NewPackPage>
