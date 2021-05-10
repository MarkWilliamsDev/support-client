import { SupportTicket } from 'apiTypes'
import SupportTicketDisplay from './specificItems/SupportTicketDisplay'

function ItemDisplayContainer({ item }: { item: SupportTicket }) {
  return (
    <div>
      <SupportTicketDisplay item={item} />
    </div>
  )
}

export default ItemDisplayContainer
