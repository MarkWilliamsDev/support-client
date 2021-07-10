function TextInput({ id, name, register, ariaLabel, label, defaultValue }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        className="form-control"
        id={id}
        type="text"
        {...register(name)}
        aria-label={ariaLabel}
        defaultValue={defaultValue}
      />
    </>
  )
}

export default TextInput
