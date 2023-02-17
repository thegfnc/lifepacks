import type { ComponentMeta } from '@storybook/react'

import UserPage from './UserPage'

export const generated = () => {
  return <UserPage username="jmdesiderio" />
}

export default {
  title: 'Pages/UserPage',
  component: UserPage,
} as ComponentMeta<typeof UserPage>
