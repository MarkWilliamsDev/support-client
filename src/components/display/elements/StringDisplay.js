function StringDisplay({ content, label = '' }) {
  return <div style={{ whiteSpace: 'pre-wrap' }}>{`${label}${content}`}</div>
}

export default StringDisplay
