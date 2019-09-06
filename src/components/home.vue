<template>
  <div>
    <!--header-->
		<header >
			<a href="scanCode.html" class="location" id="location" data-title-type="native">
				<img src="/static/img/sys.png" />
			</a>

			<div class="top-sch-box flex-col logoIcon">
				<a>
					<aside class="index-searchArea">
						<input class="input-text-searchArea" type="text" placeholder="请输入餐品" />
						<input type="button" value="&#63;" class="input-searchBtn" />
					</aside>
				</a>
			</div>
			<a class="rt_searchIcon" href="map.html"><img style="width:70%;" src="/static/img/mapIcon.png"></a>
		</header>

		<!--banner-->
		<div id="slide" class="public-banner">
			<swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item in bannerFood" v-bind:key="item.id">
          <img :src="item.thumb" />
        </swiper-slide>

      </swiper>
		</div>
		
    <!--今日促销-->	
    <div class="swiper-container foodhot">
      <swiper :options="swiperOption2">
        <!-- slides -->
        <swiper-slide v-for="(item) in hotFood" v-bind:key="item.id">
          <div class="menu-img">
              <img :src="item.thumb" />
          </div>
          <div class="menu-txt">
            <h4>{{item.name}}</h4>
            <p class="list2">
              <b>￥{{item.price}}</b>
              <div class="btn">  
                <button class="minus">-</button>  
                <i>0</i>  
                <button class="add">+</button>  
              </div> 
            </p>
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
      
    <!--分类商品-->
    <div class="main">
      <el-tabs v-model="activeName" :tab-position="tabPosition" @tab-click="handleClick">
        <el-tab-pane v-for="(item,key) in foodCate" :label="item.name" :name="item.name" v-bind:key="item.id">
          <div class="swiper-container foodcate">
            <swiper :options="swiperOption3">
              <!-- slides -->
              <swiper-slide v-for="item in foodList" v-bind:key="item.id">
                <div class="menu-img">
                    <img :src="item.thumb" />
                </div>
                <div class="menu-txt">
                  <h4>{{item.name}}</h4>
                  <p class="list2">
                    <b>￥{{item.price}}</b>
                    <div class="btn">  
                      <button class="minus">-</button>  
                      <i>0</i>  
                      <button class="add">+</button>  
                    </div> 
                  </p>
                </div>
              </swiper-slide>
              <!-- Optional controls -->
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>

    <div class="footer">  
      <div class="left">
        <span id="cartN">
          <img src="/static/img/shop_03.png"/>
          <span id="totalcountshow">0</span>
          <span class="totalpriceshow">￥<em id="totalpriceshow">0</em></span>
        </span>				
        </div>  
      <div class="right">  
        <a id="btnselect" class="xhlbtn  disable" href="order-settlement.html">去结算</a>  
      </div>   
    </div>
    <div style="height:1.2rem;"></div>
  </div>
</template>

<script>
//轮播图
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import proxy from '../proxy/index'

export default {
  components:{
    swiper,
    swiperSlide
  },
  name: 'HelloWorld',
  created(){
    proxy.homeBanner().then((response) => {
      this.bannerFood = response.data;
    });

    proxy.hotFood().then((response) => {
      this.hotFood = response.data;
    });

    proxy.foodCate().then((response) => {
      this.foodCate = response.data.foodcate;
      this.foodList = response.data.foodlist;
      this.activeName = this.foodCate[0].name;
    });
    
  },
  data () {
    return {
      activeName:"first",
      tabPosition: 'left',
      swiperOption:{
        autoplay : 1000,
      },
      swiperOption2:{
        autoplay : 5000,
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      swiperOption3:{
        direction : 'vertical',
        slidesPerView: 3,
        spaceBetween: 30,
        // autoHeight:true,
        height:200,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      bannerFood:[],
      hotFood:[],
      foodCate:[],
      foodList:[],
    }
  },
  methods: {
    handleClick(tab, event) {
      var index = tab.index ? tab.index : 0;
      var cateid = this.foodCate[index] ? this.foodCate[index].id : 0;
      proxy.foodList({cateid:cateid}).then(response => {
        this.foodList = response.data;
      });
    },
  }
}
</script>

<style scoped>
.menu-img{
  width:100%;
}

.menu-img img{
  width:100%;
  height:100%;
}

.foodhot .swiper-slide{
  margin:10px auto;
  margin-left:10px!important;
  margin-right:10px!important;
}

.foodhot .swiper-slide:nth-child(even)
{
  margin-left:0px!important;
}

.menu-txt h4{
  text-align:left;
}

.menu-txt .list2{
  color:red;
}

.menu-txt .btn{
    background-color: transparent;
    position: absolute;
    right: 1%;
    top: 84%;
    cursor: pointer;
}

.menu-txt .btn button{
  background-color: #26C400;
  color: #fff;
  font-size: .3rem;
  width: 0.459rem;
  height: 0.459rem;
  border-radius: .5rem;
}

/* 分类 */
.foodcate{
  height:300px;
}
.foodcate .menu-img{
  width:35%;
  float:left;
}

.foodcate .menu-txt{
  float:left;
  margin-left:10px;
  width:60%;
}

.foodcate .menu-txt h4{
  margin:0;
  font-size:16px;
  margin-bottom:10px;
}

.foodcate .menu-txt .list2{
    color:red;
}

.foodcate .menu-txt .btn{
  background-color: transparent;
  position: absolute;
  right: 1%;
  top: 7%;
  cursor: pointer;
}
</style>