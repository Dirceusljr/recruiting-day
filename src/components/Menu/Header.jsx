import { Link, useNavigate } from 'react-router-dom'
import { Logo } from '../Common'
import classNames from 'classnames'
import { useAuth } from '@/contexts'
import { NavItem } from './NavItem'

export const Header = () => {
  const navigate = useNavigate()
  const { setToken } = useAuth()

  return (
    <nav className='flex items-center justify-between flex-wrap bg-transparent mb-4'>
      <Link className='flex items-center shrink-0 text-white mr-6' to='/'>
        <Logo width={120} />
      </Link>
      <div className='flex gap-6 items-center justify-center text-gray-700 font-bold text-base '>
        <NavItem path={'/license'} text='license' />
        <NavItem path={'/dashboard'} text='Dashboard' />
        <NavItem path={'/network'} text='network' />
        <NavItem path={'/withdraw'} text='withdraw' />
        <NavItem path={'/extract'} text='extract' />
        <NavItem path={'/profile'} text='profile' />
        <NavItem path={'/sign-in'} text='signIn' />
        <NavItem path={'/sign-up'} text='signUp' />
        <a
          onClick={() => {
            setToken(null)
            navigate('/sign-in', { replace: true })
          }}
          className={classNames('cursor-pointer p-2  hover:text-gray-700/70')}
        >
          Sair
        </a>
      </div>
    </nav>
  )
}
