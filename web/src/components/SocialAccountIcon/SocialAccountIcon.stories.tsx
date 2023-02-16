// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof SocialAccountIcon> = (args) => {
//   return <SocialAccountIcon {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import SocialAccountIcon from './SocialAccountIcon'

export const generated = () => {
  return <SocialAccountIcon />
}

export default {
  title: 'Components/SocialAccountIcon',
  component: SocialAccountIcon,
} as ComponentMeta<typeof SocialAccountIcon>
