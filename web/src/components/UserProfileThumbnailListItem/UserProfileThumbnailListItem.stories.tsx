// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof UserProfileThumbnailListItem> = (args) => {
//   return <UserProfileThumbnailListItem {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import UserProfileThumbnailListItem from './UserProfileThumbnailListItem'

export const generated = () => {
  return <UserProfileThumbnailListItem />
}

export default {
  title: 'Components/UserProfileThumbnailListItem',
  component: UserProfileThumbnailListItem,
} as ComponentMeta<typeof UserProfileThumbnailListItem>
