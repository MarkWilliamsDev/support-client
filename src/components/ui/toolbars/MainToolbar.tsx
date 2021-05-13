import LinkButton from '../buttons/LinkButton'

function MainToolbar() {
  const renderViewAllTicketsButton = () => {
    return (
      <LinkButton pathname={'/support/tickets'} label={'View All Tickets'} />
    )
  }

  return <div className="nav-bar">{renderViewAllTicketsButton()}</div>
}

export default MainToolbar
