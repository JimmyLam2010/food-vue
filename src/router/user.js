import user from '@/components/user'
import register from '@/components/register'
import login from '@/components/login'
export default [
  {
    path: '/user',
    name: 'user',
    component: user
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]
