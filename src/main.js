import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router'
//三级联动全局组件
import TypeNav from '@/pages/Home/TypeNav'
//第一个参数：全局组件的name 第二个参数：对应的组件
Vue.component(TypeNav.name,TypeNav)


import {reqCategoryList} from '@/api'
reqCategoryList()


Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  //注册路由：以下写法是kv一致省略v【router是小写的】
  //注册路由信息：当这里书写router的时候，组件身上都拥有$route $router属性
  router,
}).$mount('#app')
