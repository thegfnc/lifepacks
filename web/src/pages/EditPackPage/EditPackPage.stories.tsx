import type { ComponentMeta } from '@storybook/react'

import EditPackPage from './EditPackPage'

export const generated = () => {
  return <EditPackPage />
}

export default {
  title: 'Pages/EditPackPage',
  component: EditPackPage,
} as ComponentMeta<typeof EditPackPage>
