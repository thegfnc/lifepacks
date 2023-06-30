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

  let renderSrc = src
  let params = null

  // Since we're only paying for supabase on production, we can't use image transforms for the preview envs
  if (process.env.VERCEL_ENV === 'production') {
    // Need to figure out a more long term solution than this
    renderSrc = src.replace(
      'storage/v1/object/public',
      'storage/v1/render/image/public'
    )

    const { height, width, resize } = transform

    if (height > 2500 || width > 2500) {
      throw new Error('Max image dimension is 2500px')
    }

    params = new URLSearchParams({
      ...(height ? { height: height.toString() } : {}),
      ...(width ? { width: width.toString() } : {}),
      ...(resize ? { resize } : { resize: 'contain' }),
    })
  }

  return `${renderSrc}${params ? '?' + params.toString() : ''}`
}

export default getImageUrlWithTransform
