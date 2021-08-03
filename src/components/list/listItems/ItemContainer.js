import PropTypes from 'prop-types'

function ItemContainer({ children }) {
  return <>{children}</>
}

ItemContainer.propTypes = {
  children: PropTypes.node,
}

export default ItemContainer
