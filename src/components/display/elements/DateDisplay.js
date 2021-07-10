function DateDisplay({ date }) {
  const dateString = new Date(date).toUTCString()
  return <>{dateString}</>
}

export default DateDisplay
