// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Packs> = (args) => {
//   return <Packs {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Packs from './Packs'

export const generated = () => {
  return <Packs />
}

export default {
  title: 'Components/Packs',
  component: Packs,
} as ComponentMeta<typeof Packs>
