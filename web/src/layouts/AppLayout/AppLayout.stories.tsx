import type { StoryObj, Meta, StoryFn } from '@storybook/react'

import AppLayout from './AppLayout'

export const generated: StoryObj<typeof AppLayout> = {
  render: (args) => {
    return <AppLayout {...args} />
  },
}

export default {
  title: 'Layouts/AppLayout',
  component: AppLayout,
} as Meta<typeof AppLayout>
