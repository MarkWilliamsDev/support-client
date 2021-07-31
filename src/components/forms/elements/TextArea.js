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

export default TextArea
