import PropTypes from 'prop-types'

function InfoHeaderContainer({ children }) {
  return <div className="bg-light border rounded-top p-2">{children}</div>
}

InfoHeaderContainer.propTypes = {
  children: PropTypes.node,
}

export default InfoHeaderContainer
