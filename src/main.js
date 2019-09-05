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


//设置全局
Vue.use(Tabs);
Vue.use(TabPane);

//验证码
Vue.use(SlideVerify);

//设置请求方式
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
