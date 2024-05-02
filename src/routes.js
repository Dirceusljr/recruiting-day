/**
 * ~> Private Route Example:
 * {
 *   path: '/licenses',
 *   pageComponent: ComponentName,
 *   breadcrumb: [{ name: 'Licenças', to: '/licenses' }, { name: 'Consulta' }],
 *   layoutComponent: LoginComponentName, (default: Layout)
 *   enabled: true, (default: true)
 * }
 *
 * ~> Public Route Example:
 * {
 *   path: '/sign-in',
 *   pageComponent: SignIn,
 *   breadcrumb: [],
 *   isPublic: true, (default: false)
 *   layoutComponent: LoginComponentName, (default: Layout)
 *   enabled: true, (default: true)
 * }
 */

import { SignIn } from '@/pages/SignIn'
import { SignUp } from '@/pages/SignUp'
import { Logout } from '@/pages/Logout'
import { Home } from '@/pages/Home'

export const routes = [
  {
    path: '/',
    pageComponent: SignIn,
    breadcrumb: [],
    isPublic: true,
  },
  {
    path: '/sign-in',
    pageComponent: SignIn,
    breadcrumb: [],
    isPublic: true,
  },
  {
    path: '/sign-up',
    pageComponent: SignUp,
    breadcrumb: [],
    isPublic: true,
  },
  {
    path: '/logout',
    pageComponent: Logout,
    isPublic: true,
  },
  {
    path: '/home',
    pageComponent: Home,
    breadcrumb: [],
    isPublic: true,
  },
]
