// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ExpandingTextarea> = (args) => {
//   return <ExpandingTextarea {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ExpandingTextarea from './ExpandingTextarea'

export const generated = () => {
  return <ExpandingTextarea />
}

export default {
  title: 'Components/ExpandingTextarea',
  component: ExpandingTextarea,
} as ComponentMeta<typeof ExpandingTextarea>
