// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof BuyButton> = (args) => {
//   return <BuyButton {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta } from '@storybook/react'

import BuyButton from './BuyButton'

export const generated = () => {
  return <BuyButton packItemId={1} purchaseUrl="https://www.amazon.com/" />
}

export default {
  title: 'Components/BuyButton',
  component: BuyButton,
} as Meta<typeof BuyButton>
