// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Feedback> = (args) => {
//   return <Feedback {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta } from '@storybook/react'

import Feedback from './Feedback'

export const generated = () => {
  return <Feedback />
}

export default {
  title: 'Components/Feedback',
  component: Feedback,
} as Meta<typeof Feedback>
