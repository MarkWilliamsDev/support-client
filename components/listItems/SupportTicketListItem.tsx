import { SupportTicket } from 'apiTypes'
import StringDisplay from '../display/elements/StringDisplay'

function SupportTicketListItem({ item }: { item: SupportTicket }) {
  return (
    <div>
      <StringDisplay label={'ID: '} content={item._id} />
      <StringDisplay label={'Name: '} content={item.name} />
      <StringDisplay label={'Subject: '} content={item.subject} />
    </div>
  )
}

export default SupportTicketListItem
