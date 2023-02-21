// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof EditPackItemModal> = (args) => {
//   return <EditPackItemModal {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import { Button, useDisclosure } from '@chakra-ui/react'
import type { ComponentMeta } from '@storybook/react'

import EditPackItemModal from './EditPackItemModal'

export const generated = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Edit Pack Item Modal</Button>
      <EditPackItemModal
        isOpen={isOpen}
        title="Edit Item"
        packItem={{
          title: "REI Co-op Trailbreak 30 Sleeping Bag - Men's",
          purchaseUrl:
            'https://www.rei.com/product/157770/rei-co-op-trailbreak-30-sleeping-bag-mens',
          description:
            'While the above sleeping bag will suffice for three seasons, if you’re a beginner camper who is looking for one that will get you through four seasons (or one that can just handle cooler temperatures), the Mandagies recommend investing in this more expensive down-filled option from REI’s in-house line.',
        }}
        onClose={onClose}
        onSubmit={onClose}
      />
    </>
  )
}

export default {
  title: 'Components/EditPackItemModal',
  component: EditPackItemModal,
} as ComponentMeta<typeof EditPackItemModal>
