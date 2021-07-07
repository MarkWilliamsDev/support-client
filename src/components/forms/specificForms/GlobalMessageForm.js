import TextArea from '@/components/forms/elements/TextArea'
import TextInput from '@/components/forms/elements/TextInput'
import ButtonContainer from '@/components/ui/buttons/ButtonContainer'
import ButtonSubmit from '@/components/ui/buttons/ButtonSubmit'

import { useStore } from 'src/StoreProvider'

const formId = 'messageForm'

function GlobalMessageForm({ register, handleSubmit }) {
  const { uiStore, globalMessagesStore } = useStore()

  const handleFormSubmit = (inputValues) => {
    if (!inputValues) return

    uiStore.setIsPending()
    globalMessagesStore.submitMessage(inputValues)

    const formElement = document.getElementById(formId)
    // formElement.reset()
  }

  return (
    <form id={formId} onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="row">
        <div className="col">
          <TextInput
            register={register}
            name={'from'}
            label={'From'}
            id={'fromTextInput'}
            ariaLabel={'Message from'}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TextInput
            register={register}
            name={'subject'}
            label={'Subject'}
            id={'subjectTextInput'}
            ariaLabel={'Message subject'}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TextArea
            label={'Message'}
            register={register}
            name={'message'}
            id={'messageTextAreaInput'}
            ariaLabel={'Message Body'}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ButtonContainer
            isOutline
            label={'Send'}
            variant={'primary'}
            Component={ButtonSubmit}
          />
        </div>
      </div>
    </form>
  )
}

export default GlobalMessageForm
