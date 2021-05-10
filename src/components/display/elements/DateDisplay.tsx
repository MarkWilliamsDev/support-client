import React from 'react'

function DateDisplay({ date }: { date: Date }) {
  const dateString = new Date(date).toUTCString()

  return <>{dateString}</>
}

export default DateDisplay
