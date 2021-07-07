import Link from 'next/link'

function LinkButton({ pathname, query, label, classNames }) {
  return (
    <Link href={{ pathname, query }}>
      <a className={classNames}>{label}</a>
    </Link>
  )
}

export default LinkButton
