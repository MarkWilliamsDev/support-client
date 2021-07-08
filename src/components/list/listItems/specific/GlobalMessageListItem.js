import StringDisplay from '@/components/display/elements/StringDisplay'
import { toJS } from 'mobx'

function GlobalMessageListItem({ item }) {
  console.log(toJS(item))
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
