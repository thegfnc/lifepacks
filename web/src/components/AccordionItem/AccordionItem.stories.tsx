// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof AccordionItem> = (args) => {
//   return <AccordionItem {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta } from '@storybook/react'

import AccordionItem from './AccordionItem'

export const generated = () => {
  return <AccordionItem title="Title" body="Body" />
}

export default {
  title: 'Components/AccordionItem',
  component: AccordionItem,
} as Meta<typeof AccordionItem>
