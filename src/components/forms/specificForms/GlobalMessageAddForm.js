import TextAreaWithFormatting from '@/components/forms/elements/TextAreaWithFormatting'
import ButtonContainer from '@/components/ui/buttons/ButtonContainer'
import ButtonSubmit from '@/components/ui/buttons/ButtonSubmit'
import { useStore } from 'src/StoreProvider'

const formId = 'addMessageForm'

function GlobalMessageAddForm({ handleSubmit, setShowForm, control }) {
  const { uiStore, globalMessagesStore } = useStore()

  const handleFormSubmit = (inputValues) => {
    setShowForm(false)
    if (!inputValues) return

    uiStore.setIsPending()
    globalMessagesStore.addMessage(inputValues)
  }

  return (
    <form id={formId} onSubmit={handleSubmit(handleFormSubmit)}>
      <TextAreaWithFormatting
        label={'Add Message: '}
        name={'message'}
        control={control}
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
