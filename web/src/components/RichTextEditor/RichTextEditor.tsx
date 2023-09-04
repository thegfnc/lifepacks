// import { useCallback } from 'react'

import { useId, useState } from 'react'

import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  IconButton,
} from '@chakra-ui/react'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import Underline from '@tiptap/extension-underline'
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatStrikethrough,
  MdFormatUnderlined,
  // MdLink,
} from 'react-icons/md'

import { useController } from '@redwoodjs/forms'

const MenuBar = ({ editor }) => {
  // const setLink = useCallback(() => {
  //   const previousUrl = editor.getAttributes('link').href
  //   const url = window.prompt('URL', previousUrl)

  //   // cancelled
  //   if (url === null) {
  //     return
  //   }

  //   // empty
  //   if (url === '') {
  //     editor.chain().focus().extendMarkRange('link').unsetLink().run()
  //     return
  //   }

  //   // update link
  //   editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
  // }, [editor])

  if (!editor) {
    return null
  }

  return (
    <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
      <HStack
        spacing={1}
        p={2}
        bg="white"
        borderRadius="xl"
        boxShadow="base"
        borderWidth="1px"
        borderColor="blackAlpha.300"
      >
        <IconButton
          colorScheme="whiteAlpha"
          color="black"
          bg="white"
          _hover={{
            bg: 'blackAlpha.200',
          }}
          _active={{
            bg: 'blackAlpha.300',
          }}
          size="md"
          borderRadius="xl"
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleBold().run()
          }}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          isActive={editor.isActive('bold')}
          aria-label="Format Bold"
          icon={<MdFormatBold size="24px" />}
        />
        <IconButton
          colorScheme="whiteAlpha"
          color="black"
          bg="white"
          _hover={{
            bg: 'blackAlpha.200',
          }}
          _active={{
            bg: 'blackAlpha.300',
          }}
          size="md"
          borderRadius="xl"
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleItalic().run()
          }}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          isActive={editor.isActive('italic')}
          aria-label="Format Italic"
          icon={<MdFormatItalic size="24px" />}
        />
        <IconButton
          colorScheme="whiteAlpha"
          color="black"
          bg="white"
          _hover={{
            bg: 'blackAlpha.200',
          }}
          _active={{
            bg: 'blackAlpha.300',
          }}
          size="md"
          borderRadius="xl"
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleUnderline().run()
          }}
          disabled={!editor.can().chain().focus().toggleUnderline().run()}
          isActive={editor.isActive('underline')}
          aria-label="Format Underline"
          icon={<MdFormatUnderlined size="24px" />}
        />
        <IconButton
          colorScheme="whiteAlpha"
          color="black"
          bg="white"
          _hover={{
            bg: 'blackAlpha.200',
          }}
          _active={{
            bg: 'blackAlpha.300',
          }}
          size="md"
          borderRadius="xl"
          onClick={(e) => {
            e.preventDefault()
            editor.chain().focus().toggleStrike().run()
          }}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          isActive={editor.isActive('strike')}
          aria-label="Format Strikethrough"
          icon={<MdFormatStrikethrough size="24px" />}
        />
        {/* <IconButton
        onClick={setLink}
        isActive={editor.isActive('link')}
        aria-label="Link"
        icon={<MdLink />}
      /> */}
      </HStack>
    </BubbleMenu>
  )
}

const RichTextEditor = ({
  control,
  name,
  defaultValue,
  label = '',
  placeholder = '',
}) => {
  const fieldId = useId()
  const [isFocused, setIsFocused] = useState(false)

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
          border="1px solid"
          borderColor={isFocused ? '#3182ce' : 'gray.300'}
          boxShadow={isFocused ? '0 0 0 1px #3182ce' : 'none'}
          borderRadius="md"
          transitionProperty="common"
          transitionDuration="normal"
        >
          <Box py={2} px={4}>
            <EditorContent editor={editor} />
          </Box>
        </Box>
        <FormErrorMessage>{fieldState.error?.message}</FormErrorMessage>
      </FormControl>
    </>
  )
}

export default RichTextEditor
