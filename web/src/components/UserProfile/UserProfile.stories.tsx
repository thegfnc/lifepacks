// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof UserProfileSidebar> = (args) => {
//   return <UserProfileSidebar {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta } from '@storybook/react'

import UserProfileSidebar from './UserProfile'

export const generated = () => {
  return <UserProfileSidebar userProfile={{ username: 'jmdesiderio' }} />
}

export default {
  title: 'Components/UserProfileSidebar',
  component: UserProfileSidebar,
} as Meta<typeof UserProfileSidebar>
