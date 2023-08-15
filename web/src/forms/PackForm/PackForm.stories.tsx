// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PackForm> = (args) => {
//   return <PackForm {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta } from '@storybook/react'

import PackForm from './PackForm'

export const generated = () => {
  return <PackForm onSubmit={() => {}} isLoading={false} />
}

export default {
  title: 'Components/PackForm',
  component: PackForm,
} as Meta<typeof PackForm>
