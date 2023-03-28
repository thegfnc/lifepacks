import { render } from '@redwoodjs/testing/web'

import Packs from './Packs'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Packs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Packs
          packs={[
            {
              id: 2,
              slug: 'camping-in-comfort-the-top-gear-to-take-on-your-next-nature-escape',
              title:
                'Camping in Comfort: The Top Gear to Take on Your Next Nature Escape',
              createdAt: '2023-02-13T16:05:18.978Z',
              packItems: [
                {
                  title: "REI Co-op Trailbreak 30 Sleeping Bag - Men's",
                  imageUrl:
                    'https://www.rei.com/media/cc6cd38d-23f6-464d-9107-fc3c9b7dbd2b.jpg?size=784x588',
                },
                {
                  title: 'Coleman Classic Two-Burner Propane Stove',
                  imageUrl:
                    'https://i5.walmartimages.com/asr/e2eaf2d6-392e-4703-8338-d9b113e0e124.85c6678244824a2e565fa624c03c2301.jpeg',
                },
              ],
              userProfile: {
                username: '@jmdesiderio',
              },
            },
          ]}
        />
      )
    }).not.toThrow()
  })
})
