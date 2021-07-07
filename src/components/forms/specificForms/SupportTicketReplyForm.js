import { observer } from 'mobx-react-lite'
import { useStore } from '../../../StoreProvider'

const SupportTicketReplyForm = ({
  item,
  setShowForm,
  register,
  handleSubmit,
}) => {
  const { uiStore, supportTicketsStore } = useStore()

  const formId = 'SupportTicketReplyForm'

  const onSubmitHandler = (inputValues) => {
    if (inputValues.message === '') return

    uiStore.setIsPending()
    supportTicketsStore.addMessage({ ...inputValues, itemId: item?._id })

    const formElement = document.getElementById(formId)
    formElement.reset()
    setShowForm(false)
  }

  return (
    <form id={formId} onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="row">
        <div className="col-100">
          <hr />
          <div className="input-group">
            <textarea
              {...register('message')}
              className="form-control"
              aria-label="With textarea"
              id="reply-message-textarea"
              rows={5}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="mt-2">
            <button className="btn btn-outline-primary" type="submit">
              Send
            </button>
          </div>
          <hr />
        </div>
      </div>
    </form>
  )
}

export default observer(SupportTicketReplyForm)
