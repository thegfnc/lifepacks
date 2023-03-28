import type { ComponentMeta } from '@storybook/react'

import ExplorePage from './ExplorePage'

export const generated = () => {
  return <ExplorePage />
}

export default {
  title: 'Pages/ExplorePage',
  component: ExplorePage,
} as ComponentMeta<typeof ExplorePage>
