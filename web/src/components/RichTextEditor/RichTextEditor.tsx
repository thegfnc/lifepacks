// import { useCallback } from 'react'

import { ButtonGroup, IconButton } from '@chakra-ui/react'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import Underline from '@tiptap/extension-underline'
import { useEditor, EditorContent } from '@tiptap/react'
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
    <ButtonGroup isAttached colorScheme="gray">
      <IconButton
        onClick={(e) => {
          e.preventDefault()
          editor.chain().focus().toggleBold().run()
        }}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        isActive={editor.isActive('bold')}
        aria-label="Format Bo ld"
        icon={<MdFormatBold />}
      />
      <IconButton
        onClick={(e) => {
          e.preventDefault()
          editor.chain().focus().toggleItalic().run()
        }}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        isActive={editor.isActive('italic')}
        aria-label="Italic"
        icon={<MdFormatItalic />}
      />
      <IconButton
        onClick={(e) => {
          e.preventDefault()
          editor.chain().focus().toggleUnderline().run()
        }}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        isActive={editor.isActive('underline')}
        aria-label="Underline"
        icon={<MdFormatUnderlined />}
      />
      <IconButton
        onClick={(e) => {
          e.preventDefault()
          editor.chain().focus().toggleStrike().run()
        }}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        isActive={editor.isActive('strike')}
        aria-label="Strikethrough"
        icon={<MdFormatStrikethrough />}
      />
      {/* <IconButton
        onClick={setLink}
        isActive={editor.isActive('link')}
        aria-label="Link"
        icon={<MdLink />}
      /> */}
    </ButtonGroup>
  )
}

const RichTextEditor = ({ control, name, defaultValue, placeholder = '' }) => {
  const { field } = useController({
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
    onUpdate: ({ editor }) => {
      const html = editor.getHTML()
      field.onChange(html)
    },
    onBlur: () => field.onBlur(),
  })

  if (!editor) {
    return null
  }

  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </>
  )
}

export default RichTextEditor
