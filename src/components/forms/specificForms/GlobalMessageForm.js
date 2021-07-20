import TextArea from '@/components/forms/elements/TextArea'
import TextInput from '@/components/forms/elements/TextInput'
import ButtonContainer from '@/components/ui/buttons/ButtonContainer'
import ButtonSubmit from '@/components/ui/buttons/ButtonSubmit'
import StringDisplay from '@/components/display/elements/StringDisplay'
import { pageModes } from '@/config/globalVariables'
import { useRouter } from 'next/router'
import { useStore } from 'src/StoreProvider'
import DateDisplay from '@/components/display/elements/DateDisplay'
import TextAreaWithFormatting from '@/components/forms/elements/TextAreaWithFormatting'
import { Controller } from 'react-hook-form'

const formId = 'messageForm'

function GlobalMessageForm({
  register,
  control,
  handleSubmit,
  item,
  pageMode,
}) {
  const { uiStore, globalMessagesStore } = useStore()

  const router = useRouter()

  const handleFormSubmit = (inputValues) => {
    if (!inputValues) return

    uiStore.setIsPending()
    const formElement = document.getElementById(formId)
    formElement.reset()

    switch (pageMode) {
      case pageModes.CREATE:
        {
          // globalMessagesStore.submitMessage(inputValues)

          // router.push({
          //   pathname: '/global/message',
          //   query: { pageMode: pageModes.ALL },
          // })

          console.log(inputValues)
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
            defaultValue={item?.from}
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
            defaultValue={item?.subject}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          {pageMode === pageModes.CREATE && (
            <>
              <Controller
                name={'message'}
                control={control}
                defaultValue={''}
                render={({ value, onChange }) => (
                  <TextAreaWithFormatting value={value} onChange={onChange} />
                )}
              />

              {/* <TextArea
              label={'Message'}
              register={register}
              name={'message'}
              id={'messageTextAreaInput'}
              ariaLabel={'Message Body'}
              /> */}
            </>
          )}
          {pageMode === pageModes.EDIT && renderMessagesEditList()}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="py-2 px-3">
            <ButtonContainer
              isOutline
              label={'Send'}
              variant={'primary'}
              Component={ButtonSubmit}
            />
          </div>
        </div>
      </div>
    </form>
  )
}

export default GlobalMessageForm
