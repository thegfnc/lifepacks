import sanitizeHtml from 'sanitize-html'

export function normalizeCommonPackInputFields(input) {
  input.title = sanitizeHtml(input.title.trim(), {
    allowedTags: [],
    allowedAttributes: {},
  })

  input.description = sanitizeHtml(input.description?.trim(), {
    allowedTags: ['p', 'br', 'strong', 'em', 'u', 's'],
    allowedAttributes: {},
  })
}
