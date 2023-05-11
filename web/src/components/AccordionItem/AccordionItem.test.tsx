import { Accordion } from '@chakra-ui/react'

import { render } from '@redwoodjs/testing/web'

import AccordionItem from './AccordionItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AccordionItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Accordion>
          <AccordionItem title="Title" body="Body" />
        </Accordion>
      )
    }).not.toThrow()
  })
})
