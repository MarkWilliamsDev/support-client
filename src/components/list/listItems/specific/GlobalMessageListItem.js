import DateDisplay from '@/components/display/elements/DateDisplay'
import StringDisplay from '@/components/display/elements/StringDisplay'

function GlobalMessageListItem({ item }) {
  return (
    <div>
      <hr />
      <DateDisplay date={item.createdAt} />
      <StringDisplay content={item.message} />
      <StringDisplay content={item._id} />
    </div>
  )
}

export default GlobalMessageListItem
