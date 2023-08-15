// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PasswordInput> = (args) => {
//   return <PasswordInput {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta } from '@storybook/react'

import PasswordInput from './PasswordInput'

export const generated = () => {
  return (
    <PasswordInput
      name="password"
      autoComplete="new-password"
      onChange={() => new Promise(() => {})}
      onBlur={() => new Promise(() => {})}
    />
  )
}

export default {
  title: 'Components/PasswordInput',
  component: PasswordInput,
} as Meta<typeof PasswordInput>
