import home from '@/components/home'
export default {
  path: '/',
  name: 'home',
  component: home,
  meta: {
    requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
  }
}
