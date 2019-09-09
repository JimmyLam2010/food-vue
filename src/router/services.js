import services from '@/components/services'
export default [
  {
    path: '/services',
    name: 'services',
    component: services,
    meta:{
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    }
  },
]
