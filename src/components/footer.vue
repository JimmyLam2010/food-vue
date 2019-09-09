<template>
  <nav :class="{'active':active}">
    <router-link to="/">
      <img src="/static/img/index1-1.png">点餐
    </router-link>
    <router-link to="/orderAdd" class="userIcon">
        <img src="/static/img/index4.png">购物车
    </router-link>
    <router-link to="/orderlist" class="categoryIcon">
      <img src="/static/img/index2.png">订单
    </router-link>
    <router-link to="/services" class="cartIcon numberCount">
      <img src="/static/img/index3.png">服务
    </router-link>
    <router-link to="/user" class="userIcon">
        <img src="/static/img/index4.png">我的
    </router-link>
  </nav>
</template>

<script>
  export default {
    name:"footerComponent",
    props:[
      "active"
    ],
  }
</script>

<style>
.active{
  display: none;
}
</style>