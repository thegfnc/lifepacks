// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof SocialAccountButton> = (args) => {
//   return <SocialAccountButton {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import SocialAccountButton from './SocialAccountButton'

export const generated = () => {
  return <SocialAccountButton />
}

export default {
  title: 'Components/SocialAccountButton',
  component: SocialAccountButton,
} as ComponentMeta<typeof SocialAccountButton>
