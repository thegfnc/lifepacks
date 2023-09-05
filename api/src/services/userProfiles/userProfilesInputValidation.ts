import sanitizeHtml from 'sanitize-html'

import { validate } from '@redwoodjs/api'

import isValidUrl from 'src/helpers/isValidUrl'

export function validateUsernameInput(input) {
  validate(input.username, 'Username', {
    presence: true,
    length: { min: 3, max: 50 },
    format: {
      pattern: /^[a-z0-9]+$/,
      message: 'Username can only contain lowercase letters and numbers.',
    },
  })
}

export function validateCommonUserProfileInputFields(input) {
  validate(input.givenName, 'First Name', { length: { max: 100 } })

  validate(input.familyName, 'Last Name', { length: { max: 100 } })

  validate(
    sanitizeHtml(input.biography?.trim(), {
      allowedTags: [],
      allowedAttributes: {},
    }),
    'Biography',
    { length: { max: 140 } }
  )

  validate(input.imageUrl, 'Image', {
    length: { max: 2000 },
    custom: {
      with: () => {
        if (input.imageUrl && !isValidUrl(input.imageUrl)) {
          throw new Error('Image URL is not valid.')
        }
      },
    },
  })

  validate(input.facebookUrl, 'Facebook URL', {
    length: { max: 2000 },
    custom: {
      with: () => {
        if (input.facebookUrl && !isValidUrl(input.facebookUrl)) {
          throw new Error('Facebook URL is not valid.')
        }
      },
    },
  })

  validate(input.instagramUrl, 'Instagram URL', {
    length: { max: 2000 },
    custom: {
      with: () => {
        if (input.instagramUrl && !isValidUrl(input.instagramUrl)) {
          throw new Error('Instagram URL is not valid.')
        }
      },
    },
  })

  validate(input.youtubeUrl, 'YouTube URL', {
    length: { max: 2000 },
    custom: {
      with: () => {
        if (input.youtubeUrl && !isValidUrl(input.youtubeUrl)) {
          throw new Error('YouTube URL is not valid.')
        }
      },
    },
  })

  validate(input.twitterUrl, 'Twitter URL', {
    length: { max: 2000 },
    custom: {
      with: () => {
        if (input.twitterUrl && !isValidUrl(input.twitterUrl)) {
          throw new Error('Twitter URL is not valid.')
        }
      },
    },
  })
}
