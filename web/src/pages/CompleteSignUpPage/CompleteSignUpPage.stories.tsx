import type { Meta } from '@storybook/react'

import CompleteSignUpPage from './CompleteSignUpPage'

export const generated = () => {
  return <CompleteSignUpPage />
}

export default {
  title: 'Pages/CompleteSignUpPage',
  component: CompleteSignUpPage,
} as Meta<typeof CompleteSignUpPage>
