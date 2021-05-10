import React from 'react'

function StringDisplay({
  content,
  label = '',
}: {
  content: string
  label?: string
}) {
  return <>{`${label}${content}`}</>
}

export default StringDisplay
