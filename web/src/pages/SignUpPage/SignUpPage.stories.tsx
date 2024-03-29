import type { Meta } from '@storybook/react'

import SignUpPage from './SignUpPage'

export const generated = () => {
  return <SignUpPage />
}

export default {
  title: 'Pages/SignUpPage',
  component: SignUpPage,
} as Meta<typeof SignUpPage>
