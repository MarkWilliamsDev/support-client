const formId = 'messageForm'

function MessageForm({ register, handleSubmit }) {
  const handleFormSubmit = (inputValues) => {
    if (!inputValues) return
  }

  return (
    <form id={formId} onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="row div col">
        <textarea></textarea>
      </div>
    </form>
  )
}

export default MessageForm
