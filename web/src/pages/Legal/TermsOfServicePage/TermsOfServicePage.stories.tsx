import type { Meta } from '@storybook/react'

import TermsOfServicePage from './TermsOfServicePage'

export const generated = () => {
  return <TermsOfServicePage />
}

export default {
  title: 'Pages/TermsOfServicePage',
  component: TermsOfServicePage,
} as Meta<typeof TermsOfServicePage>
