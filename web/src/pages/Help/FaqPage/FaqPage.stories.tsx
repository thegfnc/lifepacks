import type { ComponentMeta } from '@storybook/react'

import FaqPage from './FaqPage'

export const generated = () => {
  return <FaqPage />
}

export default {
  title: 'Pages/FaqPage',
  component: FaqPage,
} as ComponentMeta<typeof FaqPage>
