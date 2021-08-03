import { observer } from 'mobx-react-lite'
import { useStore } from '../../../StoreProvider'
import PropTypes from 'prop-types'

import TextArea from '@/components/forms/elements/TextArea'
import ButtonSubmit from '@/components/ui/buttons/ButtonSubmit'
import ButtonContainer from '@/components/ui/buttons/ButtonContainer'
import { supportTicketPropTypes } from '@/propTypes'

const SupportTicketReplyForm = ({ item, setShowForm, register, handleSubmit }) => {
  const { uiStore, supportTicketsStore } = useStore()

  const formId = 'SupportTicketReplyForm'

  const handleFormSubmit = (inputValues) => {
    if (inputValues.message === '') return

    uiStore.setIsPending()
    supportTicketsStore.addMessage({ ...inputValues, itemId: item?._id })

    const formElement = document.getElementById(formId)
    formElement.reset()
    setShowForm(false)
  }

  return (
    <form id={formId} onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="row">
        <div className="col-100">
          <hr />
          <div className="input-group">
            <TextArea
              register={register}
              name={'message'}
              ariaLabel="Reply text area"
              id={'reply-message-textarea'}
              defaultValue={item?.message}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="mt-2">
            <ButtonContainer
              isOutline
              variant={'primary'}
              label={'Send'}
              Component={ButtonSubmit}
            />
          </div>
          <hr />
        </div>
      </div>
    </form>
  )
}

SupportTicketReplyForm.propTypes = {
  item: supportTicketPropTypes,
  setShowForm: PropTypes.func,
  register: PropTypes.func,
  handleSubmit: PropTypes.func,
}

export default observer(SupportTicketReplyForm)
