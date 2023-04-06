// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PackThumbnail> = (args) => {
//   return <PackThumbnail {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import PackThumbnail from './PackThumbnail'

export const generated = () => {
  return (
    <PackThumbnail
      pack={{
        id: 1,
        createdAt: '2023-02-13T16:05:18.978Z',
        slug: 'camping-in-comfort-the-top-gear-to-take-on-your-next-nature-escape',
        title:
          'Camping in Comfort: The Top Gear to Take on Your Next Nature Escape',
        packItems: [
          {
            imageUrl:
              'https://www.rei.com/media/cc6cd38d-23f6-464d-9107-fc3c9b7dbd2b.jpg?size=784x588',
            title: "REI Co-op Trailbreak 30 Sleeping Bag - Men's",
          },
          {
            imageUrl:
              'https://i5.walmartimages.com/asr/e2eaf2d6-392e-4703-8338-d9b113e0e124.85c6678244824a2e565fa624c03c2301.jpeg',
            title: 'Coleman Classic Two-Burner Propane Stove',
          },
        ],
        userProfile: {
          username: 'jmdesiderio',
          givenName: 'Jason',
          familyName: 'Desiderio',
          imageUrl: 'https://google.com/',
        },
      }}
    />
  )
}

export default {
  title: 'Components/PackThumbnail',
  component: PackThumbnail,
} as ComponentMeta<typeof PackThumbnail>
