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

import type { Meta } from '@storybook/react'

import SocialAccount from 'src/types/SocialAccount'

import SocialAccountButton from './SocialAccountButton'

export const facebook = () => {
  return (
    <SocialAccountButton
      accountType={SocialAccount.Facebook}
      linkUrl="https://www.facebook.com/"
    />
  )
}

export const youTube = () => {
  return (
    <SocialAccountButton
      accountType={SocialAccount.YouTube}
      linkUrl="https://www.youtube.com/"
    />
  )
}

export const instagram = () => {
  return (
    <SocialAccountButton
      accountType={SocialAccount.Instagram}
      linkUrl="https://www.instagram.com/"
    />
  )
}

export default {
  title: 'Components/SocialAccountButton',
  component: SocialAccountButton,
} as Meta<typeof SocialAccountButton>
