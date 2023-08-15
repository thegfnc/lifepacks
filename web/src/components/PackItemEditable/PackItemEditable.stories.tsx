// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PackItemEditable> = (args) => {
//   return <PackItemEditable {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta } from '@storybook/react'

import PackItemEditable from './PackItemEditable'

export const generated = () => {
  return (
    <PackItemEditable
      id={1}
      imageUrl="https://www.rei.com/media/cc6cd38d-23f6-464d-9107-fc3c9b7dbd2b.jpg?size=784x588"
      purchaseUrl="https://www.rei.com/product/157770/rei-co-op-trailbreak-30-sleeping-bag-mens"
      title="REI Co-op Trailbreak 30 Sleeping Bag - Men's"
      description="While the above sleeping bag will suffice for three seasons, if you’re a beginner camper who is looking for one that will get you through four seasons (or one that can just handle cooler temperatures), the Mandagies recommend investing in this more expensive down-filled option from REI’s in-house line."
    />
  )
}

export default {
  title: 'Components/PackItemEditable',
  component: PackItemEditable,
} as Meta<typeof PackItemEditable>
