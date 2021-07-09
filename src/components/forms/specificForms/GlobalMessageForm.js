import TextArea from '@/components/forms/elements/TextArea'
import TextInput from '@/components/forms/elements/TextInput'
import ButtonContainer from '@/components/ui/buttons/ButtonContainer'
import ButtonSubmit from '@/components/ui/buttons/ButtonSubmit'
import StringDisplay from '@/components/display/elements/StringDisplay'
import { pageModes } from '@/config/globalVariables'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useStore } from 'src/StoreProvider'
import DateDisplay from '@/components/display/elements/DateDisplay'
import { toJS } from 'mobx'

const formId = 'messageForm'

function GlobalMessageForm({
  register,
  handleSubmit,
  setValue,
  item,
  pageMode,
}) {
  const { uiStore, globalMessagesStore } = useStore()

  const router = useRouter()

  useEffect(() => {
    setValue('from', item?.from)
    setValue('subject', item?.subject)
  }, [item, setValue])

  const handleFormSubmit = (inputValues) => {
    if (!inputValues) return

    uiStore.setIsPending()
    const formElement = document.getElementById(formId)
    formElement.reset()

    switch (pageMode) {
      case pageModes.CREATE:
        {
          globalMessagesStore.submitMessage(inputValues)

          router.push({
            pathname: '/global/message',
            query: { pageMode: pageModes.ALL },
          })
        }
        break
      case pageModes.EDIT:
        {
          const valuesToSubmit = {
            ...inputValues,
            _id: item._id,
            createdAt: item.createdAt,
          }
          globalMessagesStore.editMessage(valuesToSubmit)

          router.push({
            pathname: '/global/message',
            query: { itemId: item._id, pageMode: pageModes.VIEW },
          })
        }
        break
      default:
        break
    }
  }

  const renderMessagesEditList = () => {
    return item?.messages?.map((message, index) => {
      return (
        <div key={message._id}>
          <hr />
          <DateDisplay date={message.createdAt} />
          <StringDisplay content={message._id} />
          <TextArea
            id={`message${index}Input`}
            index={index}
            defaultValue={message.message}
            register={register}
            name={`message.${index}`}
          />
        </div>
      )
    })
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
          {pageMode === pageModes.CREATE ? (
            <TextArea
              label={'Message'}
              register={register}
              name={'message'}
              id={'messageTextAreaInput'}
              ariaLabel={'Message Body'}
            />
          ) : (
            renderMessagesEditList()
          )}
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
