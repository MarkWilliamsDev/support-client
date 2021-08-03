import PropTypes from 'prop-types'

function ButtonFunctional({ onClick, classNames, label, isDisabled }) {
  return (
    <button className={classNames} onClick={onClick} disabled={isDisabled}>
      {label}
    </button>
  )
}

ButtonFunctional.propTypes = {
  onClick: PropTypes.func,
  classNames: PropTypes.string,
  label: PropTypes.string,
  isDisabled: PropTypes.bool,
}

export default ButtonFunctional
