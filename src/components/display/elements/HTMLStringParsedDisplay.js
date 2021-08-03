import parse, { domToReact } from 'html-react-parser'
import Link from 'next/link'
import Image from 'next/image'

function HTMLStringParsedDisplay({ htmlString }) {
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

      case 'div': {
        // replace img with nextjs Image
        const imageNode = domNode.children[0].children[0]
        if (imageNode.name === 'img') {
          const imgAttribs = imageNode.attribs

          const dimensionsString = imgAttribs['data-size']
          const dimensionsArray = dimensionsString.split(',')
          const [widthString, heightString] = dimensionsArray

          const width = parseInt(widthString)
          const height = parseInt(heightString)
          const alignment = imgAttribs['data-align']
          const float = alignment === 'none' ? 'left' : alignment

          // returning without figure or div with containereditable
          return (
            <div className="px-1" style={{ float }}>
              <Image
                src={imgAttribs.src}
                alt={imgAttribs.alt}
                layout="intrinsic"
                placeholder="empty"
                width={width}
                height={height}
              />
            </div>
          )
        }
      }

      default:
        break
    }
  }
  const parsedMessageHtml = parse(htmlString, {
    replace: (domNode) => handleReplace(domNode),
  })

  return <>{parsedMessageHtml}</>
}

export default HTMLStringParsedDisplay
