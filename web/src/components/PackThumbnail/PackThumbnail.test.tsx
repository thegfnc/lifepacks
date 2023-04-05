import { render } from '@redwoodjs/testing/web'

import PackThumbnail from './PackThumbnail'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PackThumbnail', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PackThumbnail />)
    }).not.toThrow()
  })
})
