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

import { Dashboard } from '@/pages/Dashboard'
import { Extract } from '@/pages/Extract'
import { License } from '@/pages/License'
import { Profile } from '@/pages/Profile'
import { Withdraw } from '@/pages/Withdraw'
import { SignIn } from '@/pages/SignIn'
import { SignUp } from '@/pages/SignUp'
import { Network } from '@/pages/Network'
import { Logout } from '@/pages/Logout'
import { DesignPage } from '@/pages/Home'

export const routes = [
  {
    path: '/',
    pageComponent: SignIn,
    breadcrumb: [],
    isPublic: true,
  },
  {
    path: '/design',
    pageComponent: DesignPage,
    breadcrumb: [],
    isPublic: true,
  },
  {
    path: '/dashboard',
    pageComponent: Dashboard,
    breadcrumb: [],
    isPublic: true,
  },
  {
    path: '/extract',
    pageComponent: Extract,
    breadcrumb: [],
    isPublic: true,
  },
  {
    path: '/license',
    pageComponent: License,
    breadcrumb: [],
    isPublic: true,
  },
  {
    path: '/network',
    pageComponent: Network,
    breadcrumb: [],
    isPublic: true,
  },
  {
    path: '/profile',
    pageComponent: Profile,
    breadcrumb: [],
    isPublic: true,
  },
  {
    path: '/withdraw',
    pageComponent: Withdraw,
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
    path: '/afiliados/:indicatedCode',
    pageComponent: SignUp,
    isPublic: true,
  },
  {
    path: '/logout',
    pageComponent: Logout,
    isPublic: true,
  },
]
