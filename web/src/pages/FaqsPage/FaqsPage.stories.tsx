import type { ComponentMeta } from '@storybook/react'

import FaqsPage from './FaqsPage'

export const generated = () => {
  return <FaqsPage />
}

export default {
  title: 'Pages/FaqsPage',
  component: FaqsPage,
} as ComponentMeta<typeof FaqsPage>
