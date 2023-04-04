// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof MailingListSignUp> = (args) => {
//   return <MailingListSignUp {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import MailingListSignUp from './MailingListSignUp'

export const generated = () => {
  return <MailingListSignUp />
}

export default {
  title: 'Components/MailingListSignUp',
  component: MailingListSignUp,
} as ComponentMeta<typeof MailingListSignUp>
