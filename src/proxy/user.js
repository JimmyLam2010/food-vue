import {request} from '../services/request'


export default {

  //注册请求
  userRegister(params)
  {
    return request({
      method:"post",
      url:"/api/user.php?action=register",
      params: params
    })
  },

  //登录请求
  userLogin(params)
  {
    return request({
      method:"post",
      url:"/api/user.php?action=login",
      params:params
    })
  }
}
