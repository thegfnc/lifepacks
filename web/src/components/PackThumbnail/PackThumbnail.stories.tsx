// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PackThumbnail> = (args) => {
//   return <PackThumbnail {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import PackThumbnail from './PackThumbnail'

export const generated = () => {
  return <PackThumbnail />
}

export default {
  title: 'Components/PackThumbnail',
  component: PackThumbnail,
} as ComponentMeta<typeof PackThumbnail>
