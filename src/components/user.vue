<template>
  <div>
      <div class="w100 margin01rem userInfo">
        <div class="avatar">
          <img :src="user.avatar" />
        </div>
      </div>
      <ul class="inforList">
        <li>
          <a href="other.html" class="isNext">
            <span><em><img src="/static/img/about4.png"></em>个人资料</span>
            <span></span>
          </a>
        </li>
        <li>
          <a href="edit-address.html" class="isNext">
            <span><em><img src="/static/img/about3.png"></em>我的订单</span>
            <span></span>
          </a>
        </li>
        <li>
          <a href="about-integral.html" class="isNext">
            <span><em><img src="/static/img/about1.png"></em>余额充值</span>
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
          <a href="about-coupon.html" class="isNext">
            <span><em><img style="height: 0.43rem;"  src="/static/img/about2.png"></em>退出</span>
            <span></span>
          </a>
        </li>
        
      </ul>
      <div style="height:1.2rem;"></div>
  </div>
</template>


<script>
  export default {
    name:'user',
    created(){
      this.$emit("isActive",false);
    },
    data(){
      return {
        user:this.$cookies.get("user")
      }
    }
  }
</script>

<style>
  .userInfo{
    width:100%;
    height:150px;
    background:url('../../static/img/aboutbanner.png') no-repeat;
    background-size:100%;
    padding-top:40px;
  }

  .avatar{
    width:80px;
    height:80px;
    border-radius: 100%;
    overflow: hidden;
    margin:0 auto;
  }

  .avatar img{
    width:100%;
    height:100%;
  }
  
</style>