// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof EditPackItemModal> = (args) => {
//   return <EditPackItemModal {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import EditPackItemModal from './EditPackItemModal'

export const generated = () => {
  return <EditPackItemModal />
}

export default {
  title: 'Components/EditPackItemModal',
  component: EditPackItemModal,
} as ComponentMeta<typeof EditPackItemModal>
