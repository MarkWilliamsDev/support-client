import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

function ItemContainer({ children }) {
  const router = useRouter()

  return (
    <Link href={'/poop'} passHref>
      {children}
    </Link>
  )
}

export default ItemContainer
