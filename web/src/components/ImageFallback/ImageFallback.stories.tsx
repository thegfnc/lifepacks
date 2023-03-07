// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ImageFallback> = (args) => {
//   return <ImageFallback {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ImageFallback from './ImageFallback'

export const generated = () => {
  return <ImageFallback />
}

export default {
  title: 'Components/ImageFallback',
  component: ImageFallback,
} as ComponentMeta<typeof ImageFallback>
