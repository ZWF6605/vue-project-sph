//配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./routes"
//使用插件
Vue.use(VueRouter)
//引入store
import store from '@/store'


//先把VueRouter原型对象的push，先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace

//重写push|replace
//第一个参数：告诉原来的push方法，往哪里跳转（传递哪些参数）
//第二个参数：成功的回调
//第三个参数：失败的回调
//call||apply区别
//相同点：都可以调用一次函数，都可以篡改函数的上下文一次
//不同点：call与apply传递参数：call传递参数用逗号隔开，apply方法执行，传递数据
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {

        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => {}, () => {})
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {

        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => {}, () => {})
    }
}
//配置路由
let router = new VueRouter({
    //配置路由
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            //返回这个y=0，代表定位到滚动条的最上方
            y: 0
        }
    }
})

//全局守卫：前置守卫（在路由跳转之间进行判断）
router.beforeEach(async (to, from, next) => {
    //to:可以获取到你要跳转到那个路由信息
    //from:可以获取到你从哪个路由而来的信息
    //next:放行函数  next()放行  next(path)放行到指定路由 next(false)
    // next()
    //用户登录了，才会有token，未登录一定不会有token
    let name = store.state.user.userInfo.name
    let token = store.state.user.token
    if (token) {
        //用户已经登录了
        if (to.path == '/login') {
            next('/')
        } else {
            //登录，去的不是login【home|search|datail|shopcart】
            //如果已有用户名
            if (name) {
                next()
            } else {
                //没有用户信息，派发action让仓库存储用户信息再跳转
                try {
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    //token失效了获取不到用户信息
                    //清楚token
                    await store.dispatch('userLogout')
                    next('/login')
                }

            }
        }
    } else {
        //未登录：不能去交易相关页面、支付相关、个人中心
        //未登录去上列页面---跳转到登录页，其余的放行
        let toPath=to.path
        if(toPath.indexOf('/trade')!=-1 || toPath.indexOf('/pay')!=-1||toPath.indexOf('/center')!=-1){
            //把未登录的时候想去而没有去成的信息，存储于地址栏中【路由】
            next('login?redirect='+toPath)
        }else{
            next()
        }
    }
})
export default router