import ButtonContainer from '@/components/ui/buttons/ButtonContainer'
import LinkButton from '@/components/ui/buttons/LinkButton'

function MessageToolbar() {
  return (
    <>
      <ButtonContainer
        Component={LinkButton}
        variant={'primary'}
        isOutline
        pathname={'/message/create'}
        label={'Create'}
      />
      <ButtonContainer
        Component={LinkButton}
        variant={'primary'}
        isOutline
        pathname={'/message/messages'}
        label={'All'}
      />
    </>
  )
}

export default MessageToolbar
