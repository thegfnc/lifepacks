type Transform = {
  height?: number
  width?: number
  resize?: 'cover' | 'contain' | 'fill'
}

type GetIMageUrlWithTransformInput = {
  src: string
  transform?: Transform
}

function getImageUrlWithTransform({
  src,
  transform = {},
}: GetIMageUrlWithTransformInput) {
  if (!src) return ''

  // Need to figure out a more long term solution than this
  const renderSrc = src.replace(
    'storage/v1/object/public',
    'storage/v1/render/image/public'
  )

  const { height, width, resize } = transform

  if (height > 2500 || width > 2500) {
    throw new Error('Max image dimension is 2500px')
  }

  const params = new URLSearchParams({
    ...(height ? { height: height.toString() } : {}),
    ...(width ? { width: width.toString() } : {}),
    ...(resize ? { resize } : { resize: 'contain' }),
  })

  return `${renderSrc}?${params.toString()}`
}

export default getImageUrlWithTransform
