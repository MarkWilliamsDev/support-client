import DateDisplay from '@/components/display/elements/DateDisplay'
import StringDisplay from '@/components/display/elements/StringDisplay'
import LinkContainer from '@/components/ui/link/LinkContainer'

function MessageListItem({ item }) {
  return (
    <LinkContainer
      pathname={`/global/message`}
      query={{ itemId: item._id, pageMode: 'view' }}
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

export default MessageListItem
