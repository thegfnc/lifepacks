// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Pack> = (args) => {
//   return <Pack {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Pack from './Pack'

export const generated = () => {
  return <Pack />
}

export default {
  title: 'Components/Pack',
  component: Pack,
} as ComponentMeta<typeof Pack>
