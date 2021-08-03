import Link from 'next/link'
import PropTypes from 'prop-types'

const LinkContainer = ({ children, pathname, query }) => {
  return (
    <Link href={{ pathname, query }}>
      <a style={{ textDecoration: 'none', color: 'inherit' }}>{children}</a>
    </Link>
  )
}

LinkContainer.propTypes = {
  children: PropTypes.node,
  pathname: PropTypes.string,
  query: PropTypes.object,
}

export default LinkContainer
