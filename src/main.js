// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//ElementUI 
import {Tabs,TabPane} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//验证码
import SlideVerify from 'vue-monoplasty-slide-verify';

//http 异步请求
import axios from 'axios'
import VueAxios from 'vue-axios'

//弹出框
import { Alert, Confirm, Toast, Loading } from 'wc-messagebox'
import 'wc-messagebox/style.css'

//cookies
import VueCookies from 'vue-cookies'


//百度地图
import BaiduMap from 'vue-baidu-map'


//设置全局
Vue.use(Tabs);
Vue.use(TabPane);

//验证码
Vue.use(SlideVerify);

//设置请求方式
Vue.use(VueAxios, axios);

//设置弹出框
let duration = 200;
Vue.use(Alert)
Vue.use(Confirm)
Vue.use(Toast, duration)
Vue.use(Loading)

//设置cookie
Vue.use(VueCookies)


//设置挂载
Vue.use(BaiduMap,{
  ak:"ubnAS9NZvICXBhNbwMF9S5P6eM8hCcIe"
});


//增加一个路由方法用来判断是否登录
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth)
  {
    //如果requireAuth属性返回true说明要登录
    var user = VueCookies.get("user");
    if(user)
    {
      next();  //继续往下走
    }else{
      next('/login'); //如果没有cookie就返回登录
    }
  }else{
    next(); //继续往下走
  }
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
