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

  const { height, width, resize } = transform

  if (height > 2500 || width > 2500) {
    throw new Error('Max image dimension is 2500px')
  }

  const params = new URLSearchParams({
    ...(height ? { height: height.toString() } : {}),
    ...(width ? { width: width.toString() } : {}),
    ...(resize ? { resize } : { resize: 'contain' }),
  })

  return `${src}?${params.toString()}`
}

export default getImageUrlWithTransform
