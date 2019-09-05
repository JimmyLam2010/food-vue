<template>
  <nav>
    <router-link to="/">
      <img src="/static/img/index1-1.png">点餐
    </router-link>
    <a href="my-order.html" class="categoryIcon">
      <img src="/static/img/index2.png">订单
    </a>
    <a href="service.html" class="cartIcon numberCount">
      <img src="/static/img/index3.png">服务
    </a>
    <router-link to="/user" class="userIcon">
        <img src="/static/img/index4.png">我的
    </router-link>
  </nav>
</template>

<script>
  export default {
    name:"footerComponent"
  }
</script>