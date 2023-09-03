import sanitizeHtml from 'sanitize-html'

export function normalizeCommonPackItemInputFields(input) {
  input.title = sanitizeHtml(input.title.trim(), {
    allowedTags: [],
    allowedAttributes: {},
  })

  input.description = sanitizeHtml(input.description?.trim(), {
    allowedTags: ['p', 'br', 'strong', 'em', 'u', 's'],
    allowedAttributes: {},
  })

  input.imageUrl = input.imageUrl.trim()

  input.purchaseUrl = input.purchaseUrl.trim()
}
