import DateDisplay from '@/components/display/elements/DateDisplay'
import StringDisplay from '@/components/display/elements/StringDisplay'

function MessageListItem({ item }) {
  return (
    <div>
      <StringDisplay content={item._id} />
      <DateDisplay date={item.createdAt} />
      <StringDisplay content={item.from} />
      <StringDisplay content={item.subject} />
    </div>
  )
}

export default MessageListItem
