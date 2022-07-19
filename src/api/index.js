//当前这个模块:API进行统一管理
//引入二次封装的axios（带有请求、响应的拦截器）
import requests from "./request";
import mockRequests from "./mockAjax"

//三级联动接口
///api/product/getBaseCategoryList  get  无参数
//发请求:axios发请求返回结果Promise对象
export const reqCategoryList = () => requests({
    url: '/product/getBaseCategoryList',
    method: 'get'
})

//获取banner（Home首页轮播图接口）
export const reqGetBannerList = () => mockRequests({
    url: '/banner',
    method: 'get'
})

//获取floor
export const reqGetFloorList = () => mockRequests({
    url: "/floor",
    method: 'get'
})

//获取search页面数据
//地址：/api/list 请求方式：post 参数：需要带参数
/*
    {
    "category3Id": "61",
    "categoryName": "手机",
    "keyword": "小米",
    "order": "1:desc",
    "pageNo": 1,
    "pageSize": 10,
    "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
    "trademark": "4:小米"
    }
 */
//当前这个接口（获取搜索模块的数据），给服务器传递一个默认的参数【至少是一个空对象】
export const reqGetSearchInfo = (params) => requests({
    url: '/list',
    method: 'post',
    data: params,
})

//获取商品详情页信息的接口 地址"/api/item/{skuId}" 请求方式：get
export const reqGoodsInfo = (skuid) => requests({
    url: `/item/${skuid}`,
    method: 'get'
})

//将产品添加到购物车中，或者更新某一个产品的个数
// /api/cart/addToCart/{skuid}/{skuNum}  POST
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'post'
})

//获取购物车列表的数据接口 url:/api/cart/cartList method:get
export const reqCartList = () => requests({
    url: '/cart/cartList',
    method: 'get'
})

//删除购物车产品接口
//URL:/api/cart/deleteCart/{skuId} method:DELETE
export const reqDeleteCartById = (skuId) => requests({
    url: `/cart/deleteCart/${skuId}`,
    method: 'delete'
})

//获取修改购物车选中状态
//URL:/api/cart/checkCart/{skuId}/{isChecked}  method:get
export const reqUpdateCheckedById = (skuId, isChecked) => requests({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: 'get'
})

//获取验证码
///api/user/passport/sendCode/{phone} get
export const reqGetCode = (phone) => requests({
    url: `user/passport/sendCode/${phone}`,
    method: 'get'
})

//注册
//url:/api/user/passport/register method:post  phone code password
export const reqUserRegister = (data) => requests({
    url: 'user/passport/register',
    data,
    method: 'post'
})

//登录
//URL:/api/user/passport/login  method:post phone password
export const reqUserLogin = (data) => requests({
    url: '/user/passport/login',
    data,
    method: 'post'
})

//获取用户信息【需要带着用户的token向服务器要用户信息】
//URL:/api/user/passport/auth/getUserInfo method:get
export const reqUserInfo = () => requests({
    url: '/user/passport/auth/getUserInfo',
    method: 'get'
})

//退出登录
export const reqLogout = () => requests({
    url: '/user/passport/logout',
    method: 'get'
})

//获取用户地址信息
export const reqAddressInfo = () => requests({
    url: '/user/userAddress/auth/findUserAddressList',
    method: 'get'
})

//获取商品清单
export const reqOrderInfo = () => requests({
    url: '/order/auth/trade',
    method: 'get'
})

//提交订单接口
//URL:/api/order/auth/submitOrder?tradeNo={tradeno}  method:post
export const reqSubmitOrder = (tradeNo, data) => requests({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    method: 'post',
    data
})

//获取支付信息
//URL:/api/payment/weixin/createNative/{orderId}  get
export const reqPayInfo = (orderId) => requests({
    url:`/payment/weixin/createNative/${orderId}`,
    method:'get'
})