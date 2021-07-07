const ButtonContainer = ({
  Component,
  isOutline,
  variant,
  label,
  pathname,
  query,
}) => {
  const outlineButtonClass = isOutline ? 'btn-outline-' : 'btn-'

  const classNames = `btn ${outlineButtonClass}${variant}`

  return (
    <Component
      classNames={classNames}
      label={label}
      pathname={pathname}
      query={query}
    />
  )
}

export default ButtonContainer
