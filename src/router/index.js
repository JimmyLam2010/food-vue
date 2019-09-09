import Vue from 'vue'
import Router from 'vue-router'

// 把分组的路由引入进来
import HomeRouter from './home'
import UserRouter from './user'
import OrderRouter from './order'
import ServicesRouter from "./services"

Vue.use(Router)

export default new Router({
  routes: [
    ...HomeRouter,
    ...UserRouter,
    ...OrderRouter,
    ...ServicesRouter
  ]
})
