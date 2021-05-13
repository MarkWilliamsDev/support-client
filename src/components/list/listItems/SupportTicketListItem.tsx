import { SupportTicket } from 'apiTypes'
import DateDisplay from '../../display/elements/DateDisplay'
import StringDisplay from '../../display/elements/StringDisplay'
import LinkButton from '../../ui/buttons/LinkButton'

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
          <LinkButton
            pathname={'/support/tickets'}
            query={{ itemId: item._id }}
            label={'Open'}
          />
        </div>
      </div>
    </div>
  )
}

export default SupportTicketListItem
