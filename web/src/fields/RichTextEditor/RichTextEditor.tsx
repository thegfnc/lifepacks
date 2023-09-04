import { useId, useState } from 'react'

import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  TextProps,
} from '@chakra-ui/react'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import Underline from '@tiptap/extension-underline'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import {
  FieldValues,
  UseControllerProps,
  useController,
} from '@redwoodjs/forms'

import RichTextStyleWrapper from 'src/components/RichTextStyleWrapper/RichTextStyleWrapper'

import MenuBar from './MenuBar'

type RichTextEditorProps<T> = UseControllerProps<T> & {
  label?: string
  placeholder?: string
  variant?: 'outline' | 'unstyled'
  textStyle?: TextProps
}

const RichTextEditor = <T extends FieldValues>({
  control,
  name,
  defaultValue,
  label = '',
  placeholder = '',
  variant = 'outline',
  textStyle = {},
}: RichTextEditorProps<T>) => {
  const fieldId = useId()
  const [isFocused, setIsFocused] = useState(false)
  const isOutlineVariant = variant === 'outline'

  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
  })

  const editor = useEditor({
    content: defaultValue,
    extensions: [
      StarterKit.configure({
        blockquote: false,
        bulletList: false,
        codeBlock: false,
        heading: false,
        horizontalRule: false,
        listItem: false,
        orderedList: false,
      }),
      Underline,
      Link.configure({
        openOnClick: false,
      }),
      Placeholder.configure({
        placeholder,
      }),
    ],
    editorProps: {
      attributes: {
        style: 'outline: 2px solid transparent;',
        id: fieldId,
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML()
      field.onChange(html)
    },
    onFocus: () => {
      setIsFocused(true)
    },
    onBlur: () => {
      setIsFocused(false)
      field.onBlur()
    },
  })

  if (!editor) {
    return null
  }

  return (
    <>
      <FormControl isInvalid={Boolean(fieldState.error)} id={fieldId}>
        <FormLabel onClick={() => editor.commands.focus()}>{label}</FormLabel>
        <MenuBar editor={editor} />
        <Box
          border={isOutlineVariant ? '1px solid' : 'none'}
          borderColor={isOutlineVariant && isFocused ? '#3182ce' : 'gray.300'}
          boxShadow={
            isOutlineVariant && isFocused ? '0 0 0 1px #3182ce' : 'none'
          }
          borderRadius="md"
          transitionProperty="common"
          transitionDuration="normal"
        >
          <Box py={isOutlineVariant ? 2 : 0} px={isOutlineVariant ? 4 : 0}>
            <RichTextStyleWrapper {...textStyle}>
              <EditorContent editor={editor} />
            </RichTextStyleWrapper>
          </Box>
        </Box>
        <FormErrorMessage>{fieldState.error?.message}</FormErrorMessage>
      </FormControl>
    </>
  )
}

export default RichTextEditor
