import DateDisplay from '@/components/display/elements/DateDisplay'
import StringDisplay from '@/components/display/elements/StringDisplay'
import LinkContainer from '@/components/ui/link/LinkContainer'
import { pageModes } from '@/config/globalVariables'
import { messagePropTypes } from '@/propTypes'

function MessageListItem({ item }) {
  return (
    <LinkContainer
      pathname={`/global/message`}
      query={{ itemId: item._id, pageMode: pageModes.VIEW }}
    >
      <div className="border mb-1">
        <div className="px-2 py-1">
          <StringDisplay content={item._id} />
          <DateDisplay date={item.createdAt} />
          <StringDisplay content={item.subject} />
          <StringDisplay content={item.from} />
        </div>
      </div>
    </LinkContainer>
  )
}

MessageListItem.propTypes = {
  item: messagePropTypes,
}

export default MessageListItem
