import dynamic from 'next/dynamic'
import { useController } from 'react-hook-form'
import PropTypes from 'prop-types'
const SunEditor = dynamic(() => import('suneditor-react'), { ssr: false })
import 'suneditor/dist/css/suneditor.min.css'
import HTMLStringParsedDisplay from '@/components/display/elements/HTMLStringParsedDisplay'

const customButtonList = [
  ['undo', 'redo'],
  ['font', 'fontSize'],
  ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
  ['removeFormat'],
  ['fontColor', 'hiliteColor'],
  ['outdent', 'indent'],
  ['align', 'horizontalRule', 'list'],
  ['link'],
  ['image'],
]

function TextAreaWithFormatting({ name, defaultValue = '', control, ...props }) {
  const {
    field: { value, ...inputProps },
  } = useController({ name, control, defaultValue })

  const renderPreview = () => {
    return <HTMLStringParsedDisplay htmlString={value} />
  }

  return (
    <>
      <SunEditor
        defaultValue={value}
        {...props}
        {...inputProps}
        height={'400px'}
        setOptions={{
          buttonList: customButtonList,
          linkProtocol: 'https://',
          defaultStyle: 'font-size: 16px;',
        }}
      />
      {renderPreview()}
    </>
  )
}

TextAreaWithFormatting.propTypes = {
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  control: PropTypes.object,
  props: PropTypes.object,
}

export default TextAreaWithFormatting
