// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Header> = (args) => {
//   return <Header {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Header from './Header'

const CURRENT_USER = {
  email: 'lifepacksco@gmail.com',
}

export const loggedOut = () => {
  return (
    <Header
      isAuthenticated={false}
      isAuthLoading={false}
      currentUser={{}}
      logOut={() => {}}
    />
  )
}

export const loggingIn = () => {
  return (
    <Header
      isAuthenticated={false}
      isAuthLoading={true}
      currentUser={{}}
      logOut={() => {}}
    />
  )
}

export const loggedIn = () => {
  return (
    <Header
      isAuthenticated={true}
      isAuthLoading={false}
      currentUser={CURRENT_USER}
      logOut={() => {}}
    />
  )
}

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>
