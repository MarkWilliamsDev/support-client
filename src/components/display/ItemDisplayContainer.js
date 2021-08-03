import PropTypes from 'prop-types'

function ItemDisplayContainer({ children }) {
  return <>{children}</>
}

ItemDisplayContainer.propTypes = {
  children: PropTypes.node,
}

export default ItemDisplayContainer
