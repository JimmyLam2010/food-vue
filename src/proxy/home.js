import {request} from '../services/request'


export default {

  //banner部分
  homeBanner(params = {})
  {
    return request({
      method:"post",
      url:"/api/home.php?action=banner",
      params: params
    })
  },
  //hot
  hotFood(params = {}) {
    return request({
      method: "post",
      url: "/api/home.php?action=hotfood",
      params: params
    })
  },
  //分类
  foodCate(params = {}) {
    return request({
      method: "post",
      url: "/api/home.php?action=foodcate",
      params: params
    })
  },
  //指定分类
  foodList(params = {}) {
    return request({
      method: "post",
      url: "/api/home.php?action=foodlist",
      params: params
    })
  },
}
