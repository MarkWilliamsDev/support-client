import StringDisplay from '@/components/display/elements/StringDisplay'

function GlobalMessageListItem({ item }) {
  return (
    <div>
      <hr />
      <StringDisplay content={item.createdAt} />
      <StringDisplay content={item.message} />
      <StringDisplay content={item._id} />
    </div>
  )
}

export default GlobalMessageListItem
