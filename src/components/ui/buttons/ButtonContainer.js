const ButtonContainer = ({
  Component,
  isOutline,
  variant,
  label,
  pathname,
  query,
  onClick,
  isDisabled,
}) => {
  const outlineButtonClass = isOutline ? ' btn-outline-' : ' btn-'
  const disabledClass = isDisabled ? ' disabled' : ''
  const classNames = `btn${outlineButtonClass}${variant}${disabledClass}`

  return (
    <Component
      onClick={onClick}
      classNames={classNames}
      label={label}
      pathname={pathname}
      query={query}
      isDisabled={isDisabled}
    />
  )
}

export default ButtonContainer
