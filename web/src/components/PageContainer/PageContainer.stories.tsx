// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PageContainer> = (args) => {
//   return <PageContainer {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta } from '@storybook/react'

import PageContainer from './PageContainer'

export const generated = () => {
  return <PageContainer>Hi :)</PageContainer>
}

export default {
  title: 'Components/PageContainer',
  component: PageContainer,
} as Meta<typeof PageContainer>
