import { SupportTicket } from 'apiTypes'
import Link from 'next/link'
import StringDisplay from '../../display/elements/StringDisplay'

type SupportTicketListItemProps = {
  item: SupportTicket
}

const SupportTicketListItem = ({ item }: SupportTicketListItemProps) => {
  return (
    <div className="mx-3 my-2">
      <Link href={`/support/ticket?id=${item._id}`}>
        <a className="text-decoration-none text-dark">
          <StringDisplay label={'ID: '} content={item._id} />
          <StringDisplay label={'Name: '} content={item.name} />
          <StringDisplay label={'Subject: '} content={item.subject} />
        </a>
      </Link>
    </div>
  )
}

export default SupportTicketListItem
