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
export const reqGetFloorList = ()=> mockRequests({
    url:"/floor",
    method:'get'
})