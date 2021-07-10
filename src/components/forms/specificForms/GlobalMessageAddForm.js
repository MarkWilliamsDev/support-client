import TextArea from '@/components/forms/elements/TextArea'
import ButtonContainer from '@/components/ui/buttons/ButtonContainer'
import ButtonSubmit from '@/components/ui/buttons/ButtonSubmit'
import { useStore } from 'src/StoreProvider'

const formId = 'addMessageForm'

function GlobalMessageAddForm({ handleSubmit, register, setShowForm }) {
  const { uiStore, globalMessagesStore } = useStore()

  const handleFormSubmit = (inputValues) => {
    setShowForm(false)
    if (!inputValues) return

    uiStore.setIsPending()
    globalMessagesStore.addMessage(inputValues)
  }

  return (
    <form id={formId} onSubmit={handleSubmit(handleFormSubmit)}>
      <TextArea
        label={'Add Message: '}
        register={register}
        name={'message'}
        id={'addMessageInput'}
      />
      <ButtonContainer
        variant={'primary'}
        isOutline
        label={'Submit New Message'}
        Component={ButtonSubmit}
      />
    </form>
  )
}

export default GlobalMessageAddForm
