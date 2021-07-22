import DateDisplay from '@/components/display/elements/DateDisplay'
import StringDisplay from '@/components/display/elements/StringDisplay'
import ReactHTMLParser from 'react-html-parser'

function GlobalMessageListItem({ item }) {
  return (
    <div>
      <hr />
      <DateDisplay date={item.createdAt} />
      {ReactHTMLParser(item.message)}
      <StringDisplay content={item._id} />
    </div>
  )
}

export default GlobalMessageListItem
