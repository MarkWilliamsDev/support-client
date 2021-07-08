import ButtonContainer from '@/components/ui/buttons/ButtonContainer'
import LinkButton from '@/components/ui/buttons/LinkButton'

function MessageToolbar() {
  return (
    <>
      <ButtonContainer
        Component={LinkButton}
        variant={'primary'}
        isOutline
        pathname={'/global/message'}
        query={{ pageMode: 'create' }}
        label={'Create'}
      />
      <ButtonContainer
        Component={LinkButton}
        variant={'primary'}
        isOutline
        pathname={'/global/message'}
        query={{ pageMode: 'all' }}
        label={'All'}
      />
    </>
  )
}

export default MessageToolbar
