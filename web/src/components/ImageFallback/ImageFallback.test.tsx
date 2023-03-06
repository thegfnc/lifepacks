import { render } from '@redwoodjs/testing/web'

import ImageFallback from './ImageFallback'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ImageFallback', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ImageFallback />)
    }).not.toThrow()
  })
})
