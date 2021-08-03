import PropTypes from 'prop-types'

const SubToolbarContainer = ({ children }) => {
  return <div className="nav-bar bg-light px-1 py-1">{children}</div>
}

SubToolbarContainer.propTypes = {
  children: PropTypes.node,
}

export default SubToolbarContainer
