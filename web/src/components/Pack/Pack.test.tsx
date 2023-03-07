import { render } from '@redwoodjs/testing/web'

import 'src/helpers/testUtils/matchMedia.mock'
import { ThemeWrapper } from 'src/helpers/testUtils/ThemeWrapper'

import Pack from './Pack'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Pack', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ThemeWrapper>
          <Pack
            username="jmdesiderio"
            pack={{
              title:
                'Camping in Comfort: The Top Gear to Take on Your Next Nature Escape',
              description:
                'Camping is a fun and adventurous way to escape the monotony of everyday life and explore the great outdoors. But, to make the most of your camping trip, you need the right gear. From tents to sleeping bags, from cookware to flashlights, having the right equipment can make or break your camping experience. In this article, we will be reviewing some of the best camping gear available on the market today, to help you make an informed decision when it comes to choosing the right gear for your next camping trip.',
              createdAt: '2023-02-13T16:05:18.978Z',
              packItems: [
                {
                  id: 1,
                  imageUrl:
                    'https://www.rei.com/media/cc6cd38d-23f6-464d-9107-fc3c9b7dbd2b.jpg?size=784x588',
                  purchaseUrl:
                    'https://www.rei.com/product/157770/rei-co-op-trailbreak-30-sleeping-bag-mens',
                  title: "REI Co-op Trailbreak 30 Sleeping Bag - Men's",
                  description:
                    'While the above sleeping bag will suffice for three seasons, if you’re a beginner camper who is looking for one that will get you through four seasons (or one that can just handle cooler temperatures), the Mandagies recommend investing in this more expensive down-filled option from REI’s in-house line.',
                },
                {
                  id: 3,
                  imageUrl:
                    'https://i5.walmartimages.com/asr/e2eaf2d6-392e-4703-8338-d9b113e0e124.85c6678244824a2e565fa624c03c2301.jpeg',
                  purchaseUrl:
                    'https://www.amazon.com/Coleman-2000020943NP-Classic-Propane-Stove/dp/B00005OU9D',
                  title: 'Coleman Classic Two-Burner Propane Stove',
                  description:
                    'Once you have your sleeping arrangements and apparel squared\n      away, the experts say you’ll want to think about your camp\n      kitchen. While some campgrounds have grills at each site, a\n      lot do not, so if you’re planning for a few days (or more),\n      you’ll probably want to bring your own portable stove.',
                },
              ],
            }}
          />
        </ThemeWrapper>
      )
    }).not.toThrow()
  })
})
