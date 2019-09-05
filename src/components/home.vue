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

		<!--slide-->
		<div id="slide" class="public-banner">
			<swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide>
          <img src="/static/upload/banner1.jpg.png" />
          </swiper-slide>
        <swiper-slide>
          <img src="/static/upload/banner2.jpg" />
        </swiper-slide>
      </swiper>
		</div>
		
    <!--今日促销-->	
    <div class="swiper-container">
        <swiper :options="swiperOption2">
          <!-- slides -->
          <swiper-slide>
            <div class="menu-img">
                <img src="/static/img/index (1).png" width="55" height="55" />
            </div>
            <div class="menu-txt">
              <h4>宫保鸡丁</h4>
              <p class="list2">
                <b>￥25<em>(6折)</em></b>
                <div class="btn">  
                  <button class="minus">-</button>  
                  <i>0</i>  
                  <button class="add">+</button>  
                  <i class="price">25</i>  
                </div> 
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="menu-img">
                <img src="/static/img/index (1).png" width="55" height="55" />
            </div>
            <div class="menu-txt">
              <h4>宫保鸡丁</h4>
              <p class="list2">
                <b>￥25<em>(6折)</em></b>
                <div class="btn">  
                  <button class="minus">-</button>  
                  <i>0</i>  
                  <button class="add">+</button>  
                  <i class="price">25</i>  
                </div> 
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="menu-img">
                <img src="/static/img/index (1).png" width="55" height="55" />
            </div>
            <div class="menu-txt">
              <h4>宫保鸡丁</h4>
              <p class="list2">
                <b>￥25<em>(6折)</em></b>
                <div class="btn">  
                  <button class="minus">-</button>  
                  <i>0</i>  
                  <button class="add">+</button>  
                  <i class="price">25</i>  
                </div> 
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="menu-img">
                <img src="/static/img/index (1).png" width="55" height="55" />
            </div>
            <div class="menu-txt">
              <h4>宫保鸡丁</h4>
              <p class="list2">
                <b>￥25<em>(6折)</em></b>
                <div class="btn">  
                  <button class="minus">-</button>  
                  <i>0</i>  
                  <button class="add">+</button>  
                  <i class="price">25</i>  
                </div> 
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="menu-img">
                <img src="/static/img/index (1).png" width="55" height="55" />
            </div>
            <div class="menu-txt">
              <h4>宫保鸡丁</h4>
              <p class="list2">
                <b>￥25<em>(6折)</em></b>
                <div class="btn">  
                  <button class="minus">-</button>  
                  <i>0</i>  
                  <button class="add">+</button>  
                  <i class="price">25</i>  
                </div> 
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="menu-img">
                <img src="/static/img/index (1).png" width="55" height="55" />
            </div>
            <div class="menu-txt">
              <h4>宫保鸡丁</h4>
              <p class="list2">
                <b>￥25<em>(6折)</em></b>
                <div class="btn">  
                  <button class="minus">-</button>  
                  <i>0</i>  
                  <button class="add">+</button>  
                  <i class="price">25</i>  
                </div> 
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="menu-img">
                <img src="/static/img/index (1).png" width="55" height="55" />
            </div>
            <div class="menu-txt">
              <h4>宫保鸡丁</h4>
              <p class="list2">
                <b>￥25<em>(6折)</em></b>
                <div class="btn">  
                  <button class="minus">-</button>  
                  <i>0</i>  
                  <button class="add">+</button>  
                  <i class="price">25</i>  
                </div> 
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="menu-img">
                <img src="/static/img/index (1).png" width="55" height="55" />
            </div>
            <div class="menu-txt">
              <h4>宫保鸡丁</h4>
              <p class="list2">
                <b>￥25<em>(6折)</em></b>
                <div class="btn">  
                  <button class="minus">-</button>  
                  <i>0</i>  
                  <button class="add">+</button>  
                  <i class="price">25</i>  
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
      <el-tabs :tab-position="tabPosition" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
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


export default {
  components:{
    swiper,
    swiperSlide
  },
  name: 'HelloWorld',
  data () {
    return {
      tabPosition: 'left',
      swiperOption:{},
      swiperOption2:{
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>
