import PropTypes from 'prop-types'

function ItemDisplayToolbar({ children }) {
  return <div className="border rounded-bottom bg-light px-4 py-2">{children}</div>
}

ItemDisplayToolbar.propTypes = {
  children: PropTypes.node,
}

export default ItemDisplayToolbar
