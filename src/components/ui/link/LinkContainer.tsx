import Link from 'next/link'

const LinkContainer = ({
  label,
  linkPathname,
}: {
  label: string
  linkPathname: string
}) => {
  return (
    <Link href={linkPathname}>
      <a>{label}</a>
    </Link>
  )
}

export default LinkContainer
