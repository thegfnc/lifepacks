import { Dispatch, SetStateAction, useEffect } from 'react'

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  SimpleGrid,
  Stack,
  Textarea,
} from '@chakra-ui/react'
import { PackItem } from 'types/graphql'

import { Form, useForm } from '@redwoodjs/forms'

import ImageUploadField from 'src/fields/ImageUploadField/ImageUploadField'

type PackItemFormProps = {
  onFormDirtyStateChange?: Dispatch<SetStateAction<boolean>>
  onSubmit: (data: PackItemFormSubmitData) => void
  onCancel?: () => void
  defaultValues?: Pick<PackItem, 'title' | 'purchaseUrl' | 'description'>
}

type PackItemFormValues = {
  title: string
  imageUrl: string
  purchaseUrl: string
  description: string
}

export type PackItemFormSubmitData = PackItemFormValues

const PackItemForm = ({
  onFormDirtyStateChange = () => {},
  onSubmit,
  onCancel,
  defaultValues,
}: PackItemFormProps) => {
  const formMethods = useForm<PackItemFormValues>({ defaultValues })
  const { register, formState, control } = formMethods

  useEffect(() => {
    onFormDirtyStateChange(formState.isDirty)
  }, [formState.isDirty, onFormDirtyStateChange])

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <Stack spacing={4}>
        <FormControl isInvalid={Boolean(formState.errors.title)}>
          <FormLabel>Title*</FormLabel>
          <Input
            {...register('title', {
              required: {
                value: true,
                message: 'Pack item title is required',
              },
            })}
          />
          <FormErrorMessage>{formState.errors.title?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={Boolean(formState.errors.purchaseUrl)}>
          <FormLabel>Purchase Url*</FormLabel>
          <Input
            placeholder="amazon.com/xxxx"
            {...register('purchaseUrl', {
              required: {
                value: true,
                message: 'Pack item purchase url is required',
              },
            })}
          />
          <FormErrorMessage>
            {formState.errors.purchaseUrl?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={Boolean(formState.errors.imageUrl)}>
          <FormLabel>Image*</FormLabel>
          <ImageUploadField
            bucket="pack-item-images"
            name="imageUrl"
            control={control}
            rules={{
              required: { value: true, message: 'Pack item image is required' },
            }}
          />
          <FormErrorMessage>
            {formState.errors.imageUrl?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea {...register('description')} />
        </FormControl>
      </Stack>
      <SimpleGrid
        py={4}
        px={6}
        columns={2}
        spacing={4}
        position="absolute"
        bottom={0}
        left={0}
        bg="white"
        w="full"
        borderBottomRadius="3xl"
        borderTopWidth="1px"
        borderTopColor="blackAlpha.300"
      >
        {onCancel && (
          <Button variant="outline" colorScheme="gray" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button colorScheme="purple" type="submit">
          Apply
        </Button>
      </SimpleGrid>
    </Form>
  )
}

export default PackItemForm
