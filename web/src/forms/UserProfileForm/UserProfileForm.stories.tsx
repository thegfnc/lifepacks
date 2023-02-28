// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof UserProfileForm> = (args) => {
//   return <UserProfileForm {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import UserProfileForm from './UserProfileForm'

export const generated = () => {
  return <UserProfileForm onSubmit={() => {}} isLoading={false} />
}

export default {
  title: 'Components/UserProfileForm',
  component: UserProfileForm,
} as ComponentMeta<typeof UserProfileForm>
