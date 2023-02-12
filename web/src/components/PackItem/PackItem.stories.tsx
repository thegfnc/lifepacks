// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PackItem> = (args) => {
//   return <PackItem {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import PackItem from './PackItem'

export const generated = () => {
  return <PackItem />
}

export default {
  title: 'Components/PackItem',
  component: PackItem,
} as ComponentMeta<typeof PackItem>
