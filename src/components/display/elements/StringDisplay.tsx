import React from 'react'

function StringDisplay({
  content,
  label = '',
}: {
  content: string
  label?: string
}) {
  return <div style={{ whiteSpace: 'pre-wrap' }}>{`${label}${content}`}</div>
}

export default StringDisplay
