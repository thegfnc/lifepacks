import { render } from '@redwoodjs/testing/web'

import RichTextStyleWrapper from './RichTextStyleWrapper'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RichTextStyleWrapper', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RichTextStyleWrapper />)
    }).not.toThrow()
  })
})
