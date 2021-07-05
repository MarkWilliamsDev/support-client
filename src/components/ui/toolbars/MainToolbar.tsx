import LinkButton from '@/components/ui/buttons/LinkButton'

function MainToolbar() {
  const renderViewAllTicketsButton = () => (
    <LinkButton pathname={'/support'} label={'Support'} />
  )

  const renderMessagesButton = () => (
    <LinkButton pathname={'/message'} label={'Messages'} />
  )

  return (
    <div className="nav-bar">
      {renderViewAllTicketsButton()}
      {renderMessagesButton()}
    </div>
  )
}

export default MainToolbar
