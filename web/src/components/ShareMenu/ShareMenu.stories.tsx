// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ShareMenu> = (args) => {
//   return <ShareMenu {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta } from '@storybook/react'

import ShareMenu from './ShareMenu'

export const generated = () => {
  return <ShareMenu shareTitle="Text" shareUrl="Url" />
}

export default {
  title: 'Components/ShareMenu',
  component: ShareMenu,
} as Meta<typeof ShareMenu>
