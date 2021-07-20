function TextInput({ id, name, ariaLabel, label, defaultValue, register }) {
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
      />
    </>
  )
}

export default TextInput
