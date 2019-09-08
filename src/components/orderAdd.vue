<template>
  <div>
    <div class="pay-order-header">
			<ul>
				<li>订单详情</li>
			</ul>
		</div>
    <div class="invoice" id="order-settlement">
      <span>
        <input type="radio" v-model="order.ordertype" name="ordertype" value="0"> 即时 
      </span>
      <span>
        <input type="radio" v-model="order.ordertype" name="ordertype" value="1">预约时间
        <input type="date" id="endTime" v-model="order.ordertime" class="kbtn" placeholder="预约时间" />
      </span>
    </div>
    <table width="100%" class="bg-fff order-det-cont" >
      <tbody>
        <tr style="border-bottom: solid 8px #f1f1f1;">
          <td align="left" class="padl3">就餐地点</td>
          <td align="right" width="50%">合肥南站店</td>	
        </tr>
        <tr>
          <td align="left" class="padl3" style="color:#999">餐品详情</td>
          <td align="right" width="50%" style="color:#999">更多<img style="width:.3rem;" src="/static/img/jtx1.png" /></td>	
        </tr>
        <tr v-for="item in cart" v-bind:key="item.id">
          <td align="left" class="padl3">{{item.name}}</td>
          <td align="left" width="50%">×
            <em>{{item.foodnum}}</em>
            <span :style="{float:'right',lineHeight:'20px',marginTop:'10px'}">￥{{item.price}}</span>
          </td>	
        </tr>
        <tr>
          <td align="left" colspan="1" class="padl3">餐品总额</td>
          <td align="right" class="padr3">￥<em>{{order.price}}</em></td>
        </tr>		
        <tr style="border-top: solid 8px #f1f1f1;">
          <td align="left" colspan="1" class="padl3">实付金额:</td>
          <td align="right" class="padr3">
            <a class="padding-right23 colorf00">￥{{order.price}}</a>
          </td>
        </tr>			
      </tbody>
    </table>
    <div style="height:1rem;"></div>
    <div class="order-set-paybutton">
      <router-link to="/" class="paybutton-left fl" style="width: 40%;text-align: center;">返回</router-link>
      <div class="paybutton-right fr" style="width: 60%;text-align: center;"><a @click.prevent="orderAdd">确认订单</a></div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
  import proxy from '../proxy/index'
  export default {
    name:"orderAddd",
    created()
    {
      this.$emit("isActive",true);
      let userid = this.$cookies.get("user").userid ? this.$cookies.get("user").userid : 0;
      let data = {userid:userid}
      proxy.orderCart(data).then(response => {
        this.cart = response.data.cart;
        this.order.price = response.data.cartBack.price;
      })
    },
    data()
    {
      return {
        cart:[],
        order:{
          ordertype:0,
          ordertime:null,
          price:0,
        }
      }
    },
    methods:{
      orderAdd()
      {
        let data = {
          order:this.order,
          cart:this.cart,
          userid:this.$cookies.get('user').userid
        };
        proxy.orderAdd(data).then(response => {
          console.log(response);
          return false;
        });
      }
    }
  }
</script>

<style>
  #endTime{
    width:55%;
  }
</style>