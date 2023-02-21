import type { ComponentMeta } from '@storybook/react'

import NewPackPage from './NewPackPage'

export const generated = () => {
  return <NewPackPage />
}

export default {
  title: 'Pages/NewPackPage',
  component: NewPackPage,
} as ComponentMeta<typeof NewPackPage>
