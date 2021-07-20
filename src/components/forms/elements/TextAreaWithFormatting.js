import dynamic from 'next/dynamic'
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
)
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

function TextAreaWithFormatting({ value, onChange }) {
  return <Editor editorState={value} onEditorStateChange={onChange} />
}

export default TextAreaWithFormatting
