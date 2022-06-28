//引入mockjs
import Mock from 'mockjs'
//把JSON数据引入进来
//webpack默认对外暴露的：图片、JSON数据格式
import banner from './banner.json'
import floor from './floor.json'

//mock数据:第一个参数是请求的地址  第二个数据是请求的数据

//模拟首页大轮播图的数据
Mock.mock(
    "/mock/banner",
    {
        code:200,
        data:banner
    }
)

Mock.mock(
    "/mock/floor",
    {
        code:200,
        data:floor
    }
)