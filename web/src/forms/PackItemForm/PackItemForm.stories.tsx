// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PackItemForm> = (args) => {
//   return <PackItemForm {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta } from '@storybook/react'

import PackItemForm from './PackItemForm'

export const generated = () => {
  return <PackItemForm onSubmit={() => {}} />
}

export default {
  title: 'Components/PackItemForm',
  component: PackItemForm,
} as Meta<typeof PackItemForm>
