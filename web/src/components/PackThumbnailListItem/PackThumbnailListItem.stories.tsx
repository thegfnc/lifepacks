// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PackThumbnailListItem> = (args) => {
//   return <PackThumbnailListItem {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta } from '@storybook/react'

import PackThumbnailListItem from './PackThumbnailListItem'

export const generated = () => {
  return (
    <PackThumbnailListItem
      pack={{
        id: 1,
        createdAt: '2023-06-14 01:08:39.453',
        slug: 'slug',
        title: 'Pack Title',
        packItems: [],
        userProfile: {
          username: 'username',
          givenName: 'givenName',
          familyName: 'familyName',
          imageUrl: 'imageUrl',
        },
      }}
    />
  )
}

export default {
  title: 'Components/PackThumbnailListItem',
  component: PackThumbnailListItem,
} as Meta<typeof PackThumbnailListItem>
