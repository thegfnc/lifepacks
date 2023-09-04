// import { useCallback } from 'react'

import { HStack, IconButton } from '@chakra-ui/react'
import { BubbleMenu } from '@tiptap/react'
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatStrikethrough,
  MdFormatUnderlined,
  // MdLink,
} from 'react-icons/md'

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
        boxShadow="md"
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

export default MenuBar
