import { Dispatch, SetStateAction, useEffect } from 'react'

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Stack,
  Textarea,
} from '@chakra-ui/react'
import { BiImageAdd } from 'react-icons/bi'
import { PackItem } from 'types/graphql'

import { Form, useForm } from '@redwoodjs/forms'

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
  const formMethods = useForm<PackItemFormValues>()
  const { register, formState } = formMethods

  useEffect(() => {
    onFormDirtyStateChange(formState.isDirty)
  }, [formState.isDirty, onFormDirtyStateChange])

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <Stack spacing={4}>
        <FormControl isInvalid={Boolean(formState.errors.title)}>
          <FormLabel>Title*</FormLabel>
          <Input
            defaultValue={defaultValues?.title}
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
            defaultValue={defaultValues?.purchaseUrl}
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
        <FormControl>
          <FormLabel>Image*</FormLabel>
          <Input
            type="hidden"
            value="https://target.scene7.com/is/image/Target/GUEST_58639e78-ad9c-43ca-93fc-d0497a9f2585?wid=1000&hei=1000&qlt=80&fmt=webp"
            {...register('imageUrl')}
          />
          <IconButton
            aria-label="Upload image"
            icon={<BiImageAdd size="1.5rem" />}
            borderWidth="1px"
            borderColor="gray.200"
            h={'7.5rem'}
            w="100%"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea
            defaultValue={defaultValues?.description}
            {...register('description')}
          />
        </FormControl>
        <HStack justify="flex-end" spacing={2}>
          {onCancel && (
            <Button variant="outline" colorScheme="gray" onClick={onCancel}>
              Cancel
            </Button>
          )}
          <Button colorScheme="purple" type="submit">
            Apply
          </Button>
        </HStack>
      </Stack>
    </Form>
  )
}

export default PackItemForm
