import Link from 'next/link'

const LinkContainer = ({ children, pathname, query }) => {
  return (
    <Link href={{ pathname, query }}>
      <a style={{ textDecoration: 'none', color: 'inherit' }}>{children}</a>
    </Link>
  )
}

export default LinkContainer
