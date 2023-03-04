import { useEffect, useState } from 'react'

import { Image, Input } from '@chakra-ui/react'
import slug from 'slug'
import { v4 as uuidv4 } from 'uuid'

import {
  FieldPath,
  FieldValues,
  useController,
  UseControllerProps,
} from '@redwoodjs/forms'

import supabaseClient from 'src/client'
import getFileExtension from 'src/helpers/getFileExtension'

type ImageUploadFieldProps = {
  bucket: 'user-profile-images'
}

function ImageUploadField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  bucket,
  control,
  name,
}: UseControllerProps<TFieldValues, TName> & ImageUploadFieldProps) {
  const { field } = useController({ name, control })
  const [previewImageUrl, setPreviewImageUrl] = useState(null)

  useEffect(() => {
    if (field.value) {
      setPreviewImageUrl(field.value)
    }
  }, [field.value])

  // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
  useEffect(() => {
    return () => URL.revokeObjectURL(previewImageUrl)
  }, [previewImageUrl])

  const onInputChange = async (event) => {
    const imageFile = event.target.files[0]
    const fileExtenstion = getFileExtension(imageFile.name)
    const imageFileNameWithoutExtension = imageFile.name.replace(
      fileExtenstion,
      ''
    )
    setPreviewImageUrl(URL.createObjectURL(imageFile))

    const imageFileName =
      slug(uuidv4() + '-' + imageFileNameWithoutExtension) + fileExtenstion

    await supabaseClient.storage.from(bucket).upload(imageFileName, imageFile, {
      cacheControl: '3600',
      upsert: true,
    })

    const { publicURL } = await supabaseClient.storage
      .from(bucket)
      .getPublicUrl(imageFileName)

    field.onChange(publicURL)
  }

  return (
    <>
      <Input
        type="file"
        onChange={onInputChange}
        onBlur={field.onBlur}
        name={field.name}
        ref={field.ref}
      />
      {previewImageUrl && <Image src={previewImageUrl} />}
    </>
  )
}

export default ImageUploadField
