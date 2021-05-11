import { SupportTicket } from 'apiTypes'
import Link from 'next/link'
import DateDisplay from '../../display/elements/DateDisplay'
import StringDisplay from '../../display/elements/StringDisplay'

type SupportTicketListItemProps = {
  item: SupportTicket
  // onItemSelect: (selectedItem: SupportTicket) => void
}

const SupportTicketListItem = ({
  item,
}: // onItemSelect,
SupportTicketListItemProps) => {
  return (
    <div className="mx-3 my-2">
      <div className="row">
        <div className="col-auto">
          <div>
            <DateDisplay date={item.createdAt} />
          </div>
          <div>
            <StringDisplay label={'ID: '} content={item._id} />
          </div>
          <div>
            <StringDisplay label={'Name: '} content={item.name} />
          </div>
          <div>
            <StringDisplay label={'Subject: '} content={item.subject} />
          </div>
        </div>
        <div className="col align-self-end">
          <div className="btn btn-outline-primary">
            <Link
              href={{
                pathname: '/support/tickets',
                query: { itemId: item._id },
              }}
              passHref
            >
              <a>Open</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupportTicketListItem
