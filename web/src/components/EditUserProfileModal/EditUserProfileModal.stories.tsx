// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof EditUserProfileModal> = (args) => {
//   return <EditUserProfileModal {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import EditUserProfileModal from './EditUserProfileModal'

export const generated = () => {
  return <EditUserProfileModal />
}

export default {
  title: 'Components/EditUserProfileModal',
  component: EditUserProfileModal,
} as ComponentMeta<typeof EditUserProfileModal>
