import PropTypes from 'prop-types'

function TextInput({ id, name, ariaLabel, label, defaultValue, register, isRequired = false }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        className="form-control"
        {...register(name)}
        id={id}
        type="text"
        aria-label={ariaLabel}
        defaultValue={defaultValue}
        required={isRequired}
      />
    </>
  )
}

TextInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  ariaLabel: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  register: PropTypes.func,
}

export default TextInput
