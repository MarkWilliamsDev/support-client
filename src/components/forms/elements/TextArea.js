function TextArea({ register, name, ariaLabel, id, rows = 5 }) {
  return (
    <textarea
      {...register(name)}
      className="form-control"
      aria-label={ariaLabel}
      id={id}
      rows={rows}
    ></textarea>
  )
}

export default TextArea
