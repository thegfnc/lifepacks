import { ButtonGroup, IconButton } from '@chakra-ui/react'
import Underline from '@tiptap/extension-underline'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatStrikethrough,
  MdFormatUnderlined,
} from 'react-icons/md'

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
    <ButtonGroup isAttached colorScheme="blackAlpha">
      <IconButton
        onClick={(e) => {
          e.preventDefault()
          editor.chain().focus().toggleBold().run()
        }}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        isActive={editor.isActive('bold')}
        aria-label="Format Bold"
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
    </ButtonGroup>
  )
}

const RichTextEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: `
      <p>
        Hi there,
      </p>
      <p>
        this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
      </p>
      <p>
        Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
      </p>
      <p>
        I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
      </p>
    `,
  })

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}

export default RichTextEditor
