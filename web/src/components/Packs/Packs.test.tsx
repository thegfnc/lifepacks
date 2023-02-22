import { render } from '@redwoodjs/testing/web'

import Packs from './Packs'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Packs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Packs />)
    }).not.toThrow()
  })
})
