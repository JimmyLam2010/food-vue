<template>
  <div>
      <div class="w100 margin01rem">
        <img class="w100" src="/static/img/aboutbanner.png" />
      </div>
      <ul class="inforList">
        <li>
          <a href="about-integral.html" class="isNext">
            <span><em><img src="/static/img/about1.png"></em>我的积分</span>
            <span></span>
          </a>
        </li>
        <li>
          <a href="about-coupon.html" class="isNext">
            <span><em><img style="height: 0.43rem;"  src="/static/img/about2.png"></em>我的优惠券</span>
            <span></span>
          </a>
        </li>
        <li>
          <a href="edit-address.html" class="isNext">
            <span><em><img src="/static/img/about3.png"></em>送餐地址</span>
            <span></span>
          </a>
        </li>
        <li>
          <a href="other.html" class="isNext">
            <span><em><img src="/static/img/about4.png"></em>其他信息</span>
            <span></span>
          </a>
        </li>
        <li>
          <a href="mobile-phone.html" class="isNext">
            <span><em><img src="/static/img/about5.png"></em>绑定手机</span>
            <span></span>
          </a>
        </li>
      </ul>
      <div style="height:1.2rem;"></div>
      <nav>
        <router-link to="/">
          <img src="/static/img/index1-1.png">点餐
        </router-link>
        <a href="my-order.html" class="categoryIcon"><img src="/static/img/index2.png">订单</a>
        <a href="service.html" class="cartIcon numberCount"><img src="/static/img/index3.png">服务</a>
        <router-link to="/user" class="userIcon">
            <img src="/static/img/index4.png">我的
        </router-link>
      </nav>
  </div>
</template>


<script>
  export default {
    name:'user',
  }
</script>