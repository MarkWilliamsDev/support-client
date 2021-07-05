import Link from 'next/link'
import dynamic from 'next/dynamic'

const ButtonContainer = dynamic(
  () => import('@/components/ui/buttons/ButtonContainer'),
  { ssr: true }
)

function LinkButton({ pathname, query, label }) {
  return (
    <Link href={{ pathname, query }}>
      <a>
        <ButtonContainer>{label}</ButtonContainer>
      </a>
    </Link>
  )
}

export default LinkButton
