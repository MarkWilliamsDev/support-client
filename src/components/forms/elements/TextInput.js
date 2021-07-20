function TextInput({ id, name, ariaLabel, label, defaultValue }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        className="form-control"
        id={id}
        type="text"
        aria-label={ariaLabel}
        defaultValue={defaultValue}
      />
    </>
  )
}

export default TextInput
