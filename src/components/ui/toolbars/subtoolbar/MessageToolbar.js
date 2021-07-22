import ButtonContainer from '@/components/ui/buttons/ButtonContainer'
import LinkButton from '@/components/ui/buttons/LinkButton'
import { pageModes } from '@/config/globalVariables'

function MessageToolbar({ itemId, pageMode }) {
  const renderCreateButton = () => {
    const { CREATE } = pageModes
    return (
      <ButtonContainer
        Component={LinkButton}
        variant={'primary'}
        isOutline
        pathname={'/global/message'}
        query={{ pageMode: CREATE }}
        label={'Create'}
        isDisabled={pageMode === CREATE}
      />
    )
  }

  const renderAllButton = () => {
    const { ALL } = pageModes
    return (
      <ButtonContainer
        Component={LinkButton}
        variant={'primary'}
        isOutline
        pathname={'/global/message'}
        query={{ pageMode: ALL }}
        label={'All'}
        isDisabled={pageMode === ALL}
      />
    )
  }

  const renderEditButton = () => {
    const { EDIT } = pageModes
    return (
      <ButtonContainer
        Component={LinkButton}
        variant={'primary'}
        isOutline
        label={'Edit'}
        pathname={'/global/message'}
        query={{ pageMode: EDIT, itemId }}
        isDisabled={pageMode === EDIT}
      />
    )
  }

  const renderViewButton = () => {
    const { VIEW } = pageModes
    return (
      <ButtonContainer
        Component={LinkButton}
        variant={'primary'}
        isOutline
        label={'View'}
        pathname={'/global/message'}
        query={{ pageMode: VIEW, itemId }}
        isDisabled={pageMode === VIEW}
      />
    )
  }

  return (
    <>
      {renderCreateButton()}
      {renderAllButton()}
      {renderEditButton()}
      {renderViewButton()}
    </>
  )
}

export default MessageToolbar
