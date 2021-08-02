import parse, { domToReact } from 'html-react-parser'
import Link from 'next/link'

import DateDisplay from '@/components/display/elements/DateDisplay'
import StringDisplay from '@/components/display/elements/StringDisplay'

function GlobalMessageListItem({ item }) {
  const handleReplace = (domNode) => {
    // console.dir(domNode, { depth: null })

    switch (domNode.name) {
      case 'a': {
        const { attribs, children } = domNode
        return (
          <Link href={attribs.href}>
            <a>{domToReact(children)}</a>
          </Link>
        )
      }

      default:
        break
    }
  }

  const parsedMessageHtml = parse(item.message, {
    replace: (domNode) => handleReplace(domNode),
  })

  return (
    <div>
      <hr />
      <DateDisplay date={item.createdAt} />
      {parsedMessageHtml}
      <StringDisplay content={item._id} />
    </div>
  )
}

export default GlobalMessageListItem
