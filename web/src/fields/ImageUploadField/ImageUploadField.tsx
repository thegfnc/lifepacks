import { useEffect, useState } from 'react'

import { Center, IconButton, Image, Input, Spinner } from '@chakra-ui/react'
import { MdDeleteOutline } from 'react-icons/md'
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
  const [isUploading, setIsUploading] = useState(false)

  useEffect(() => {
    setPreviewImageUrl(field.value)
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

    setIsUploading(true)
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

    setIsUploading(false)
  }

  const onDeleteImage = () => {
    field.onChange(null)
  }

  return (
    <Center
      h={32}
      position="relative"
      bg="blackAlpha.100"
      borderWidth="1px"
      borderColor="blackAlpha.200"
      borderRadius="xl"
    >
      {previewImageUrl ? (
        <>
          <Image src={previewImageUrl} fit="contain" h="full" />
          {isUploading && (
            <Center
              bg="blackAlpha.300"
              position="absolute"
              top={0}
              left={0}
              h="full"
              w="full"
            >
              <Spinner size="lg" color="white" emptyColor="blackAlpha.500" />
            </Center>
          )}
          <IconButton
            colorScheme="whiteAlpha"
            bg="white"
            position="absolute"
            top={2}
            right={2}
            aria-label="Delete Image"
            icon={<MdDeleteOutline size="24px" />}
            color="red.500"
            size="md"
            borderRadius="xl"
            boxShadow="md"
            borderWidth="1px"
            borderColor="blackAlpha.200"
            onClick={onDeleteImage}
          />
        </>
      ) : (
        <Input
          type="file"
          onChange={onInputChange}
          onBlur={field.onBlur}
          name={field.name}
          ref={field.ref}
        />
      )}
    </Center>
  )
}

export default ImageUploadField
