import home from '@/components/home'
import map from '@/components/map'
import search from '@/components/search'
export default [
  {
    path: '/',
    name: 'home',
    component: home,
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    }
  },
  {
    path: '/map',
    name: 'map',
    component: map,
  },
  {
    path: '/search',
    name: 'search',
    component: search,
  }
]
