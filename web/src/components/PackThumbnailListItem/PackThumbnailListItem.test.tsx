import { render } from '@redwoodjs/testing/web'

import PackThumbnailListItem from './PackThumbnailListItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PackThumbnailListItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PackThumbnailListItem />)
    }).not.toThrow()
  })
})
