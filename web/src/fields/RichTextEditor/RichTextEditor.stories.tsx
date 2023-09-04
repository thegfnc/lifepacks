// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import RichTextEditor from './RichTextEditor'

const meta: Meta<typeof RichTextEditor> = {
  component: RichTextEditor,
}

export default meta

type Story = StoryObj<typeof RichTextEditor>

export const Primary: Story = {}
