function TextArea({ register, name, ariaLabel, id, rows = 5, label }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea
        {...register(name)}
        className="form-control"
        aria-label={ariaLabel}
        id={id}
        rows={rows}
      />
    </>
  )
}

export default TextArea
