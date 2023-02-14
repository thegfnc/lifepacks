// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Avatar> = (args) => {
//   return <Avatar {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Avatar from './Avatar'

export const small = () => {
  return (
    <Avatar
      size="sm"
      src="https://media.licdn.com/dms/image/C5603AQGrd1EqCTIdQA/profile-displayphoto-shrink_800_800/0/1652631488505?e=1681948800&v=beta&t=Fe93iepsmDNHP8-wMLTr4IVqMLxzCmHwW6I0EJdeVkY"
    />
  )
}

export const medium = () => {
  return (
    <Avatar
      size="md"
      src="https://media.licdn.com/dms/image/C5603AQGrd1EqCTIdQA/profile-displayphoto-shrink_800_800/0/1652631488505?e=1681948800&v=beta&t=Fe93iepsmDNHP8-wMLTr4IVqMLxzCmHwW6I0EJdeVkY"
    />
  )
}

export const extraLarge = () => {
  return (
    <Avatar
      size="xl"
      src="https://media.licdn.com/dms/image/C5603AQGrd1EqCTIdQA/profile-displayphoto-shrink_800_800/0/1652631488505?e=1681948800&v=beta&t=Fe93iepsmDNHP8-wMLTr4IVqMLxzCmHwW6I0EJdeVkY"
    />
  )
}

export const full = () => {
  return (
    <Avatar
      size="full"
      src="https://media.licdn.com/dms/image/C5603AQGrd1EqCTIdQA/profile-displayphoto-shrink_800_800/0/1652631488505?e=1681948800&v=beta&t=Fe93iepsmDNHP8-wMLTr4IVqMLxzCmHwW6I0EJdeVkY"
    />
  )
}

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>
