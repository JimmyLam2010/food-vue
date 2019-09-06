import user from '@/components/user'
import register from '@/components/register'
import login from '@/components/login'
export default [
  {
    path: '/user',
    name: 'user',
    component: user,
    meta:{
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    }
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
