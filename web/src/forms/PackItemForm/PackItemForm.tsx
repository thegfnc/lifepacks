import { Dispatch, SetStateAction, useEffect } from 'react'

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  SimpleGrid,
  Stack,
  Textarea,
  Link as ChakraLink,
  HStack,
} from '@chakra-ui/react'
import { MdHelpOutline } from 'react-icons/md'
import { PackItem } from 'types/graphql'

import { Form, useForm } from '@redwoodjs/forms'
import { routes } from '@redwoodjs/router'

import ImageUploadField from 'src/fields/ImageUploadField/ImageUploadField'
import isValidUrl from 'src/helpers/isValidUrl'

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
  const { register, formState, control, setFocus } = formMethods

  useEffect(() => {
    onFormDirtyStateChange(formState.isDirty)
  }, [formState.isDirty, onFormDirtyStateChange])

  useEffect(() => {
    setFocus('title')
  }, [setFocus])

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
              maxLength: {
                value: 100,
                message: 'Pack item title cannot exceed 100 characters',
              },
            })}
          />
          <FormErrorMessage>{formState.errors.title?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={Boolean(formState.errors.purchaseUrl)}>
          <FormLabel>Purchase Url*</FormLabel>
          <Input
            placeholder="https://store.com/xxxx"
            {...register('purchaseUrl', {
              required: {
                value: true,
                message: 'Pack item purchase url is required',
              },
              maxLength: {
                value: 2000,
                message: 'Instagram URL cannot be more than 2000 characters',
              },
              validate: (value) =>
                isValidUrl(value) || 'Purchase URL is invalid',
            })}
          />
          {!formState.errors.purchaseUrl ? (
            <FormHelperText>
              <HStack spacing={1}>
                <MdHelpOutline />
                <ChakraLink href={routes.affiliateLinks101()} target="_blank">
                  Learn how to earn money on your recommendations
                </ChakraLink>
              </HStack>
            </FormHelperText>
          ) : (
            <FormErrorMessage>
              {formState.errors.purchaseUrl?.message}
            </FormErrorMessage>
          )}
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
        <FormControl isInvalid={Boolean(formState.errors.description)}>
          <FormLabel>Description</FormLabel>
          <Textarea
            {...register('description', {
              maxLength: {
                value: 1000,
                message: 'Description cannot exceed 1000 characters',
              },
            })}
            rows={5}
          />
          <FormErrorMessage>
            {formState.errors.description?.message}
          </FormErrorMessage>
        </FormControl>
      </Stack>
      <SimpleGrid
        py={4}
        px={{ base: 4, md: 6 }}
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
        <Button variant="primary" type="submit">
          Apply
        </Button>
      </SimpleGrid>
    </Form>
  )
}

export default PackItemForm
