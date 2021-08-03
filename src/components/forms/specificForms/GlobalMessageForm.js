import PropTypes from 'prop-types'
import TextInput from '@/components/forms/elements/TextInput'
import ButtonContainer from '@/components/ui/buttons/ButtonContainer'
import ButtonSubmit from '@/components/ui/buttons/ButtonSubmit'
import StringDisplay from '@/components/display/elements/StringDisplay'
import { pageModes, pageModesArray } from '@/config/globalVariables'
import { useRouter } from 'next/router'
import { useStore } from 'src/StoreProvider'
import DateDisplay from '@/components/display/elements/DateDisplay'
import TextAreaWithFormatting from '@/components/forms/elements/TextAreaWithFormatting'
import { globalMessagePropTypes } from '@/propTypes'

const formId = 'messageForm'

function GlobalMessageForm({ item, pageMode, register, handleSubmit, control }) {
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
          <TextAreaWithFormatting
            defaultValue={message.message}
            name={`message.${index}`}
            control={control}
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
            name={'from'}
            label={'From'}
            register={register}
            id={'fromTextInput'}
            ariaLabel={'Message from'}
            defaultValue={item?.from}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TextInput
            name={'subject'}
            label={'Subject'}
            register={register}
            id={'subjectTextInput'}
            ariaLabel={'Message subject'}
            defaultValue={item?.subject}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          {pageMode === pageModes.CREATE && (
            <TextAreaWithFormatting name={'message'} control={control} />
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

GlobalMessageForm.propTypes = {
  item: globalMessagePropTypes,
  pageMode: PropTypes.oneOf(pageModesArray),
  register: PropTypes.func,
  handleSubmit: PropTypes.func,
  control: PropTypes.object,
}

export default GlobalMessageForm
