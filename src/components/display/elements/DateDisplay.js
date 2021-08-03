import PropTypes from 'prop-types'

function DateDisplay({ date }) {
  const dateString = new Date(date).toUTCString()
  return <>{dateString}</>
}

DateDisplay.propTypes = {
  date: PropTypes.string,
}

export default DateDisplay
