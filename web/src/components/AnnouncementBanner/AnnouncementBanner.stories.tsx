// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import AnnouncementBanner from './AnnouncementBanner'

const meta: Meta<typeof AnnouncementBanner> = {
  component: AnnouncementBanner,
}

export default meta

type Story = StoryObj<typeof AnnouncementBanner>

export const Primary: Story = {}
