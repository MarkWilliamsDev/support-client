import { SupportTicket } from 'apiTypes'
import { AnchorHTMLAttributes, forwardRef } from 'react'
import StringDisplay from '../../display/elements/StringDisplay'

interface SupportTicketListItemProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  item: SupportTicket
  href: string
  onClick: () => void
}

const SupportTicketListItem = forwardRef(
  ({ item, href, onClick }: SupportTicketListItemProps, ref: any) => {
    return (
      <div className="mx-3 my-2">
        <a
          className="text-decoration-none text-dark"
          href={href}
          onClick={onClick}
          ref={ref}
        >
          <StringDisplay label={'ID: '} content={item._id} />
          <StringDisplay label={'Name: '} content={item.name} />
          <StringDisplay label={'Subject: '} content={item.subject} />
        </a>
      </div>
    )
  }
)

export default SupportTicketListItem
