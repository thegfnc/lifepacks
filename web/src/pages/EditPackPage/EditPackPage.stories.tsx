import type { Meta } from '@storybook/react'

import EditPackPage from './EditPackPage'

export const generated = () => {
  return <EditPackPage id={1} />
}

export default {
  title: 'Pages/EditPackPage',
  component: EditPackPage,
} as Meta<typeof EditPackPage>
