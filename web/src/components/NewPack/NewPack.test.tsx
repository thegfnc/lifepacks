import { render } from '@redwoodjs/testing/web'

import NewPack from './NewPack'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NewPack', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewPack username="jmdesiderio" />)
    }).not.toThrow()
  })
})
