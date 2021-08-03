import PropTypes from 'prop-types'

function TextArea({ name, ariaLabel, id, rows = 5, label, defaultValue, register }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea
        className="form-control"
        aria-label={ariaLabel}
        id={id}
        rows={rows}
        defaultValue={defaultValue}
        {...register(name)}
      />
    </>
  )
}

TextArea.propTypes = {
  name: PropTypes.string,
  ariaLabel: PropTypes.string,
  id: PropTypes.string,
  rows: PropTypes.number,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  register: PropTypes.func,
}

export default TextArea
