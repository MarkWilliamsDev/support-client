import Link from 'next/link'

const LinkContainer = ({ label, linkPathname }) => {
  return (
    <Link href={linkPathname}>
      <a>{label}</a>
    </Link>
  )
}

export default LinkContainer
