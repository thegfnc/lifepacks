import sanitizeHtml from 'sanitize-html'

export function normalizeUsernameInput(input) {
  input.username = input.username.toLowerCase().trim()
}

export function normalizeCommonUserProfileInputFields(input) {
  input.givenName = sanitizeHtml(input.givenName?.trim(), {
    allowedTags: [],
    allowedAttributes: {},
  })

  input.familyName = sanitizeHtml(input.familyName?.trim(), {
    allowedTags: [],
    allowedAttributes: {},
  })

  input.biography = sanitizeHtml(input.biography?.trim(), {
    allowedTags: ['p', 'br', 'strong', 'em', 'u', 's'],
    allowedAttributes: {},
  })

  // for some reason was not allowing users to clear their profile picture
  // input.imageUrl = input.imageUrl?.trim()

  input.facebookUrl = input.facebookUrl?.trim()
  input.instagramUrl = input.instagramUrl?.trim()
  input.youtubeUrl = input.youtubeUrl?.trim()
  input.twitterUrl = input.twitterUrl?.trim()
}
