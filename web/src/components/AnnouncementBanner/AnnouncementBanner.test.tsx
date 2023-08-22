import { render } from '@redwoodjs/testing/web'

import AnnouncementBanner from './AnnouncementBanner'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AnnouncementBanner', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AnnouncementBanner />)
    }).not.toThrow()
  })
})
