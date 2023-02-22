// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof NewPack> = (args) => {
//   return <NewPack {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import NewPack from './NewPack'

export const generated = () => {
  return <NewPack username="jmdesiderio" />
}

export default {
  title: 'Components/NewPack',
  component: NewPack,
} as ComponentMeta<typeof NewPack>
