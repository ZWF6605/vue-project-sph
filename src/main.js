import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router'
//三级联动全局组件
import TypeNav from '@/components/TypeNav'
//轮播图全局组件
import Carousel from '@/components/Carousel'
//第一个参数：全局组件的name 第二个参数：对应的组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)

//引入仓库
import store from '@/store'
//引入mockServe.js----mock数据
import '@/mock/mockServe'
//引入Swiper样式
import 'swiper/css/swiper.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //全局时间总线$bus配置
  beforeCreate() {
    Vue.prototype.$bus = this
  },

  //注册路由：以下写法是kv一致省略v【router是小写的】
  //注册路由信息：当这里书写router的时候，组件身上都拥有$route $router属性
  router,
  //注册仓库：组件实例的身上会多一个$store属性
  store
}).$mount('#app')