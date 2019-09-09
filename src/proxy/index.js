import userProxy from './user'  //用户请求封装
import homeProxy from './home'  //首页请求封装
import orderProxy from './order'  //订单类的请求封装

export default {
  ...userProxy,
  ...homeProxy,
  ...orderProxy
}