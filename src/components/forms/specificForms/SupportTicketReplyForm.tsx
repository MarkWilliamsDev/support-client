import { Observer, observer } from 'mobx-react-lite'
import useForm from '../../../hooks/useForm'
import useFormSubmit from '../../../hooks/useFormSubmit'
import { useStore } from '../../../StoreProvider'

type SupportTicketReplyFormProps = {
  itemId: string
}

const SupportTicketReplyForm = observer(
  ({ itemId }: SupportTicketReplyFormProps) => {
    const [formChangeHandler, formValues] = useForm()

    const store = useStore()

    const formId = 'SupportTicketReplyForm'

    const formSubmitHandler = useFormSubmit(
      { ...formValues, itemId },
      formId,
      store
    )

    return (
      <form
        id={formId}
        onChange={(e) => formChangeHandler(e)}
        onSubmit={(e) => formSubmitHandler(e)}
      >
        <div className="row">
          <div className="col-100">
            <hr />
            <div className="input-group">
              <textarea
                className="form-control"
                aria-label="With textarea"
                name="message"
                id="reply-message-textarea"
                rows={10}
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
          </div>
        </div>
      </form>
    )
  }
)

export default SupportTicketReplyForm
