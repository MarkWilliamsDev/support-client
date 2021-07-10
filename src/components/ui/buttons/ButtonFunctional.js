function ButtonFunctional({ onClick, classNames, label, isDisabled }) {
  return (
    <button className={classNames} onClick={onClick} disabled={isDisabled}>
      {label}
    </button>
  )
}

export default ButtonFunctional
