import React from 'react'

function StringDisplay({ content, label }: { content: string; label: string }) {
  return <div>{`${label}${content}`}</div>
}

export default StringDisplay
