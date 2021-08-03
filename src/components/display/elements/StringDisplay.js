import PropTypes from 'prop-types'

function StringDisplay({ content, label = '' }) {
  return <div style={{ whiteSpace: 'pre-wrap' }}>{`${label}${content}`}</div>
}

StringDisplay.propTypes = {
  content: PropTypes.string,
  label: PropTypes.string,
}

export default StringDisplay
