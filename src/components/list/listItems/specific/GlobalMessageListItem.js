import DateDisplay from '@/components/display/elements/DateDisplay'
import HTMLStringParsedDisplay from '@/components/display/elements/HTMLStringParsedDisplay'
import StringDisplay from '@/components/display/elements/StringDisplay'

function GlobalMessageListItem({ item }) {
  return (
    <div>
      <hr />
      <DateDisplay date={item.createdAt} />

      <HTMLStringParsedDisplay disableContentEditableWarning htmlString={item.message} />

      <StringDisplay content={item._id} />
    </div>
  )
}

export default GlobalMessageListItem
