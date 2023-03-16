// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PublishSuccessDrawer> = (args) => {
//   return <PublishSuccessDrawer {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import PublishSuccessDrawer from './PublishSuccessDrawer'

export const generated = () => {
  return (
    <PublishSuccessDrawer
      isOpen={true}
      onClose={() => {}}
      shareUrl="url"
      shareTitle="title"
    />
  )
}

export default {
  title: 'Components/PublishSuccessDrawer',
  component: PublishSuccessDrawer,
} as ComponentMeta<typeof PublishSuccessDrawer>
