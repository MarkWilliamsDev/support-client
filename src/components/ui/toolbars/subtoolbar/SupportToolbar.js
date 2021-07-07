import LinkButton from '../../buttons/LinkButton'
import ButtonContainer from '@/components/ui/buttons/ButtonContainer'

const SupportToolbar = () => {
  return (
    <>
      <ButtonContainer
        Component={LinkButton}
        label={'Tickets'}
        pathname={'/support/tickets'}
        variant={'primary'}
        isOutline
      />
    </>
  )
}

export default SupportToolbar
