// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ImageUploadField> = (args) => {
//   return <ImageUploadField {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta } from '@storybook/react'

import ImageUploadField from './ImageUploadField'

export const generated = () => {
  return <ImageUploadField bucket="user-profile-images" name="imageUrl" />
}

export default {
  title: 'Components/ImageUploadField',
  component: ImageUploadField,
} as Meta<typeof ImageUploadField>
