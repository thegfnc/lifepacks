import type { ComponentMeta } from '@storybook/react'

import EditUserProfilePage from './EditUserProfilePage'

export const generated = () => {
  return <EditUserProfilePage />
}

export default {
  title: 'Pages/EditUserProfilePage',
  component: EditUserProfilePage,
} as ComponentMeta<typeof EditUserProfilePage>
