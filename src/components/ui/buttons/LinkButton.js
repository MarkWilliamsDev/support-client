import Link from 'next/link'
import PropTypes from 'prop-types'

function LinkButton({ pathname, query, label, classNames }) {
  return (
    <Link href={{ pathname, query }}>
      <a className={`${classNames}`}>{label}</a>
    </Link>
  )
}

LinkButton.propTypes = {
  pathname: PropTypes.string,
  query: PropTypes.object,
  label: PropTypes.string,
  classNames: PropTypes.string,
}

export default LinkButton
