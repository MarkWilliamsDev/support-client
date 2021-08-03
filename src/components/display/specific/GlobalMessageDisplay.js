import ListContainer from '@/components/list/ListContainer'
import StringDisplay from '@/components/display/elements/StringDisplay'
import GlobalMessageListItem from '@/components/list/listItems/specific/GlobalMessageListItem'
import DateDisplay from '@/components/display/elements/DateDisplay'
import { globalMessagePropTypes } from '@/propTypes'

function GlobalMessageDisplay({ item }) {
  return (
    <div>
      <StringDisplay content={item._id} />
      <DateDisplay date={item.createdAt} />
      <StringDisplay content={item.from} />
      <StringDisplay content={item.subject} />
      <ListContainer ItemComponent={GlobalMessageListItem} list={item.messages} />
    </div>
  )
}

GlobalMessageDisplay.propTypes = { item: globalMessagePropTypes }

export default GlobalMessageDisplay
