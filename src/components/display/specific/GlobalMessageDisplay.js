import ListContainer from '@/components/list/ListContainer'
import StringDisplay from '@/components/display/elements/StringDisplay'
import GlobalMessageListItem from '@/components/list/listItems/specific/GlobalMessageListItem'

function GlobalMessageDisplay({ item }) {
  return (
    <div>
      <StringDisplay content={item._id} />
      <StringDisplay content={item.createdAt} />
      <StringDisplay content={item.from} />
      <StringDisplay content={item.subject} />
      <ListContainer
        ItemComponent={GlobalMessageListItem}
        list={item.messages}
      />
    </div>
  )
}

export default GlobalMessageDisplay
