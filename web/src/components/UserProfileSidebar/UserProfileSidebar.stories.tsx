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

import type { ComponentMeta } from '@storybook/react'

import UserProfileSidebar from './UserProfileSidebar'

export const generated = () => {
  return <UserProfileSidebar />
}

export default {
  title: 'Components/UserProfileSidebar',
  component: UserProfileSidebar,
} as ComponentMeta<typeof UserProfileSidebar>
