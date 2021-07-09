function TextArea({
  register,
  name,
  ariaLabel,
  id,
  rows = 5,
  label,
  defaultValue,
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea
        {...register(name)}
        className="form-control"
        aria-label={ariaLabel}
        id={id}
        rows={rows}
        defaultValue={defaultValue}
      />
    </>
  )
}

export default TextArea
