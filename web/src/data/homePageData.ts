import amazonLogo from 'public/logos/amazon.png'
import ebayLogo from 'public/logos/ebay.png'
import homeDepotLogo from 'public/logos/home_depot.png'
import targetLogo from 'public/logos/target.png'
import walmartLogo from 'public/logos/walmart.png'

export const examplePacks = [
  {
    tabEmoji: '⛺️',
    tabLabel: 'Outdoors',
    pack: {
      title: 'Be Prepared for Your Next Camping Trip',
      description:
        'Camping can be a fun way to explore the great outdoors, but having the right gear can make all the difference in your comfort and safety while in nature.',
      packItems: [
        {
          id: 1,
          title: 'Nemo Dragonfly 2',
          description:
            'This affordable tent features a truly hassle-free set up.',
          purchaseUrl: 'https://amzn.to/3qJbqy6',
          imageUrl:
            'https://lewdorirqeadvphajbbq.supabase.co/storage/v1/object/public/pack-item-images/b9c3cc70-2d77-4e03-8e87-834826de53a0-nemo-dragonfly-2.png',
        },
        {
          id: 2,
          title: 'GSI Outdoors Glacier Stainless Troop Cookset',
          description:
            'With this durable cook set you’ll be able to feed your troop anything.',
          purchaseUrl: 'https://amzn.to/43EzeBX',
          imageUrl:
            'https://lewdorirqeadvphajbbq.supabase.co/storage/v1/object/public/pack-item-images/5ea43e5a-d5ca-43ac-84d9-9924daaf6d2c-gsi-outdooors-glacier-stainless-troop-cookset.png',
        },
      ],
    },
    userProfile: {
      givenName: 'Finn',
      familyName: 'Garcia',
      username: 'outdoorfinn',
      biography:
        'An avid reader, writer, and wanderer, I believe the world is full of amazing stories just waiting to be discovered.',
      imageUrl:
        'https://lewdorirqeadvphajbbq.supabase.co/storage/v1/object/public/user-profile-images/ded03745-8bac-46d0-b30a-55d17f05b8d5-finn-garcia.png',
    },
  },
  {
    tabEmoji: '🤖',
    tabLabel: 'Babies & Kids',
    pack: {
      title: 'The Best Toys for Your Little One',
      description:
        'Engaging baby toys are crucial for encouraging learning, exploration, and development in infants and toddlers. This guide offers a comprehensive overview of some of the most creative and thoughtful baby toys available today.',
      packItems: [
        {
          id: 3,
          title: 'Coogam Geometric Tangram Brain Teasers',
          description:
            'These puzzles are deceptively challenging but oh so satisfying!',
          purchaseUrl: 'https://amzn.to/3qXWNac',
          imageUrl:
            'https://lewdorirqeadvphajbbq.supabase.co/storage/v1/object/public/pack-item-images/025521a0-3b85-4cb5-a3a3-0466d93db8b9-coogram-geometric.png',
        },
        {
          id: 4,
          title: 'Magna Tiles 100-Piece Set',
          description:
            'This is my little architect’s go-to toy during playtime.',
          purchaseUrl: 'https://amzn.to/449z6dq',
          imageUrl:
            'https://lewdorirqeadvphajbbq.supabase.co/storage/v1/object/public/pack-item-images/b5fa8be1-f353-4f84-a653-ed694a8611d5-magna-tiles.png',
        },
      ],
    },
    userProfile: {
      givenName: 'Isabella',
      familyName: 'Wright',
      username: 'MamaEsquire',
      biography:
        "Working mom. Legal professional, I'm passionate about empowering others to  achieve their goals.",
      imageUrl:
        'https://lewdorirqeadvphajbbq.supabase.co/storage/v1/object/public/user-profile-images/c06990ed-a28e-4399-90f4-fcbc933605ca-isabella-wright.png',
    },
  },
  {
    tabEmoji: '📸',
    tabLabel: 'Photography',
    pack: {
      title: 'Best lenses for Food Photography',
      description:
        "Capturing mouth-watering images of food can be a challenging task, but having the right lens can make all the difference. In this review, we'll take a closer look at my go-to lenses for getting those stunning texture details.",
      packItems: [
        {
          id: 5,
          title: 'Nikon 105mm f/2.8G Macro',
          description:
            'The macro detail is just outstanding. This is my go-to for any shoot that requires a close up.',
          purchaseUrl: 'https://amzn.to/3NiRNEU',
          imageUrl:
            'https://lewdorirqeadvphajbbq.supabase.co/storage/v1/object/public/pack-item-images/7af4bc60-1b26-434e-a132-4eb76ada063d-nikon-105.png',
        },
        {
          id: 6,
          title: 'Nikon 50mm f/1.8G',
          description: 'I have yet to find a lens with better auto-focus.',
          purchaseUrl: 'https://amzn.to/449t78q',
          imageUrl:
            'https://lewdorirqeadvphajbbq.supabase.co/storage/v1/object/public/pack-item-images/6463dd59-236b-464a-90b0-a26c863222ad-nikon-50.png',
        },
      ],
    },
    userProfile: {
      givenName: 'Charlotte',
      familyName: 'Kim',
      username: 'PlatePixel',
      biography:
        'Food photographer with a passion for capturing the beauty and flavor of delicious dishes.',
      imageUrl:
        'https://lewdorirqeadvphajbbq.supabase.co/storage/v1/object/public/user-profile-images/1415cdcc-d458-4a44-b8fb-3cfd9eb547ea-charlotte-kim.png',
    },
  },

  {
    tabEmoji: '🍳',
    tabLabel: 'Kitchen',
    pack: {
      title: 'Bring Color To Your Kitchen',
      description:
        "Having color in your kitchen can affect your mood and appetite, and it can also enhance the overall aesthetic of the space.  Here's how to turn your kitchen into an art gallery.",
      packItems: [
        {
          id: 7,
          title: 'Le Creuset Round Dutch Oven',
          description:
            'Not only a beautiful rich color, but one of the best dutch ovens around.',
          purchaseUrl: 'https://amzn.to/3Jm2MMK',
          imageUrl:
            'https://lewdorirqeadvphajbbq.supabase.co/storage/v1/object/public/pack-item-images/43c64408-b757-41ee-ac87-c4063a971075-dutch-oven.png',
        },
        {
          id: 8,
          title: 'Silicone Turner Spatula Set',
          description:
            'You can always go green (or red or blue) with a new set of spatulas.',
          purchaseUrl: 'https://amzn.to/3NAd1PY',
          imageUrl:
            'https://lewdorirqeadvphajbbq.supabase.co/storage/v1/object/public/pack-item-images/151d0cba-0841-4f90-8373-4f266fe15f66-spatula.png',
        },
      ],
    },
    userProfile: {
      givenName: 'Caleb',
      familyName: 'Lee',
      username: 'chefcaleb',
      biography:
        'Food photographer with a passion for capturing the beauty and flavor of delicious dishes.',
      imageUrl:
        'https://lewdorirqeadvphajbbq.supabase.co/storage/v1/object/public/user-profile-images/76c8642e-e7df-43a7-9f98-d6c3f42b0be1-caleblee.png',
    },
  },
  {
    tabEmoji: '🎹',
    tabLabel: 'Music Gear',
    pack: {
      title: 'The Next Generation of Synths',
      description:
        'These synths offer the perfect blend of vintage and modern technology, providing musicians with the best of both worlds.',
      packItems: [
        {
          id: 9,
          title: 'Sequential Prophet 6',
          description:
            'A warm, punchy analog sound. Dave Smith built us a modern classic.',
          purchaseUrl: 'https://amzn.to/3NnervY',
          imageUrl:
            'https://lewdorirqeadvphajbbq.supabase.co/storage/v1/object/public/pack-item-images/2162a515-d17d-4e0c-ad30-55a18b3847f2-sequential-prophet-6.png',
        },
        {
          id: 10,
          title: 'Teenage Engineering OP-1',
          description:
            'This mini marvel is a masterclass in flawless design execution.',
          purchaseUrl: 'https://amzn.to/43ZB7co',
          imageUrl:
            'https://lewdorirqeadvphajbbq.supabase.co/storage/v1/object/public/pack-item-images/0457a9ec-0ab8-4816-ab52-86fed49cec38-op-1.png',
        },
      ],
    },
    userProfile: {
      givenName: 'Harper',
      familyName: 'Williams',
      username: 'audioalchemy',
      biography:
        'Passionate about beats, melodies, and the power of music to connect people – aspiring music producer with a passion for crafting soundscapes.',
      imageUrl:
        'https://lewdorirqeadvphajbbq.supabase.co/storage/v1/object/public/user-profile-images/550fee70-7d40-454c-ac59-9979de766cb8-harper-williams.png',
    },
  },
  {
    tabEmoji: '👗',
    tabLabel: 'Style',
    pack: {
      title: 'Summer Fashion Trends',
      description:
        "Summer is the perfect time to embrace bold and bright colors in your fashion choices. In this guide, we'll take a closer look at some of the hottest color trends for summer fashion.",
      packItems: [
        {
          id: 11,
          title: 'Sangtree Cargo Jogger Pants',
          description:
            'As a famous bard once stated, “all that glitters is gold.”',
          purchaseUrl: 'https://amzn.to/469pb9I',
          imageUrl:
            'https://lewdorirqeadvphajbbq.supabase.co/storage/v1/object/public/pack-item-images/f49fb358-c566-4e9c-800f-a85a90a20329-cargo-jogger.png',
        },
        {
          id: 12,
          title: 'FunkyMonkey Women’s Comfort Slides',
          description:
            'The perfect affordable beach sandal available in fun summer colors.',
          purchaseUrl: 'https://amzn.to/3Ne2lVS',
          imageUrl:
            'https://lewdorirqeadvphajbbq.supabase.co/storage/v1/object/public/pack-item-images/d9ac5652-de8e-4f4d-a2cb-216c8bedc8fa-comfort-slides.png',
        },
      ],
    },
    userProfile: {
      givenName: 'Wendy',
      familyName: 'Harris',
      username: 'RunwayReady',
      biography:
        'Style influencer with a passion for mixing and matching the latest trends to create bold and unique looks.',
      imageUrl:
        'https://lewdorirqeadvphajbbq.supabase.co/storage/v1/object/public/user-profile-images/22b62570-22ad-4b17-a553-0e8cd38d614b-wendy-harris.png',
    },
  },
]

export const stores = [
  { storeName: 'ebay', storeLogo: ebayLogo },
  { storeName: 'Walmart', storeLogo: walmartLogo },
  { storeName: 'Amazon', storeLogo: amazonLogo },
  { storeName: 'Target', storeLogo: targetLogo },
  { storeName: 'The Home Depot', storeLogo: homeDepotLogo },
]
