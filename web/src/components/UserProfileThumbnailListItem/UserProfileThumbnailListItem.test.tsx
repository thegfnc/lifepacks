import { render } from '@redwoodjs/testing/web'

import UserProfileThumbnailListItem from './UserProfileThumbnailListItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserProfileThumbnailListItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <UserProfileThumbnailListItem
          username="username"
          imageUrl="imageUrl"
          givenName="givenName"
          familyName="familyName"
          biography="biography"
          verified={true}
        />
      )
    }).not.toThrow()
  })
})
