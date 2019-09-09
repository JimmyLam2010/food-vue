import orderAdd from '@/components/orderAdd'
import orderlist from '@/components/orderlist'
export default [
  {
    path: '/orderAdd',
    name: 'orderAdd',
    component: orderAdd,
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    }
  },
  {
    path: '/orderlist',
    name: 'orderlist',
    component: orderlist,
    meta: {
      requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    }
  }
]
