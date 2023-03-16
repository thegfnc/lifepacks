import { render } from '@redwoodjs/testing/web'

import PublishSuccessDrawer from './PublishSuccessDrawer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PublishSuccessDrawer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <PublishSuccessDrawer
          isOpen={true}
          onClose={() => {}}
          shareUrl="url"
          shareTitle="title"
        />
      )
    }).not.toThrow()
  })
})
