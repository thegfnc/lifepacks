import { useId, useState } from 'react'

import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  TextProps,
} from '@chakra-ui/react'
// import Link from '@tiptap/extension-link'
import CharacterCount from '@tiptap/extension-character-count'
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

import CharacterCountDisplay from './CharacterCountDisplay'
import MenuBar from './MenuBar'

type RichTextEditorProps<T> = UseControllerProps<T> & {
  label?: string
  placeholder?: string
  variant?: 'outline' | 'unstyled'
  minHeight?: string
  textStyle?: TextProps
  maxLength?: number
}

const RichTextEditor = <T extends FieldValues>({
  control,
  name,
  defaultValue,
  label = '',
  placeholder = '',
  variant = 'outline',
  minHeight = '5em',
  textStyle = {},
  maxLength = null,
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
      // Link.configure({
      //   openOnClick: false,
      // }),
      Placeholder.configure({
        placeholder,
      }),
      CharacterCount.configure({
        limit: maxLength,
      }),
    ],
    editorProps: {
      attributes: {
        style: `outline: 2px solid transparent; min-height:${minHeight};`,
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
        {label && (
          <FormLabel
            onClick={() => editor.commands.focus()}
            display="flex"
            alignItems="flex-end"
            justifyContent="space-between"
            marginInlineEnd={1}
          >
            <Box>{label}</Box>
            <CharacterCountDisplay editor={editor} maxLength={maxLength} />
          </FormLabel>
        )}
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
        {!label && (
          <Box marginTop={1}>
            <CharacterCountDisplay editor={editor} maxLength={maxLength} />
          </Box>
        )}
        <FormErrorMessage>{fieldState.error?.message}</FormErrorMessage>
      </FormControl>
    </>
  )
}

export default RichTextEditor
