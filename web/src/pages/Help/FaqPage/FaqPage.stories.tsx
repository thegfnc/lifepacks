import type { Meta } from '@storybook/react'

import FaqPage from './FaqPage'

export const generated = () => {
  return <FaqPage />
}

export default {
  title: 'Pages/FaqPage',
  component: FaqPage,
} as Meta<typeof FaqPage>
