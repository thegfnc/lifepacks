import { ChakraProvider } from '@chakra-ui/react'

import { render } from '@redwoodjs/testing/web'

import PackThumbnailListItem from './PackThumbnailListItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PackThumbnailListItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ChakraProvider>
          <PackThumbnailListItem
            pack={{
              id: 1,
              createdAt: '2023-06-14 01:08:39.453',
              slug: 'slug',
              title: 'Pack Title',
              packItems: [],
              userProfile: {
                username: 'username',
                givenName: 'givenName',
                familyName: 'familyName',
                imageUrl: 'imageUrl',
              },
            }}
          />
        </ChakraProvider>
      )
    }).not.toThrow()
  })
})
