import DateDisplay from '@/components/display/elements/DateDisplay'
import HTMLStringParsedDisplay from '@/components/display/elements/HTMLStringParsedDisplay'
import StringDisplay from '@/components/display/elements/StringDisplay'
import { messagePropTypes } from '@/propTypes'

function GlobalMessageListItem({ item }) {
  return (
    <div>
      <hr />
      <DateDisplay date={item.createdAt} />
      <HTMLStringParsedDisplay htmlString={item.message} />
      <StringDisplay content={item._id} />
    </div>
  )
}

GlobalMessageListItem.propTypes = { item: messagePropTypes }

export default GlobalMessageListItem
