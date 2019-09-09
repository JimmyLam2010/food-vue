import {request} from '../services/request'


export default {

  //获取订单购物车数据
  orderCart(params = {})
  {
    return request({
      method:"post",
      url:"/api/order.php?action=ordercart",
      params: params
    })
  },
  orderAdd(params = {}) {
    return request({
      method: "post",
      url: "/api/order.php?action=orderadd",
      params: params
    })
  },
}
