import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'

export const NavItem = ({ path, text = '', className, icon }) => {
  const { pathname } = useLocation()

  return (
    <Link
      to={path}
      className={classNames('p-2 hover:text-gray-700/70', className, {
        'text-gray-700 rounded border border-gray-700': pathname === path,
      })}
    >
      {icon ? icon + text : text}
    </Link>
  )
}
