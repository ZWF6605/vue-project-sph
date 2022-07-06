import Vuex from 'vuex'
import Vue from 'vue'
//需要使用插件一次
Vue.use(Vuex)
//引入小仓库
import home from './home'
import search from './search'
import detail from './detail'
//对外暴露Store类的一个实例
export default new Vuex.Store({
    //实现Vuex仓库模块化式开发存储数据
    modules:{
        home,
        search,
        detail
    }
})