import dynamic from 'next/dynamic'
import { useController } from 'react-hook-form'
const SunEditor = dynamic(() => import('suneditor-react'), { ssr: false })
import 'suneditor/dist/css/suneditor.min.css'

const customButtonList = [
  ['undo', 'redo'],
  ['font', 'fontSize'],
  ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
  ['removeFormat'],
  ['fontColor', 'hiliteColor'],
  ['outdent', 'indent'],
  ['align', 'horizontalRule', 'list'],
  ['link'],
  ['fullScreen', 'showBlocks', 'codeView'],
]

function TextAreaWithFormatting({
  name,
  defaultValue = '',
  control,
  ...props
}) {
  const {
    field: { value, ...inputProps },
  } = useController({ name, control, defaultValue })

  return (
    <SunEditor
      defaultValue={value}
      {...props}
      {...inputProps}
      height={'400px'}
      setOptions={{ buttonList: customButtonList, linkProtocol: 'https://' }}
    />
  )
}

export default TextAreaWithFormatting
