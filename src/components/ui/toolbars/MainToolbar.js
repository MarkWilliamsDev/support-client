import ButtonContainer from '@/components/ui/buttons/ButtonContainer'
import LinkButton from '@/components/ui/buttons/LinkButton'

function MainToolbar() {
  const renderViewAllTicketsButton = () => (
    <ButtonContainer
      variant={'primary'}
      pathname={'/support'}
      label={'Support'}
      Component={LinkButton}
    />
  )

  const renderMessagesButton = () => (
    <ButtonContainer
      variant={'primary'}
      pathname={'/message'}
      label={'Messages'}
      Component={LinkButton}
    />
  )

  return (
    <div className="row justify-content-start">
      <div className="col-auto">{renderViewAllTicketsButton()}</div>
      <div className="col-auto">{renderMessagesButton()}</div>
    </div>
  )
}

export default MainToolbar
