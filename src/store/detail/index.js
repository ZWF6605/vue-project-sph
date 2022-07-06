import {
    reqGoodsInfo
} from "@/api"

const state = {
    goodInfo: {}
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
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || []
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}