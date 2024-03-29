// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ThirdPartyLogo> = (args) => {
//   return <ThirdPartyLogo {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta } from '@storybook/react'

import ThirdPartyLogo from './ThirdPartyLogo'

export const generated = () => {
  return <ThirdPartyLogo type="Google" />
}

export default {
  title: 'Components/ThirdPartyLogo',
  component: ThirdPartyLogo,
} as Meta<typeof ThirdPartyLogo>
