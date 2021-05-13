import LinkButton from '../buttons/LinkButton'

function MainToolbar() {
  return (
    <div className="nav-bar">
      <LinkButton pathname={'/support/tickets'} label={'View All Tickets'} />
    </div>
  )
}

export default MainToolbar
