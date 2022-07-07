import {
    reqGoodsInfo,
    reqAddOrUpdateShopCart
} from "@/api"
//封装游客身份模块uuid-->生成一个随机字符串（不能改变）
import {getUUID} from '@/utils/uuid_token'
const state = {
    goodInfo: {},
    //游客临时身份
    uuid_token:getUUID()
}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    }
}
const actions = {
    //获取产品信息的action
    async getGoodInfo({
        commit
    }, skuid) {
        let result = await reqGoodsInfo(skuid)
        if (result.code == 200) {
            commit('GETGOODINFO', result.data)
        }
    },
    //将产品添加到购物车中
    async addOrUpdateShopCart({
        commit
    }, {
        skuid,
        skuNum
    }) {
        //发请求：前端带一些参数给服务器【需要存储这些数据】，存储成功了，没有给返回数据
        //不需要三连环（数据存储在仓库）
        //注意：async函数执行返回的结果一定是Promise【要么成功||失败】
        let result = await reqAddOrUpdateShopCart(skuid, skuNum)

        if (result.code == 200) {
            //代表服务器加入购物车成功
            return 'ok'
        } else {
            //代表加入购物车失败
            return Promise.reject(new Error('faile'))
        }
    }
}
const getters = {
    //路径导航简化的数据
    categoryView(state) {
        //比如：state.goodInfo初始化的是一个空对象，空对象的categoryView的属性值是undefined
        //当前计算出的categoryView至少是个空对象，假的报错就不会有了
        return state.goodInfo.categoryView || {}
    },
    //简化产品信息的数据
    skuInfo(state) {
        return state.goodInfo.skuInfo || {}
    },
    //商品属性的数据
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || []
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}