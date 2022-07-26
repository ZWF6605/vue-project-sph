import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router'
//三级联动全局组件
import TypeNav from '@/components/TypeNav'
//轮播图全局组件
import Carousel from '@/components/Carousel'
//分页器全局组件
import Pagination from '@/components/Pagination'
//按需引入elementUI
import {
  MessageBox
} from 'element-ui';
//第一个参数：全局组件的name 第二个参数：对应的组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
//引入仓库
import store from '@/store'
//引入mockServe.js----mock数据
import '@/mock/mockServe'
//引入Swiper样式
import 'swiper/css/swiper.css'

//统一接收api文件夹里面全部请求函数
import * as API from './api'
//图片资源
import Luffy from '@/assets/1.gif'
Vue.config.productionTip = false

//引入插件
import VueLazyload from 'vue-lazyload'
//注册插件
Vue.use(VueLazyload, {
  //懒加载默认图片
  loading: Luffy
})


//引入自定义插件
import myPlugins from '@/plugins/myplugins'
Vue.use(myPlugins,{
  name:'upper'
})

new Vue({
  render: h => h(App),
  //全局时间总线$bus配置
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },

  //注册路由：以下写法是kv一致省略v【router是小写的】
  //注册路由信息：当这里书写router的时候，组件身上都拥有$route $router属性
  router,
  //注册仓库：组件实例的身上会多一个$store属性
  store
}).$mount('#app')