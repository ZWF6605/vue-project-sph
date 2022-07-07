import {
    reqCartList
} from '@/api'
const state = {
    cartList: []
}
const mutations = {
    GETCARTlIST(state, cartList) {
        state.cartList = cartList
    }
}
const actions = {
    //获取购物车数据
    async getCartList({
        commit
    }) {
        let result = await reqCartList();
        if (result.code == 200) {
            commit('GETCARTlIST', result.data)
        }
    }
}
const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}