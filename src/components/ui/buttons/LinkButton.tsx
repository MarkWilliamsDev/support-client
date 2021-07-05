import Link from 'next/link'
import ButtonContainer from '@/components/ui/buttons/ButtonContainer'

type LinkButtonProps = {
  pathname: string
  query?: {}
  label: string
}

function LinkButton({ pathname, query, label }: LinkButtonProps) {
  return (
    <Link href={{ pathname, query }}>
      <a>
        <ButtonContainer>{label}</ButtonContainer>
      </a>
    </Link>
  )
}

export default LinkButton
