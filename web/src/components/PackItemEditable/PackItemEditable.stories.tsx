// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PackItemEditable> = (args) => {
//   return <PackItemEditable {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import PackItemEditable from './PackItemEditable'

export const generated = () => {
  return <PackItemEditable />
}

export default {
  title: 'Components/PackItemEditable',
  component: PackItemEditable,
} as ComponentMeta<typeof PackItemEditable>
