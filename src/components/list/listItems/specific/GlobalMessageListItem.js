import DateDisplay from '@/components/display/elements/DateDisplay'
import StringDisplay from '@/components/display/elements/StringDisplay'

function MessageListItem({ item }) {
  return (
    <div className="border mb-1">
      <div className="px-2 py-1">
        <StringDisplay content={item._id} />
        <DateDisplay date={item.createdAt} />
        <StringDisplay content={item.subject} />
        <StringDisplay content={item.from} />
      </div>
    </div>
  )
}

export default MessageListItem
