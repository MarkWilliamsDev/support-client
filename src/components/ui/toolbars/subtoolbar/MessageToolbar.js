import ButtonContainer from '@/components/ui/buttons/ButtonContainer'
import LinkButton from '@/components/ui/buttons/LinkButton'
import { pageModes } from '@/config/globalVariables'

function MessageToolbar() {
  return (
    <>
      <ButtonContainer
        Component={LinkButton}
        variant={'primary'}
        isOutline
        pathname={'/global/message'}
        query={{ pageMode: pageModes.CREATE }}
        label={'Create'}
      />
      <ButtonContainer
        Component={LinkButton}
        variant={'primary'}
        isOutline
        pathname={'/global/message'}
        query={{ pageMode: pageModes.ALL }}
        label={'All'}
      />
    </>
  )
}

export default MessageToolbar
