// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof RichTextEditor> = (args) => {
//   return <RichTextEditor {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import RichTextEditor from './RichTextEditor'

export const generated = () => {
  return <RichTextEditor />
}

export default {
  title: 'Components/RichTextEditor',
  component: RichTextEditor,
} as ComponentMeta<typeof RichTextEditor>
