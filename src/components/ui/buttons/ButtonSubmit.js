import PropTypes from 'prop-types'

const ButtonSubmit = ({ label, classNames }) => {
  return (
    <button className={classNames} type="submit">
      {label}
    </button>
  )
}

ButtonSubmit.propTypes = {
  label: PropTypes.string,
  classNames: PropTypes.string,
}

export default ButtonSubmit
