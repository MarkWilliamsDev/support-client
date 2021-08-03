import PropTypes from 'prop-types'

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

ButtonContainer.propTypes = {
  Component: PropTypes.func,
  isOutline: PropTypes.bool,
  variant: PropTypes.string,
  label: PropTypes.string,
  pathname: PropTypes.string,
  query: PropTypes.object,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
}

export default ButtonContainer
