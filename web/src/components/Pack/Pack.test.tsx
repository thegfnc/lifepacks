import { render } from '@redwoodjs/testing/web'

import Pack from './Pack'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Pack', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Pack />)
    }).not.toThrow()
  })
})
