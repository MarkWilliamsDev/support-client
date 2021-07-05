import FormContainer from '@/components/forms/FormContainer'
import MessageForm from '@/components/forms/specificForms/MessageForm'

function create() {
  return <FormContainer Component={MessageForm} />
}

export default create
