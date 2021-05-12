import { SupportTicket } from 'apiTypes'
import { useState } from 'react'
import FormContainer from '../../forms/FormContainer'
import SupportTicketReplyForm from '../../forms/specificForms/SupportTicketReplyForm'
import ListContainer from '../../list/ListContainer'
import SupportTicketMessageItem from '../../list/listItems/SupportTicketMessageItem'
import ItemDisplayToolbar from '../../ui/toolbars/ItemDisplayToolbar'
import DateDisplay from '../elements/DateDisplay'
import StringDisplay from '../elements/StringDisplay'

function SupportTicketDisplay({ item }: { item: SupportTicket }) {
  const [showForm, setShowForm] = useState(false)

  const renderMessages = () => {
    return (
      <ListContainer
        list={item?.messages?.reverse()}
        ItemComponent={SupportTicketMessageItem}
      />
    )
  }
  const renderToolbar = () => {
    const label = showForm ? 'Hide Form' : 'Reply'

    return (
      <ItemDisplayToolbar>
        <button
          onClick={() => setShowForm(!showForm)}
          className="btn btn-outline-primary"
        >
          {label}
        </button>
      </ItemDisplayToolbar>
    )
  }

  const renderForm = () => {
    return (
      <FormContainer>
        <SupportTicketReplyForm itemId={item?._id} />
      </FormContainer>
    )
  }

  return (
    <>
      <div className="bg-light border rounded-top p-2">
        <div className="row">
          <div className="col">
            <div>
              <StringDisplay label={'Name: '} content={item?.name} />
            </div>
            <div>
              <StringDisplay label={'Subject: '} content={item?.subject} />
            </div>
            <div>
              <StringDisplay label={'Status: '} content={item?.ticketStatus} />
            </div>
          </div>
          <div className="col">
            <div>
              <DateDisplay date={item?.createdAt} />
            </div>
            <div>
              <StringDisplay label={'Ticket ID: '} content={item?._id} />
            </div>
            <div>
              <StringDisplay label={'User ID: '} content={item?._user} />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">{renderToolbar()}</div>
      </div>
      {showForm && renderForm()}
      {renderMessages()}
    </>
  )
}

export default SupportTicketDisplay
