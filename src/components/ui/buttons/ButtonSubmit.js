const ButtonSubmit = ({ label, classNames }) => {
  return (
    <button className={classNames} type="submit">
      {label}
    </button>
  )
}

export default ButtonSubmit
