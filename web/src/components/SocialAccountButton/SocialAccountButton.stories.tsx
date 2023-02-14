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

import SocialAccountButton, { SocialAccountType } from './SocialAccountButton'

export const youTube = () => {
  return (
    <SocialAccountButton
      accountType={SocialAccountType.YouTube}
      username="@jmdesiderio"
      linkUrl="https://www.youtube.com/"
    />
  )
}

export const instagram = () => {
  return (
    <SocialAccountButton
      accountType={SocialAccountType.Instagram}
      username="@jmdesiderio"
      linkUrl="https://www.instagram.com/"
    />
  )
}

export default {
  title: 'Components/SocialAccountButton',
  component: SocialAccountButton,
} as ComponentMeta<typeof SocialAccountButton>
