// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof MailingListSignUpForm> = (args) => {
//   return <MailingListSignUpForm {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import MailingListSignUpForm from './MailingListSignUpForm'

export const generated = () => {
  return <MailingListSignUpForm onSubmit={() => {}} isLoading={false} />
}

export default {
  title: 'Components/MailingListSignUpForm',
  component: MailingListSignUpForm,
} as ComponentMeta<typeof MailingListSignUpForm>
