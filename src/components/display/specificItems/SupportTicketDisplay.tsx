import { SupportTicket } from 'apiTypes'
import ListContainer from '../../list/ListContainer'
import SupportTicketMessageItem from '../../list/listItems/SupportTicketMessageItem'
import DateDisplay from '../elements/DateDisplay'
import StringDisplay from '../elements/StringDisplay'

function SupportTicketDisplay({ item }: { item: SupportTicket }) {
  const renderMessages = () => {
    return (
      <ListContainer
        list={item?.messages}
        ItemComponent={SupportTicketMessageItem}
      />
    )
  }

  return (
    <>
      <div className="bg-light border p-2">
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
      {renderMessages()}
    </>
  )
}

export default SupportTicketDisplay
