import Link from 'next/link'

type LinkButtonProps = {
  pathname: string
  label: string
}

function LinkButton({ pathname, label }: LinkButtonProps) {
  return (
    <Link href={pathname}>
      <div>{label}</div>
    </Link>
  )
}

export default LinkButton
