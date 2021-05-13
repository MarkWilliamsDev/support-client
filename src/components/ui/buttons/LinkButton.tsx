import { useRouter } from 'next/router'

type LinkButtonProps = {
  pathname: string
  query?: {}
  label: string
}

function LinkButton({ pathname, query, label }: LinkButtonProps) {
  const router = useRouter()

  const onClickHandler = () => {
    router.push({ pathname, query })
  }

  return (
    <button
      type="button"
      onClick={onClickHandler}
      className="btn btn-outline-primary"
    >
      {label}
    </button>
  )
}

export default LinkButton
