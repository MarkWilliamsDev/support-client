import { observer } from 'mobx-react-lite'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useStore } from '../../../StoreProvider'

type SupportTicketReplyFormProps = {
  itemId: string
}

type FormValues = {
  message: string
}

const SupportTicketReplyForm = observer(
  ({ itemId }: SupportTicketReplyFormProps) => {
    const { register, handleSubmit } = useForm()
    const { uiStore, supportTicketsStore } = useStore()

    const formId = 'SupportTicketReplyForm'

    const onSubmitHandler: SubmitHandler<FormValues> = (inputValues) => {
      if (inputValues.message === '') return

      uiStore.setIsPending()
      supportTicketsStore.addSubItem({ ...inputValues, itemId })

      const formElement = document.getElementById(formId) as HTMLFormElement
      formElement.reset()
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
)

export default SupportTicketReplyForm
